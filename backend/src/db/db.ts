import { config } from '../lib/load-config'
import { logger } from '@vtfk/logger'
import { Pool } from 'pg'
import { readFileSync } from 'fs'

let pool: Pool | null = null

function connect (): Pool {
  if (pool !== null) return pool
  pool = new Pool({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPass
  })
  return pool
}

export async function setup (): Promise<void> {
  const pool = connect()
  const dbSchemaQuery = readFileSync('./lib/db/db-schema.sql', 'utf8')
  try {
    await pool.query(dbSchemaQuery)
    logger('info', ['db', 'setup', 'successfully created tables'])
  } catch (error) {
    if (/database.*does not exist/.test(error.message)) {
      logger('error', ['db', 'setup', 'database does not exist', 'db name', config.dbName])
    }
    logger('error', ['db', 'setup', 'failed to setup database', 'throwing'])
    throw error
  }
}

interface CloseOptions {
  immediate?: boolean
}

let connectionCloseTimer: NodeJS.Timeout
export async function close (options: CloseOptions | undefined): Promise<void> {
  if (typeof connectionCloseTimer !== 'undefined') {
    clearTimeout(connectionCloseTimer)
  }
  if (options?.immediate === true) {
    logger('silly', ['db', 'close', 'connection close immediate', 'closing connection'])
    if (pool === null) return
    await pool.end()
    pool = null
  } else {
    logger('silly', ['db', 'close', 'setting connection close timeout'])
    connectionCloseTimer = setTimeout(() => {
      logger('silly', ['db', 'close', 'connection closing after timeout', 'closing connection'])
      if (pool === null) return
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      pool.end()
      pool = null
    }, 2000)
  }
}

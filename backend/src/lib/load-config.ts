import dotenv from 'dotenv'
dotenv.config()

const config = {
  dbConnString: requiredEnv('DB_CONN_STRING'),
  dbName: process.env.DB_NAME || 'partizer'
}

export {
  config
}

function requiredEnv(env: string) {
  const value = process.env[env]
  if (typeof value === 'string') return value
  throw Error(`Missing required environment variable "${env}"!`)
}
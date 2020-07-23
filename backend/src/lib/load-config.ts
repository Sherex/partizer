import dotenv from 'dotenv'
dotenv.config()

const config = {
  dbConnString: env('DB_CONN_STRING'),
  dbName: env('DB_NAME', 'partizer')
}

export {
  config
}

function env (env: string, defaultValue?: string): string {
  const value = process.env[env]
  if (typeof value === 'string') return value
  if (typeof defaultValue === 'string') return defaultValue
  throw Error(`Missing required environment variable "${env}"!`)
}

import dotenv from 'dotenv'
dotenv.config()

const config = {
  dbHost: env('DB_HOST', 'localhost'),
  dbPort: parseInt(env('DB_PORT', '5432')),
  dbName: env('DB_NAME', 'partizer'),
  dbUser: env('DB_USER', 'partizer'),
  dbPass: env('DB_PASS', 'partizer_dev_pass')
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

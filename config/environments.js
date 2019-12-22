const dotenv = require('dotenv')
const fs = require('fs')

/**
 * getEnvironmentVariables looks for and loads the environment file for the
 * given environment
 *
 * @param {string} environment
 */
const getEnvironmentVariables = environment => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  if (fs.existsSync(`config/.env.${environment}`)) {
    if (!process.env.SUPPRESS) {
      console.log(`INFO: Using .env.${environment} file to supply environment variables`)
    }
    dotenv.config({ path: `config/.env.${environment}` })
  } else {
    console.log(`ERROR: Could not find .env.${environment} file`)
  }
}

switch (process.env.NODE_ENV) {
  case 'development':
  case 'remoteDev':
  case 'local':
  case 'aws':
  case 'awsprod':
  case 'staging':
  case 'production':
    getEnvironmentVariables(process.env.NODE_ENV)
    break

  default:
    console.error('ERROR: Unknown NODE_ENV')
    break
}

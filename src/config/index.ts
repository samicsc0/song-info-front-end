import { envConfig as devConfig } from './dev.env'
import { envConfig as prodConfig } from './prod.env'
import type { Environment } from './types'

const env = import.meta.env.MODE || 'development'
let envConfig: Environment
if (env === 'development') {
    envConfig = devConfig
} else {
    envConfig = prodConfig
}
export default envConfig
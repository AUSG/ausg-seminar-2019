import * as dotenv from "dotenv"

let path = `${__dirname}/../.env`

dotenv.config({path})

export const PORT = process.env.PORT
export const DEV_PORT = process.env.DEV_PORT
export const NODE_ENV = process.env.NODE_ENV
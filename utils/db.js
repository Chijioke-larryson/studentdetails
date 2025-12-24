import pg from 'pg'
import env from 'dotenv'

env.config()


const requiredEnvVars =  [
    "PG_USER",
    "PG_HOST",
    "PG_PORT",
   "PG_PASSWORD",
   "PG_DATABASE",

]

requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        console.log(`Missing variable: ${varName}`);
        process.exit(1)
    }

})

const db =  new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
})

db.connect()
.then(() =>{
    console.log("connected with database")
})
.catch((err) =>{
    console.log("cannot connect with database")
    process.exit(1)
})

db.on("error",(err) =>{
    console.log("database error" ,err)
    process.exit(1)
})

export const query = (text, params) => db.query(text, params)
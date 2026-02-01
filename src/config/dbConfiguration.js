import mysql from 'mysql2';
// const db = mysql.createConnection({
//      // host:'localhost',
//      // user:'jns_user',
//      // password:'jns@123',
//      // database:'jns_fitness'

//      host:'mysql.railway.internal',
//      user:'root',
//      password:'jns@gNrKuEcrvZNJADuDMuCvOcGbXZiATAxF',
//      database:'railway'
// });

// const db = mysql.createConnection({
//   host: process.env.MYSQLHOST,
//   user: process.env.MYSQLUSER,
//   password: process.env.MYSQLPASSWORD,
//   database: process.env.MYSQLDATABASE,
//   port: process.env.MYSQLPORT
// });

import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL connected successfully');
});

export default db;
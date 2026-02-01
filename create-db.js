import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed:', err.message);
    return;
  }

  console.log('✅ Connected to MySQL');

  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (err) => {
      if (err) {
        console.error('❌ DB creation failed:', err.message);
      } else {
        console.log('🎉 Database created:', process.env.DB_NAME);
      }
      connection.end();
    }
  );
});
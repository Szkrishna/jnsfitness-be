
import db from '../config/dbConfiguration.js';

const addContact = (contactData, callback) => {
  const { name, gender, phone, email, interest, message } = contactData;
  const sql = ` INSERT INTO jns_fitness (name,gender, phone, email,interest, messsage)
    VALUES (?, ?, ?, ?,?,?) `;
  db.query(sql, [name, gender, phone, email, interest, message], callback);
};
export default {
  addContact
};
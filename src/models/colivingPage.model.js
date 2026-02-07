
import db from '../config/dbConfiguration.js';

const  colivingDetails= (data,callback)=>{
    const{name,phone,interest,message} = data;
    const sql =` INSERT INTO coliving_data (name,phone,interest,message)
    VALUES (?, ?, ?, ?) `;
    db.query(sql,[name,phone,interest,message],callback);
};
export default {
  colivingDetails
};
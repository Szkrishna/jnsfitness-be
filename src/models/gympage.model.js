
import db from '../config/dbConfiguration.js';

const  gymPageDetails= (data,callback)=>{
    const{name,phone,membership,message} = data;
    const sql =` INSERT INTO badminton_plan (name,phone, membership,comment)
    VALUES (?, ?, ?, ?) `;
    db.query(sql,[name,phone,membership,message],callback);
};
export default {
  gymPageDetails
};
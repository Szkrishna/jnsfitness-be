
import db from '../config/dbConfiguration.js';

const  addbadmintonDetails= (data,callback)=>{
    const{name,phone,plan,message} = data;
    const sql =` INSERT INTO badminton_table (name,phone, program_plan,comment)
    VALUES (?, ?, ?, ?) `;
    db.query(sql,[name,phone,plan,message],callback);
};
export default {
  addbadmintonDetails
};
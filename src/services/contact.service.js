
import contactModel from '../models/contact.model.js';
import badmintonModel from '../models/badminton.model.js';
import gymPageModel from '../models/gympage.model.js';
import colivingPageModel from '../models/colivingPage.model.js';

const validateNamePhone = (data, callback) => {
    if (!data.name || !data.phone) {
        callback({ message: 'Name and Phone are required' }, null);
        return false;
    }
    return true;
};

export const addContact = (data,callback)=>{
     if (!validateNamePhone(data, callback)) return;
    contactModel.addContact(data,callback);
}
export const badmintonFormDetails = (data,callback)=>{
    if (!validateNamePhone(data, callback)) return;
    badmintonModel.addbadmintonDetails(data,callback);
}
export const gymPageDetails = (data,callback)=>{
    if (!validateNamePhone(data, callback)) return;
    gymPageModel.gymPageDetails(data,callback);
}
export const colivingPageDetails = (data,callback)=>{
    if (!validateNamePhone(data, callback)) return;
    colivingPageModel.colivingDetails(data,callback);
}

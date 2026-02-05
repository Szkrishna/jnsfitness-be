import * as service from '../services/contact.service.js';

export const addContact = (req, res) => {
    service.addContact(req.body, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message || 'Error while saving the details '
            });
        }
        res.status(201).json({
            success: true,
            message: 'Contact saved successfully',
            contactId: result.insertId
        });
    })
}
export const addBadmintonDetails = (req, res) => {
    service.badmintonFormDetails(req.body, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message || 'Error while saving badminton details'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Your details has been saved successfully',
            id: result.insertId
        });
    });
};
export const addGymPageDetails = (req, res) => {
    service.gymPageDetails(req.body, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message || 'Error while saving gym details'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Your details saved successfully',
            id: result.insertId
        });
    });
};
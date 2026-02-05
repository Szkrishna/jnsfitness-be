import express from 'express';
const router = express.Router();
import {addBadmintonDetails, addContact, addGymPageDetails} from '../controllers/contact.controller.js';

router.post('/contact', addContact);
router.post('/badmintonPage', addBadmintonDetails);
router.post('/gymPage', addGymPageDetails);
router.get('/contact', (req, res) => {
  res.send('Contact API is working');
});

export default router;
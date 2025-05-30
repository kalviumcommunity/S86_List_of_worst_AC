const express = require('express');
const {
  createAc,
  getAllAcs,
  getAcById,
  updateAc,
  deleteAc
} = require('../controllers/acControllers');

const router = express.Router();

router.post('/', createAc); 
router.get('/', getAllAcs); 
router.get('/:id', getAcById); 
router.put('/:id', updateAc); 
router.delete('/:id', deleteAc); 

module.exports = router;

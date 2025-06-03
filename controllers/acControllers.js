const Ac = require('../models/AC');

// Create
exports.createAc = async (req, res) => {

  try {
    const newAc = new Ac(req.body);
    const savedAc = await newAc.save();
    return res.status(201).json(savedAc);
  } catch (err) {
    console.error('AC creation failed:', err.message);
    return res.status(500).json({ error: err.message });
  }
};


// Read all
exports.getAllAcs = async (req, res) => {
  try {
    const acs = await Ac.find();
    res.status(200).json(acs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read by ID
exports.getAcById = async (req, res) => {
  try {
    const ac = await Ac.findById(req.params.id);
    if (!ac) return res.status(404).json({ error: 'AC not found' });
    res.status(200).json(ac);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateAc = async (req, res) => {
  try {
    const updatedAc = await Ac.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAc) return res.status(404).json({ error: 'AC not found' });
    res.status(200).json(updatedAc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteAc = async (req, res) => {
  try {
    const deleted = await Ac.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'AC not found' });
    res.status(200).json({ message: 'AC deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

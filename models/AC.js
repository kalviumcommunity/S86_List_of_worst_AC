const mongoose = require('mongoose');

const AcSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  efficiency: { type: Number, required: true },
  noiseLevel: { type: Number, required: true },
  durability: { type: Number, required: true },
  complaints: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Ac', AcSchema);

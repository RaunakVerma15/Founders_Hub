const Deal = require("../models/Deal");

exports.getAllDeals = async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
};

exports.getDeal = async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  res.json(deal);
};
// ✅ CREATE DEAL API
exports.createDeal = async (req, res) => {
  try {
    const { title, description, category, isLocked, partner, eligibility,image } = req.body;

    // basic validation
    if (!title || !category || isLocked === undefined) {
      return res.status(400).json({
        message: "Title, category and isLocked are required"
      });
    }

    const deal = await Deal.create({
      title,
      description,
      category,
      isLocked,
      partner,
      eligibility,
      image
    });

    res.status(201).json({
      message: "Deal created successfully",
      deal
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create deal",
      error: error.message
    });
  }
};

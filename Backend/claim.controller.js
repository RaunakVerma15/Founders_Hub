const Claim = require("../models/Claim");
const Deal = require("../models/Deal");
const User = require("../models/User");
const mongoose = require("mongoose");

// CLAIM A DEAL
exports.claimDeal = async (req, res) => {
  try {
    const { dealId } = req.body;
    const userId = req.user.id;

    const deal = await Deal.findById(dealId);
    if (!deal) return res.status(404).json({ message: "Deal not found" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const existingClaim = await Claim.findOne({
      user: user._id,
      deal: deal._id,
    });
    if (existingClaim)
      return res.status(400).json({ message: "Deal already claimed" });

    if (deal.isLocked && !user.isVerified)
      return res.status(403).json({ message: "Verification required" });

    const claim = await Claim.create({
      user: user._id,
      deal: deal._id,
      status: "pending",
    });

    // Populate deal before sending response
    await claim.populate("deal");

    res.status(201).json(claim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY CLAIMS
exports.myClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ user: req.user.id })
      .populate({
        path: "deal",
        select: "title description benefit partner image category eligibility isLocked",
      })
      .lean(); // convert to plain object

    // Optional: filter out claims whose deals no longer exist
    const filteredClaims = claims.filter((c) => c.deal !== null);

    res.json(filteredClaims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

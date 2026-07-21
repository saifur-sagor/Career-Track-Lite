const Application = require('../models/Application');

// Create Application
exports.createApplication = async (req, res) => {
  try {
    const newApplication = new Application({
      ...req.body,
      user: req.user.id,
    });
    const savedApplication = await newApplication.save();
    res.status(201).json({ success: true, data: savedApplication });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Applications for Logged-in User
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Application Status or Notes
exports.updateApplication = async (req, res) => {
  try {
    let application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    // Check ownership
    if (application.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    application = await Application.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: application });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Application
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    // Check ownership
    if (application.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    await application.deleteOne();
    res.status(200).json({ success: true, message: 'Application removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
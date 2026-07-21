const express = require('express');
const router = express.Router();
const {
  createApplication,
  getApplications,
  updateApplication,
  deleteApplication,
} = require('../controllers/applicationController');
const auth = require('../middleware/auth');

// All routes are protected with auth middleware
router.use(auth);

router.route('/')
  .post(createApplication)
  .get(getApplications);

router.route('/:id')
  .put(updateApplication)
  .delete(deleteApplication);

module.exports = router;
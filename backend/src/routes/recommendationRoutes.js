const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getRecommendations);

module.exports = router;

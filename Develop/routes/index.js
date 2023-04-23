const express = require('express');
const router = express.Router();
const htmlRoutes = require('./htmlRoute');
const apiRoutes = require('./apiRoute');


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
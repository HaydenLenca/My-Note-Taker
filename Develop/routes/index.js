const router = require('express').Router();
const htmlRoutes = require('./htmlRoute');
const apiRoutes = require('./apiRoute');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
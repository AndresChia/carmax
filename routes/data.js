const { Router } = require('express');
const { dataPost } = require('../controllers/data');
const router = Router();
// routes
router.post('/', dataPost);

module.exports = router;

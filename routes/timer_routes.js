const router = require('express').Router();

const timer_controller = require('../controllers/timer_controller');

router.get('/', timer_controller.home);

module.exports = router;
const router = require('express').Router();
const { createPaymentIntent } = require('../controller/payment');

router.post('/pay', createPaymentIntent);
router.get("/", defaultPage)
module.exports = router;
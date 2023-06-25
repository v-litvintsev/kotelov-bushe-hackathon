const router = require('express').Router();
const {auth} = require("../controllers/AuthController");
const {getOrders,setStatus} = require("../controllers/OrderControllers");

router.get("/", function (req, res) {
    res.send("hello");
});

router.post("/api/auth",         auth);
router.get('/api/orders',        getOrders);
router.post('/api/ordersStatus', setStatus);
// router.post()
module.exports = router;

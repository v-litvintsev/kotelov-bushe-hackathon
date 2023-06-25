const router = require('express').Router();
const {auth} = require("../controllers/AuthController");
const {getOrders,setStatus} = require("../controllers/OrderControllers");

router.get("/", function (req, res) {
    res.send("hello");
});

/**
 * This function comment is parsed by doctrine
 * @route POST /api/auth
 * @param {string} email.query.required - user email
 * @returns {Array} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post("/api/auth",         auth);

/**
 * This function comment is parsed by doctrine
 * @route GET /api/orders
 * @returns {Array} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/api/orders',        getOrders);
/**
 * This function comment is parsed by doctrine
 * @route POST /api/ordersStatus
 * @param {number} id.query.required - order id
 * @param {number} statusId.query.required  - new order Status
 * @returns {Array} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/api/ordersStatus', setStatus);
// router.post()
module.exports = router;

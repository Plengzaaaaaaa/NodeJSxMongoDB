const express = require("express");
const router = express.Router();

// Import Controller
const {addOrders,updateOrdersOne,deleteOrders,getOrdersAll,getorders}=require("../controllers/orderController");

// APIs Routing Config
router.post ('/orders',addOrders);
router.put ('/customer_name/:',updateOrdersOne);
router.delete ('/orders/',deleteOrders);
router.get ('/orders',getOrdersAll);
router.get ('/:product/',getorders);

// Export router
module.exports=router;

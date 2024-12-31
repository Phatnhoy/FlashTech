const express = require('express')
const router = express.Router()
const { getUserOrders,
    getOrder,
    createOrder,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
    getOrderForAnalysis
} = require("../controllers/orderController")
const { verifyIsLoggedIn,
    verifyIsAdmin
} = require("../middleware/verifyAuthToken")

// user routes
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders)
router.get("/user/:id", getOrder)
router.post("/", createOrder)



//admin routes
router.use(verifyIsAdmin)
router.put("/paid/:id", updateOrderToPaid)
router.put("/delivered/:id", updateOrderToDelivered)
router.get("/admin", getOrders)
router.get("/analysis/:date", getOrderForAnalysis)


module.exports = router

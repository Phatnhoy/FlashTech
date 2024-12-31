const express = require('express')
const router = express.Router()
const { getUsers,
    registerUser,
    loginUser,
    updateUserProfile,
    getUserProfile,
    writeReview,
    getUser,
    updateUser,
    deleteUser
} = require("../controllers/userController")
const { verifyIsLoggedIn, verifyIsAdmin } = require('../middleware/verifyAuthToken')


router.post("/register", registerUser)
router.post("/login", loginUser)

router.use(verifyIsLoggedIn)
router.get("/profile/:id", getUserProfile)
router.put("/profile", updateUserProfile)
router.post("/review/:productId", writeReview)


//admin routes
router.use(verifyIsAdmin)
router.get("/", getUsers)
router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router

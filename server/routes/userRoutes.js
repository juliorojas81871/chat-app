const { register, login,setAvatar } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/AllUsers/:id", getAllUsers);

module.exports = router;

import express from 'express';
import userController from '../Controllers/userController.js'

const router = express.Router();

router.get("/",userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser)

router.get("/test", (req, res) => {
    res.json({ message: "Route test OK !" });
});








export default  router;
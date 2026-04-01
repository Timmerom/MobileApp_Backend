import Router from "express"
import users from '../models/users';
import UserController from "../controllers/user_controller"
import { upload } from "../configs/cloudinary"
const user_router =  Router()


user_router.post("/register", (req, res) => UserController.register(req, res));
user_router.post("/login", (req, res) => UserController.login(req, res));
user_router.get("/user/:id", (req, res) => UserController.getuser_data(req, res));
user_router.post("/avatar", upload.single('image'), (req, res) => UserController.uploadAvatar(req, res));

export default user_router;
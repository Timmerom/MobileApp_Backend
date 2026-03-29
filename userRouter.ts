import Router from "express"
import users from './users';
import UserController from "./user_controller"
const user_router =  Router()


user_router.post("/register" ,UserController.register);
user_router.post("/login" ,UserController.login);
user_router.get("/user/:id", (req, res) => UserController.getuser_data(req, res));



export default user_router;
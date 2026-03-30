
import User from "./users";

class UserService {
    async register(user: any) {

        const createdUser = await User.create(user);
        return createdUser;
    }

    async login(email: string, password: any) {
        const user = await User.findOne({ email });
        if (!user) throw new Error("Email doesn't exist");
        if (String(user.password) !== String(password)) throw new Error("Wrong Password");
        return user;
    }

    async getuser_data(id: string) {
        const user = await User.findById(id);
        if (!user) throw new Error("User was not found in DB");
        return user;
    }
}

export default new UserService();
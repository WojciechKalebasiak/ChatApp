class UserService {
    constructor() {
        this.users = [];
    }
    getAllUsers() {
        return this.usersl
    }
    getUserById(userID) {
        return this.users.find(user=>user.id===userID);
    }
    addUser(user) {
        this.user=[user,...this.users];
    }
    removeUser(userID) {
        return this.users.filter(user=>user.id !== userID);
    }
}
module.exports = UserService;
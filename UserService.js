class UserService {
    constructor() {
        this.users = [];
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(userID) {
        return this.users.find(user=>user.id===userID);
    }
    addUser(user) {
        this.users=[user,...this.users];
    }
    removeUser(userID) {
        return this.users.filter(user=>user.id !== userID);
    }
}
module.exports = UserService;
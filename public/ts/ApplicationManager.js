export class ApplicationManager {
    static addUser(user) {
        const exists = this.users.find((u) => u.email === user.email);
        if (exists)
            return false;
        this.users.push(user);
        return true;
    }
    static validateLogin(email, password) {
        const user = this.users.find((u) => u.email === email && u.password === password);
        return !!user;
    }
}
ApplicationManager.users = [
    { email: "admin@webprojekt.de", password: "admin" }, // Default-User
];

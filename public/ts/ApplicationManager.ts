type User = {
    email: string;
    password: string;
  };
  
  export class ApplicationManager {
    private static users: User[] = [
      { email: "admin@webprojekt.de", password: "admin" }, // Default-User
    ];
  
    static addUser(user: User): boolean {
      const exists = this.users.find((u) => u.email === user.email);
      if (exists) return false;
      this.users.push(user);
      return true;
    }
  
    static validateLogin(email: string, password: string): boolean {
      const user = this.users.find((u) => u.email === email && u.password === password);
      return !!user;
    }
  }
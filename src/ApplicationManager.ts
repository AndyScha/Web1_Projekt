/**
 * Diese Datei wurde mit Hilfe von ChatGPT erstellt.
 * Die folgenden Methoden wurden durch ChatGPT implementiert:
 * - getUsers()
 * - deleteUser()
 * - updateUser()
 *
 * Datum: 2024
 */

import { User } from "./domain/User.js";
import { LandingPagePOM } from "./pages/LandingPagePOM.js";
import { StartPagePOM } from "./pages/StartPagePOM.js";
import { ImpressumPagePOM } from "./pages/ImpressumPagePOM.js";
import { UserManagementPOM } from "./pages/UserManagementPOM.js";

export class ApplicationManager {
  private users: User[] = [];
  private currentUser: User | null = null;
  private landingPagePOM: LandingPagePOM;
  private startPagePOM: StartPagePOM;
  private impressumPagePOM: ImpressumPagePOM;
  private userManagementPOM: UserManagementPOM;

  constructor() {
    console.log("ApplicationManager: Instanziert");
    this.users.push(new User("admin", "123", "Andreas", "Schaaf"));
    this.landingPagePOM = new LandingPagePOM(this);
    this.startPagePOM = new StartPagePOM(this);
    this.impressumPagePOM = new ImpressumPagePOM(this);
    this.userManagementPOM = new UserManagementPOM(this);
  }

  public start(): void {
    this.landingPagePOM.showPage();
  }

  public registerUser(
    userId: string,
    password: string,
    firstName: string,
    lastName: string
  ): boolean {
    if (!userId || !password) {
      this.showToast("User-ID und Passwort dürfen nicht leer sein.", false);
      return false;
    }
    if (this.users.find((u) => u.userId === userId)) {
      this.showToast("User-ID existiert bereits.", false);
      return false;
    }
    this.users.push(new User(userId, password, firstName, lastName));
    this.showToast("Registrierung erfolgreich.", true);
    return true;
  }

  public login(userId: string, password: string): boolean {
    if (!userId || !password) {
      this.showToast("User-ID und Passwort dürfen nicht leer sein.", false);
      return false;
    }
    const user = this.users.find(
      (u) => u.userId === userId && u.password === password
    );
    if (user) {
      this.currentUser = user;
      this.showToast("Login erfolgreich.", true);
      this.startPagePOM.showPage();
      return true;
    }
    this.showToast("Login fehlerhaft.", false);
    return false;
  }

  public logout(): void {
    this.currentUser = null;
    this.landingPagePOM.showPage();
    this.showToast("Logout erfolgreich.", true);
  }

  public showToast(message: string, success: boolean): void {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = message;
      toast.className = `toast ${success ? "success" : "error"}`;
      toast.style.display = "block";
      setTimeout(() => {
        toast.style.display = "none";
      }, 3000);
    }
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }

  public getUserCount(): number {
    return this.users.length;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public deleteUser(userId: string): boolean {
    const index = this.users.findIndex((u) => u.userId === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.showToast("User erfolgreich gelöscht.", true);
      return true;
    }
    this.showToast("User konnte nicht gelöscht werden.", false);
    return false;
  }

  public updateUser(
    userId: string,
    password: string,
    firstName: string,
    lastName: string
  ): boolean {
    const user = this.users.find((u) => u.userId === userId);
    if (user) {
      user.password = password;
      user.firstName = firstName;
      user.lastName = lastName;
      this.showToast("User erfolgreich aktualisiert.", true);
      return true;
    }
    this.showToast("User konnte nicht aktualisiert werden.", false);
    return false;
  }

  public getLandingPagePOM(): LandingPagePOM {
    return this.landingPagePOM;
  }

  public getStartPagePOM(): StartPagePOM {
    return this.startPagePOM;
  }

  public getImpressumPagePOM(): ImpressumPagePOM {
    return this.impressumPagePOM;
  }

  public getUserManagementPOM(): UserManagementPOM {
    return this.userManagementPOM;
  }

  public showLandingPage(): void {
    this.landingPagePOM.showPage();
  }

  public showStartPage(): void {
    this.startPagePOM.showPage();
  }

  public showImpressumPage(): void {
    this.impressumPagePOM.showPage();
  }

  public showUserManagementPage(): void {
    this.userManagementPOM.showPage();
  }
}

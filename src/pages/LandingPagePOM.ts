import { AbstractPOM } from "./AbstractPOM.js";

export class LandingPagePOM extends AbstractPOM {
  async showPage(): Promise<void> {
    await this.loadFragment("/html/fragments/landing.html");

    // Hier kannst du Event-Listener setzen, z.B. Login-Formular
    document.getElementById("ButtonLoginUser")?.addEventListener("click", (e) => {
      e.preventDefault();
      // Login-Logik
    });
  }
}
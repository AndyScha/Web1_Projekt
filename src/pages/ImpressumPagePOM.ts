import { AbstractPOM } from './AbstractPOM.js';
import { ApplicationManager } from '../ApplicationManager.js';

export class ImpressumPagePOM extends AbstractPOM {
  constructor(appManager: ApplicationManager) {
    super(appManager);
    console.log('ImpressumPagePOM: Instanziert');
  }

  public showPage(): void {
    console.log('ImpressumPagePOM: showPage aufgerufen');
    const app = document.getElementById('app');
    const topMenu = document.getElementById('TopMenu');
    if (app && topMenu) {
      app.innerHTML = `
    <div id="ImpressumPage" class="max-w-5xl mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-4">Impressum</h1>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Angaben gemäß § 5 TMG</h2>
          <p class="text-gray-700 mb-4">
            Max Mustermann<br>
            Musterstraße 123<br>
            12345 Musterstadt
          </p>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Kontakt</h2>
          <p class="text-gray-700">
            Telefon: +49 (0) 123 456789<br>
            E-Mail: <a href="mailto:info@example.com" class="text-emerald-600 hover:underline">info@example.com</a>
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Haftungsausschluss</h2>
          <p class="text-gray-700 mb-4">
            Haftung für Inhalte: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <p class="text-gray-700">
            Haftung für Links: Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
          </p>
        </div>
      </div>
    </div>
  `;
      const isLoggedIn = this.appManager.getCurrentUser() !== null;
      topMenu.innerHTML = `
  <div class="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
    <a href="#" id="LinkRoot" class="flex items-center space-x-2">
      <span class="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 font-bold whitespace-nowrap">WE-1 SPA</span>
    </a>
    <ul class="flex space-x-6">
      <li><a href="#" id="LinkImpressum" class="text-gray-700 hover:text-emerald-500">Impressum</a></li>
      ${isLoggedIn ? `
        <li><a href="#" id="LinkUserManagement" class="text-gray-700 hover:text-emerald-500">User Management</a></li>
        <li><a href="#" id="LinkLogout" class="text-red-500 font-medium hover:underline">Logout</a></li>
      ` : ''}
    </ul>
  </div>
      `;
      this.attachEventListeners();
      console.log('ImpressumPagePOM: HTML eingefügt und Event-Listener angehängt');
    }
  }

  private attachEventListeners(): void {
    document.getElementById('LinkRoot')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('ImpressumPagePOM: LinkRoot geklickt');
      if (this.appManager.getCurrentUser()) {
        this.appManager.showStartPage();
      } else {
        this.appManager.showLandingPage();
      }
    });

    document.getElementById('LinkImpressum')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('ImpressumPagePOM: LinkImpressum geklickt');
      this.appManager.showImpressumPage();
    });

    const userManagementLink = document.getElementById('LinkUserManagement');
    if (userManagementLink) {
      userManagementLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('ImpressumPagePOM: LinkUserManagement geklickt');
        this.appManager.showUserManagementPage();
      });
    }

    const logoutLink = document.getElementById('LinkLogout');
    if (logoutLink) {
      logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('ImpressumPagePOM: LinkLogout geklickt');
        this.appManager.logout();
      });
    }
  }
}
import { AbstractPOM } from './AbstractPOM.js';
import { ApplicationManager } from '../ApplicationManager.js';

export class StartPagePOM extends AbstractPOM {
  constructor(appManager: ApplicationManager) {
    super(appManager);
    console.log('StartPagePOM: Instanziert');
  }

  public showPage(): void {
    console.log('StartPagePOM: showPage aufgerufen');
    const app = document.getElementById('app');
    const topMenu = document.getElementById('TopMenu');
    if (app && topMenu) {
      topMenu.innerHTML = `
    <div class="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
      <a href="#" id="LinkRoot" class="flex items-center space-x-2">
        <span class="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 font-bold whitespace-nowrap">WE-1 SPA</span>
      </a>
      <ul class="flex space-x-6">
        <li><a href="#" id="LinkImpressum" class="text-gray-700 hover:text-emerald-500">Impressum</a></li>
        <li><a href="#" id="LinkUserManagement" class="text-gray-700 hover:text-emerald-500">User Management</a></li>
        <li><a href="#" id="LinkLogout" class="text-red-500 font-medium hover:underline">Logout</a></li>
      </ul>
    </div>
  `;
      app.innerHTML = `
  <div id="StartPage" class="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
    <h2 id="StartPageWelcomeText" class="text-3xl font-bold text-emerald-600">
      Willkommen, <span id="UserCount">${this.appManager.getUserCount()}</span> User sind registriert!
    </h2>
    <a href="#" id="StartPageLinkUserManagement" class="bg-emerald-400 hover:bg-lime-700 text-white font-medium rounded-md px-6 py-3 shadow-md">
      Zum User Management
    </a>
  </div>
`;
      this.attachEventListeners();
      console.log('StartPagePOM: HTML eingefügt und Event-Listener angehängt');
    }
  }

  private attachEventListeners(): void {
    document.getElementById('LinkRoot')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('StartPagePOM: LinkRoot geklickt');
      this.appManager.showStartPage();
    });

    document.getElementById('LinkImpressum')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('StartPagePOM: LinkImpressum geklickt');
      this.appManager.showImpressumPage();
    });

    document.getElementById('LinkLogout')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('StartPagePOM: LinkLogout geklickt');
      this.appManager.logout();
    });

    document.getElementById('LinkUserManagement')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('StartPagePOM: LinkUserManagement geklickt');
      this.appManager.showUserManagementPage();
    });

    document.getElementById('StartPageLinkUserManagement')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('StartPagePOM: StartPageLinkUserManagement geklickt');
      this.appManager.showUserManagementPage();
    });
  }
}
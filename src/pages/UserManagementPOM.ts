import { AbstractPOM } from './AbstractPOM.js';
import { ApplicationManager } from '../ApplicationManager.js';

export class UserManagementPOM extends AbstractPOM {
  constructor(appManager: ApplicationManager) {
    super(appManager);
    console.log('UserManagementPOM: Instanziert');
  }

  public showPage(): void {
    console.log('UserManagementPOM: showPage aufgerufen');
    const app = document.getElementById('app');
    const topMenu = document.getElementById('TopMenu');
    if (app && topMenu) {
      app.innerHTML = `
    <div id="UserManagementPage" class="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h1 class="text-3xl font-bold text-emerald-600">User Administration</h1>
        <div class="flex justify-end">
          <button class="add-button bg-emerald-400 hover:bg-lime-700 text-white font-medium rounded px-4 py-2">+</button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse">
            <thead>
              <tr class="bg-emerald-500 text-white">
                <th class="px-4 py-2 text-left">User-ID</th>
                <th class="px-4 py-2 text-left">First Name</th>
                <th class="px-4 py-2 text-left">Last Name</th>
                <th class="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-gray-100">
                <td class="px-4 py-2">admin</td>
                <td class="px-4 py-2">Udo</td>
                <td class="px-4 py-2">Müller</td>
                <td class="px-4 py-2 space-x-2">
                  <button class="edit-button bg-blue-500 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm">Edit</button>
                  <button class="delete-button bg-red-500 hover:bg-red-700 text-white rounded-md px-3 py-1 text-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button id="backButton" class="bg-gray-400 hover:bg-gray-600 text-white font-medium rounded px-4 py-2">
          Zurück
        </button>
      </div>
    </div>
  `;
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
      this.attachEventListeners();
      console.log('UserManagementPOM: HTML eingefügt und Event-Listener angehängt');
    }
  }

  private attachEventListeners(): void {
    document.getElementById('LinkRoot')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('UserManagementPOM: LinkRoot geklickt');
      this.appManager.showStartPage();
    });

    document.getElementById('LinkImpressum')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('UserManagementPOM: LinkImpressum geklickt');
      this.appManager.showImpressumPage();
    });

    document.getElementById('LinkUserManagement')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('UserManagementPOM: LinkUserManagement geklickt');
      this.appManager.showUserManagementPage();
    });

    document.getElementById('LinkLogout')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('UserManagementPOM: LinkLogout geklickt');
      this.appManager.logout();
    });

    document.getElementById('backButton')?.addEventListener('click', () => {
      console.log('UserManagementPOM: backButton geklickt');
      this.appManager.showStartPage();
    });
  }
}
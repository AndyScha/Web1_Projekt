import { AbstractPOM } from './AbstractPOM.js';
import { ApplicationManager } from '../ApplicationManager.js';

export class LandingPagePOM extends AbstractPOM {
  constructor(appManager: ApplicationManager) {
    super(appManager);
    console.log('LandingPagePOM: Instanziert');
  }

  public showPage(): void {
    console.log('LandingPagePOM: showPage aufgerufen');
    const app = document.getElementById('app');
    const topMenu = document.getElementById('TopMenu');
    if (!app) {
      console.error('LandingPagePOM: #app Container nicht gefunden');
      return;
    }
    if (!topMenu) {
      console.error('LandingPagePOM: #TopMenu nicht gefunden');
      return;
    }
    app.innerHTML = `
      <div id="LandingPage" class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md" id="FormLogin">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <div class="mb-4">
            <input type="text" id="FormLoginUsername" placeholder="Username"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div class="mb-4">
            <input type="password" id="FormLoginPassword" placeholder="Password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <button id="ButtonLoginUser"
            class="w-full bg-emerald-400 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-emerald-300">
            Login
          </button>
          <a href="#" id="LinkShowSignupDialog" class="block mt-4 text-center text-emerald-600 hover:underline">Registrieren</a>
        </div>

        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md hidden" id="FormSignup">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Registrieren</h2>
          <div class="mb-4">
            <input type="text" id="FormSignupUsername" placeholder="Username"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div class="mb-4">
            <input type="password" id="FormSignupPassword" placeholder="Password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div class="mb-4">
            <input type="text" id="FormSignupFirstName" placeholder="Vorname"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div class="mb-4">
            <input type="text" id="FormSignupLastName" placeholder="Nachname"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <button id="ButtonSignupUser"
            class="w-full bg-emerald-400 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-emerald-300">
            Registrieren
          </button>
          <a href="#" id="LinkShowLoginDialog" class="block mt-4 text-center text-emerald-600 hover:underline">Zum Login</a>
        </div>
      </div>
    `;
    topMenu.innerHTML = `
  <div class="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
    <a href="#" id="LinkRoot" class="flex items-center space-x-2">
      <span class="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 font-bold whitespace-nowrap">WE-1 SPA</span>
    </a>
    <ul class="flex space-x-6">
      <li><a href="#" id="LinkImpressum" class="text-white hover:text-emerald-500">Impressum</a></li>
    </ul>
  </div>
`;
    console.log('LandingPagePOM: HTML eingefügt');
    this.attachEventListeners();
    console.log('LandingPagePOM: Event-Listener angehängt');
  }

  private attachEventListeners(): void {
    document.getElementById('LinkShowSignupDialog')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('LandingPagePOM: LinkShowSignupDialog geklickt');
      document.getElementById('FormLogin')!.style.display = 'none';
      document.getElementById('FormSignup')!.style.display = 'block';
    });

    document.getElementById('LinkShowLoginDialog')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('LandingPagePOM: LinkShowLoginDialog geklickt');
      document.getElementById('FormSignup')!.style.display = 'none';
      document.getElementById('FormLogin')!.style.display = 'block';
    });

    document.getElementById('ButtonLoginUser')?.addEventListener('click', () => {
      console.log('LandingPagePOM: ButtonLoginUser geklickt');
      const username = (document.getElementById('FormLoginUsername') as HTMLInputElement).value;
      const password = (document.getElementById('FormLoginPassword') as HTMLInputElement).value;
      if (this.appManager.login(username, password)) {
        (document.getElementById('FormLoginUsername') as HTMLInputElement).value = '';
        (document.getElementById('FormLoginPassword') as HTMLInputElement).value = '';
      }
    });

    document.getElementById('ButtonSignupUser')?.addEventListener('click', () => {
      console.log('LandingPagePOM: ButtonSignupUser geklickt');
      const username = (document.getElementById('FormSignupUsername') as HTMLInputElement).value;
      const password = (document.getElementById('FormSignupPassword') as HTMLInputElement).value;
      const firstName = (document.getElementById('FormSignupFirstName') as HTMLInputElement).value;
      const lastName = (document.getElementById('FormSignupLastName') as HTMLInputElement).value;
      if (this.appManager.registerUser(username, password, firstName, lastName)) {
        // Felder sicher leeren, aber auf dem Registrierungsformular bleiben
        const usernameField = document.getElementById('FormSignupUsername') as HTMLInputElement | null;
        const passwordField = document.getElementById('FormSignupPassword') as HTMLInputElement | null;
        const firstNameField = document.getElementById('FormSignupFirstName') as HTMLInputElement | null;
        const lastNameField = document.getElementById('FormSignupLastName') as HTMLInputElement | null;

        if (usernameField) usernameField.value = '';
        if (passwordField) passwordField.value = '';
        if (firstNameField) firstNameField.value = '';
        if (lastNameField) lastNameField.value = '';
      }
    });

    document.getElementById('LinkRoot')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('LandingPagePOM: LinkRoot geklickt');
      this.appManager.getLandingPagePOM().showPage();
    });

    document.getElementById('LinkImpressum')?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('LandingPagePOM: LinkImpressum geklickt');
      this.appManager.getImpressumPagePOM().showPage();
    });
  }
}
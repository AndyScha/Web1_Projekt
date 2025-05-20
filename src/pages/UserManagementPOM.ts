import { AbstractPOM } from "./AbstractPOM.js";
import { ApplicationManager } from "../ApplicationManager.js";
import { User } from "../domain/User.js";

export class UserManagementPOM extends AbstractPOM {
  constructor(appManager: ApplicationManager) {
    super(appManager);
    console.log("UserManagementPOM: Instanziert");
  }

  private generateTableRows(): string {
    const users = this.appManager.getUsers();
    return users
      .map(
        (user) => `
      <tr class="border-b hover:bg-gray-100">
        <td id="${user.userId}TableItemUsername" class="px-4 py-2">${user.userId}</td>
        <td id="${user.userId}TableItemFirstName" class="px-4 py-2">${user.firstName}</td>
        <td id="${user.userId}TableItemLastName" class="px-4 py-2">${user.lastName}</td>
        <td class="px-4 py-2 space-x-2">
          <button id="${user.userId}TableItemEditButton" class="edit-button bg-blue-500 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm">Edit</button>
          <button id="${user.userId}TableItemDeleteButton" class="delete-button bg-red-500 hover:bg-red-700 text-white rounded-md px-3 py-1 text-sm">Delete</button>
        </td>
      </tr>
    `
      )
      .join("");
  }

  public showPage(): void {
    console.log("UserManagementPOM: showPage aufgerufen");
    const app = document.getElementById("app");
    const topMenu = document.getElementById("TopMenu");
    if (app && topMenu) {
      app.innerHTML = `
    <div id="UserManagementPage" class="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h1 class="text-3xl font-bold text-emerald-600">User Administration</h1>
        <div class="flex justify-end">
          <button id="ButtonAddUser" class="add-button bg-emerald-400 hover:bg-lime-700 text-white font-medium rounded px-4 py-2">+</button>
        </div>
        <div class="overflow-x-auto">
          <table id="TableUsers" class="min-w-full table-auto border-collapse">
            <thead>
              <tr class="bg-emerald-500 text-white">
                <th class="px-4 py-2 text-left">Username</th>
                <th class="px-4 py-2 text-left">Vorname</th>
                <th class="px-4 py-2 text-left">Nachname</th>
                <th class="px-4 py-2 text-left">Aktionen</th>
              </tr>
            </thead>
            <tbody>
              ${this.generateTableRows()}
            </tbody>
          </table>
        </div>
        <button id="backButton" class="bg-gray-400 hover:bg-gray-600 text-white font-medium rounded px-4 py-2">
          Zurück
        </button>
      </div>
    </div>

    <!-- 
      Die folgenden Dialoge wurden mit Hilfe von ChatGPT erstellt:
      - FormAddUser: Dialog zum Hinzufügen eines neuen Users
      - FormEditUser: Dialog zum Bearbeiten eines bestehenden Users
      
      Datum: 2024
    -->
    <!-- Dialog zum Hinzufügen eines Users -->
    <div id="FormAddUser" class="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">Neuen User anlegen</h3>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="FormAddUserUsername" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Passwort</label>
            <input type="password" id="FormAddUserPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Vorname</label>
            <input type="text" id="FormAddUserFirstName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Nachname</label>
            <input type="text" id="FormAddUserLastName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" id="FormAddUserCancel" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md">Abbrechen</button>
            <button type="submit" id="FormAddUserSubmit" class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md">Speichern</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Dialog zum Bearbeiten eines Users -->
    <div id="FormEditUser" class="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">User bearbeiten</h3>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="FormEditUserUsername" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Passwort</label>
            <input type="password" id="FormEditUserPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Vorname</label>
            <input type="text" id="FormEditUserFirstName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Nachname</label>
            <input type="text" id="FormEditUserLastName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" id="FormEditUserCancel" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md">Abbrechen</button>
            <button type="submit" id="FormEditUserSubmit" class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md">Speichern</button>
          </div>
        </form>
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
      console.log(
        "UserManagementPOM: HTML eingefügt und Event-Listener angehängt"
      );
    }
  }

  private attachEventListeners(): void {
    document.getElementById("LinkRoot")?.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("UserManagementPOM: LinkRoot geklickt");
      this.appManager.showStartPage();
    });

    document.getElementById("LinkImpressum")?.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("UserManagementPOM: LinkImpressum geklickt");
      this.appManager.showImpressumPage();
    });

    document
      .getElementById("LinkUserManagement")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("UserManagementPOM: LinkUserManagement geklickt");
        this.appManager.showUserManagementPage();
      });

    document.getElementById("LinkLogout")?.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("UserManagementPOM: LinkLogout geklickt");
      this.appManager.logout();
    });

    document.getElementById("backButton")?.addEventListener("click", () => {
      console.log("UserManagementPOM: backButton geklickt");
      this.appManager.showStartPage();
    });

    // Event Listener für den Add User Button
    document.getElementById("ButtonAddUser")?.addEventListener("click", () => {
      const formAddUser = document.getElementById("FormAddUser");
      if (formAddUser) {
        formAddUser.classList.remove("hidden");
      }
    });

    // Event Listener für den Cancel Button im Add User Dialog
    document
      .getElementById("FormAddUserCancel")
      ?.addEventListener("click", () => {
        const formAddUser = document.getElementById("FormAddUser");
        if (formAddUser) {
          formAddUser.classList.add("hidden");
        }
      });

    // Event Listener für den Submit Button im Add User Dialog
    document
      .getElementById("FormAddUserSubmit")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        // Hier kommt die Logik zum Hinzufügen eines Users
        const formAddUser = document.getElementById("FormAddUser");
        if (formAddUser) {
          formAddUser.classList.add("hidden");
        }
      });

    // Event Listener für den Cancel Button im Edit User Dialog
    document
      .getElementById("FormEditUserCancel")
      ?.addEventListener("click", () => {
        const formEditUser = document.getElementById("FormEditUser");
        if (formEditUser) {
          formEditUser.classList.add("hidden");
        }
      });

    // Event Listener für den Submit Button im Edit User Dialog
    document
      .getElementById("FormEditUserSubmit")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        // Hier kommt die Logik zum Bearbeiten eines Users
        const formEditUser = document.getElementById("FormEditUser");
        if (formEditUser) {
          formEditUser.classList.add("hidden");
        }
      });

    // Event Listener für Delete Buttons
    const users = this.appManager.getUsers();
    users.forEach((user) => {
      const deleteButton = document.getElementById(
        `${user.userId}TableItemDeleteButton`
      );
      if (deleteButton) {
        deleteButton.addEventListener("click", () => {
          console.log(
            `UserManagementPOM: Delete Button für User ${user.userId} geklickt`
          );
          this.appManager.deleteUser(user.userId);
          this.showPage(); // Aktualisiere die Tabelle nach dem Löschen
        });
      }

      const editButton = document.getElementById(
        `${user.userId}TableItemEditButton`
      );
      if (editButton) {
        editButton.addEventListener("click", () => {
          console.log(
            `UserManagementPOM: Edit Button für User ${user.userId} geklickt`
          );
          const formEditUser = document.getElementById("FormEditUser");
          if (formEditUser) {
            // Fülle die Formularfelder mit den User-Daten
            const usernameInput = document.getElementById(
              "FormEditUserUsername"
            ) as HTMLInputElement;
            const passwordInput = document.getElementById(
              "FormEditUserPassword"
            ) as HTMLInputElement;
            const firstNameInput = document.getElementById(
              "FormEditUserFirstName"
            ) as HTMLInputElement;
            const lastNameInput = document.getElementById(
              "FormEditUserLastName"
            ) as HTMLInputElement;

            if (
              usernameInput &&
              passwordInput &&
              firstNameInput &&
              lastNameInput
            ) {
              usernameInput.value = user.userId;
              passwordInput.value = user.password;
              firstNameInput.value = user.firstName;
              lastNameInput.value = user.lastName;
            }

            formEditUser.classList.remove("hidden");
          }
        });
      }
    });
  }
}

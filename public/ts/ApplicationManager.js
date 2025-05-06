export class ApplicationManager {
    static loadUsersFromStorage() {
        const usersJSON = localStorage.getItem("users");
        if (usersJSON) {
            this.users = JSON.parse(usersJSON);
        }
    }
    static addUser(user) {
        const exists = this.users.find((u) => u.email === user.email);
        if (exists)
            return false;
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        return true;
    }
    static validateLogin(email, password) {
        const user = this.users.find((u) => u.email === email && u.password === password);
        return !!user;
    }
    static logout() {
        this.loggedInUser = null;
        window.location.href = "/index.html";
    }
    static showToast(message, type) {
        var _a;
        const toastContainer = document.getElementById("toast-container");
        if (!toastContainer)
            return;
        const toast = document.createElement("div");
        toast.style.zIndex = "9999";
        const baseClasses = "flex items-center p-4 mb-4 max-w-xs bg-white rounded-lg shadow text-sm font-normal text-gray-900 pointer-events-auto border-2";
        const colorClass = type === "success"
            ? "border-green-500"
            : type === "error"
                ? "border-red-500"
                : "border-gray-500";
        toast.className = `${baseClasses} ${colorClass}`;
        const iconHTML = type === "success"
            ? `<div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-transparent">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
          </div>`
            : `<div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-transparent">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
            </svg>
          </div>`;
        toast.innerHTML = `
        ${iconHTML}
        <div class="ms-3 text-sm font-normal">${message}</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>`;
        (_a = toast.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => toast.remove());
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 5000);
    }
}
ApplicationManager.users = [
    { email: "admin@webprojekt.de", password: "admin" }, // Default-User
];
ApplicationManager.loggedInUser = null;

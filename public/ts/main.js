var _a, _b;
import { ApplicationManager } from "./ApplicationManager.js";
(_a = document.getElementById("ButtonSignupUser")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("signup-email");
    const passwordInput = document.getElementById("signup-password");
    const email = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || "";
    const password = (passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value) || "";
    const success = ApplicationManager.addUser({ email, password });
    if (success) {
        showToast("Registrierung erfolgreich!", "success");
        toggleForms("login");
    }
    else {
        showToast("Benutzer existiert bereits!", "error");
    }
});
(_b = document.getElementById("ButtonLoginUser")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("FormLoginUsername");
    const passwordInput = document.getElementById("FormLoginPassword");
    const email = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || "";
    const password = (passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value) || "";
    const success = ApplicationManager.validateLogin(email, password);
    if (success) {
        showToast("Login erfolgreich!", "success");
        setTimeout(() => {
            window.location.href = "/html/start.html";
        }, 1000);
    }
    else {
        showToast("Login fehlgeschlagen!", "error");
    }
});
function showToast(message, type) {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer)
        return;
    const toast = document.createElement("div");
    toast.className = type === "success" ? "toast-success" : "toast-error";
    toast.innerText = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
function toggleForms(formType) {
    const loginForm = document.getElementById("FormLogin");
    const signupForm = document.getElementById("FormSignup");
    if (formType === "signup") {
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.add("hidden");
        signupForm === null || signupForm === void 0 ? void 0 : signupForm.classList.remove("hidden");
    }
    else {
        signupForm === null || signupForm === void 0 ? void 0 : signupForm.classList.add("hidden");
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.remove("hidden");
    }
}

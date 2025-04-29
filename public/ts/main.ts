import { ApplicationManager } from "./ApplicationManager.js";

document.getElementById("ButtonSignupUser")?.addEventListener("click", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("signup-email") as HTMLInputElement | null;
  const passwordInput = document.getElementById("signup-password") as HTMLInputElement | null;
  const email = emailInput?.value || "";
  const password = passwordInput?.value || "";

  const success = ApplicationManager.addUser({ email, password });
  if (success) {
    showToast("Registrierung erfolgreich!", "success");
    toggleForms("login");
  } else {
    showToast("Benutzer existiert bereits!", "error");
  }
});

document.getElementById("ButtonLoginUser")?.addEventListener("click", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("FormLoginUsername") as HTMLInputElement | null;
  const passwordInput = document.getElementById("FormLoginPassword") as HTMLInputElement | null;
  const email = emailInput?.value || "";
  const password = passwordInput?.value || "";

  const success = ApplicationManager.validateLogin(email, password);
  if (success) {
    showToast("Login erfolgreich!", "success");
    setTimeout(() => {
      window.location.href = "/html/start.html";
    }, 1000);
  } else {
    showToast("Login fehlgeschlagen!", "error");
  }
});

function showToast(message: string, type: "success" | "error") {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) return;
  
    const toast = document.createElement("div");
  
    toast.className = type === "success" ? "toast-success" : "toast-error";
  
    toast.innerText = message;
    toastContainer.appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

function toggleForms(formType: "login" | "signup") {
    const loginForm = document.getElementById("FormLogin");
    const signupForm = document.getElementById("FormSignup");
  
    if (formType === "signup") {
      loginForm?.classList.add("hidden");
      signupForm?.classList.remove("hidden");
    } else {
      signupForm?.classList.add("hidden");
      loginForm?.classList.remove("hidden");
    }
  }
export abstract class AbstractPOM {
    abstract showPage(): void;
  
    protected clearContent(): void {
      const mainContent = document.getElementById("MainContent");
      if (mainContent) mainContent.innerHTML = "";
    }
  
    protected async loadFragment(fragmentUrl: string): Promise<void> {
      const mainContent = document.getElementById("MainContent");
      if (!mainContent) return;
  
      const response = await fetch(fragmentUrl);
      const html = await response.text();
      mainContent.innerHTML = html;
    }
  }
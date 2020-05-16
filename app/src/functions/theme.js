export function checkTheme() {
  var theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "light");
    document
      .getElementById("theme")
      .setAttribute("href", "/css/light-theme.css");
  } else {
    if (theme === "light" || theme === "dark") {
      document
        .getElementById("theme")
        .setAttribute("href", `/css/${theme}-theme.css`);
    } else {
      document
        .getElementById("theme")
        .setAttribute("href", "/css/light-theme.css");
    }
  }
}

export function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document
    .getElementById("theme")
    .setAttribute("href", `/css/${themeName}-theme.css`);
}

export function toggleTheme() {
  localStorage.getItem("theme") === "dark"
    ? setTheme("light")
    : setTheme("dark");
}

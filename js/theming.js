//host check for theme changes #253746
let client_host_name;
if (window.location.hostname.includes('riftfeed')) {
  client_host_name = "riftfeed";
  document.documentElement.style.setProperty(
    "--background-color-dark-mode",
    "#f3f3f3"
  );
  document.documentElement.style.setProperty(
    "--champcard-background-dark-mode",
    "#fff"
  );
  document.documentElement.style.setProperty("--button-color-1", "#253746");
  document.documentElement.style.setProperty(
    "--card-text-color-dark-mode",
    "#000"
  );
  document.documentElement.style.setProperty("--text-color-dark-mode", "#000");
  document.documentElement.style.setProperty(
    "--text-color-dark-mode-misc-1",
    "#4e4d4d"
  );

  document.documentElement.style.setProperty(
    "--border-color-hovered-dark-mode",
    "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--champ-filter",
    "brightness(0.05)"
  );
  document.getElementsByClassName("statistics-summary").style = "color: #000";
} else {
  client_host_name = "earlygame";
}

import { App } from "./App.js";
import ContactInfoProvider from "./components/ContactInfoProvider.js";
import ScrollTopButton from "./components/ScrollTopButton.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
  ScrollTopButton(".scroll-top-btn");
  ContactInfoProvider();
});

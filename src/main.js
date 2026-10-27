import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css"; // <-- ضفنا السطر ده
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // <-- لو هتحتاج دروب داون أو مودال
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

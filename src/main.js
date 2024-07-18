import { createApp } from 'vue'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//AppVue 
import App from './App.vue'
//Router.js
import { router } from './router';


createApp(App).use(router).mount('#app');

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';

const app = createApp(App).use(Antd);
app.mount("#app");

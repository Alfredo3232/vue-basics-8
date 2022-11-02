import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.component('base-card', BaseCard);

app.mount('#app');

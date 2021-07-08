import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'
import store from './store'

const i18nSring = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

const app = createApp(App);
// app.directive('focus', {
//    mounted(el) {
//        el.focus();
//    } 
// });
app.use(i18nPlugin, i18nSring);
app.use(store);
app.use(router);
app.mixin(mixins).mount('#app');

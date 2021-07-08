export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                console.log('o => [%o], i => [%s], options => [%o]', o, i, options);
                if(o) return o[i];
            }, options);
        };
        app.provide('i18n', options);
    }
}
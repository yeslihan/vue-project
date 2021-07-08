import axios from 'axios'

export default {
    methods: {
        async $api(url, method, data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    },
    mounted() {
        console.log('mixin Mounted');
    },
    unmounted() {
        console.log('mixin Unmounted');
    }
}
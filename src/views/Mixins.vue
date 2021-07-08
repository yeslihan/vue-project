<template>
    <div>
        <input type="text" v-focus /><br>
        <h2>{{ $translate("ko.hi") }}</h2>
        <h2>{{ i18n.ko.hi }}</h2>
    </div>
</template>
<script>
import ApiMixin from '../api.js'

export default {
    inject: ['i18n'],
    mixins: [ApiMixin],
    data() {
        return {
            productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI('https://450eb07b-4022-4396-87ee-fc645148f645.mock.pstmn.io/list', 'get');
        console.log('컴포넌트 mounted');
        console.log(this.productList);
        console.log(this.i18n);
    },
    unmounted() {
        console.log('컴포넌트 unmounted');
    },
    directives: {
        focus: {
            mounted(el) {
                el.focus();
            }
        }
    }
}
</script>

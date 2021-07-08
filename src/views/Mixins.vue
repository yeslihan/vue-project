<template>
    <div></div>
</template>
<script>
import ApiMixin from '../api.js'

export default {
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
    },
    unmounted() {
        console.log('컴포넌트 unmounted');
    }
}
</script>

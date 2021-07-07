<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            productList: []
        };
    },
    setup() {},
    created() {
        this.getList();
    },
    mounted() {},
    unmounted() {},
    methods: {
        async getList() {
            this.productList = await this.$api('https://450eb07b-4022-4396-87ee-fc645148f645.mock.pstmn.io/list', 'get');
        }
    }
}
</script>

<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border:1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>
<template>
    <div>
        <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" :num="42" :objt="{id:23, title:'ee'}" :propF="12"/>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle'
export default {
    name: '',
    components: {PageTitle},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style>

</style>
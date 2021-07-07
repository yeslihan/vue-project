<template>
    <button type="button" @click="childFunc" ref="btn">click</button>
    <h1>{{msg}}</h1>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            msg: '---'
        };
    },
    setup() {},
    created() {},
    mounted() {
        // this.$emit('send-message', this.msg);
    },
    unmounted() {},
    methods: {
        childFunc() {
            // console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
            // this.$emit('send-message', '자식 컴포넌트가 보내는 메세지');
            this.msg = '변경된 메세지';
        },
        callFromParent() {
            console.log('부모 컴포넌트에서 직접 호출한 함수');
        }
    }
}
</script>

<style>

</style>
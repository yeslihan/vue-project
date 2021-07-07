<template>
    <div>
        <ChildComponent @send-message="sendMessage" ref="child_component" />
        <button type="button" @click="changeChildData">Change Child Data</button>
        <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
    name: '',
    components: {ChildComponent},
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {},
    created() {},
    mounted() {
        // this.$refs.child_component.$refs.btn.click();
        this.$refs.child_component.callFromParent();
    },
    unmounted() {},
    computed: {
        msg() {
            return this.$refs.child_component.msg;
        }
    },
    methods: {
        changeChildData() {
            this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터';
        },
        sendMessage(data) {
            console.log(data);
            this.$refs.child_component.msg = data;
        },
        checkChild() {
            alert(this.msg);
        }
    }
}
</script>

<style>

</style>
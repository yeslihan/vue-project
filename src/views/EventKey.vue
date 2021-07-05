<template>
    <div>
        <input type="number" @keyup.enter="showMsg($event)" ><br>
        <input type="number" @keyup.alt.enter="showMsg($event)" >
        <p>{{inputNumber}}</p>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            inputNumber: 0
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        showMsg(event) {
            alert(event.target.value);
            this.inputNumber += Number(event.target.value);
        }
    }
}
</script>

<style>

</style>
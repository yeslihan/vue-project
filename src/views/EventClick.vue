<template>
    <div>
        <!-- <button type="button" @click="incCounter">Add 1</button> -->
        <button type="button" @click="setCount(7), incCounter()">Set 7</button>
        <p>The Counter is : {{counter}}</p>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            counter: 0
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        setCount(c) {
            this.counter = c;
        },
        incCounter() {
            this.counter+=1;
        }
    }
}
</script>

<style>

</style>
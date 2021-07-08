<template>
    <div>
        <p>Count: {{count}}</p>
        <p>Cart Count: {{cartCount}}</p>
        <button type="button" @click="increment">Increment</button>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        cartCount() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        increment() {
            // return this.$store.commit('increment'); // call mutations
            return this.$store.dispatch('increment'); //call actions
        }
    },
}
</script>

<style>

</style>
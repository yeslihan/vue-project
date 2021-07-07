<template>
    <ProvideInjectChild />
</template>

<script>
import ProvideInjectChild from './ProvideInjectChild'

export default {
    name: '',
    components: {ProvideInjectChild},
    data() {
        return {
            items: ['A', 'B', 'C']
        };
    },
    provide() {
        return {
            itemLength: this.items.length
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
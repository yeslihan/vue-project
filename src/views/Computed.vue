<template>
    <div>
        <h1>Full Name : {{fullName}}</h1>
        <button type="button" @click="changeName">변경</button>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            firstName: 'James',
            lastName: 'hetfield'
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeName() {
            this.firstName = 'TESt';
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<style>

</style>
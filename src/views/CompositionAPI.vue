<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1">
            <span>+</span>
            <input type="text" v-model="num2">
            <span>=</span>
            <span>{{result}}</span>
        </div>
    </div>
</template>

<script>
import {plusCalculator} from '../common.js'
export default {
    name: 'calculator',
    setup() {
        let {num1, num2, result} = plusCalculator();
        return {
            num1, num2, result
        }
    }
}

/*
import {reactive, computed, toRefs} from 'vue';
function plusCalculator() {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    });
    return toRefs(state);
}
export default {
    name: 'calculator',
    setup() {
        let {num1, num2, result} = plusCalculator();
        return {
            num1, num2, result
        }
    }
}
*/
/*
import {reactive, computed} from 'vue';
export default {
    name: 'calculator',
    components: {},
    setup() {
        let state = reactive({
            num1:0,
            num2:0,
            result: computed(() => parseInt(state.num1) + parseInt(state.num2))
        });
        // function plusNumbers() {
        //     state.result = parseInt(state.num1) + parseInt(state.num2);
        // }
        return {
            state
            // plusNumbers
        }
    }
}
*/
</script>

<style>

</style>
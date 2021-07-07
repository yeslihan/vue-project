<template>
    <h2>{{title}} / {{total = num + 12}}</h2>
    <span>{{ objt }}</span><br>
    <span>{{ propF }}</span><br>
</template>

<script>
export default {
    data() {
        return {
            total: 12,
            returnObj: {
                id:1, title: 'test'
            }
        }
    },
    props: {
        title: {
            type: String,
            default: "페이지 제목입니다."
        },
        num: {
            type: Number,
            default: 1
        },
        objt: {
            type: Object,
            required: true,
            default: () => {
                return {id:1, title: 'test'}
            }
        },
        propF: {
            type: Number,
            validator: (value) => {
                console.log("value %o", value);
                return value > 10;
            }
        }
    }
}
</script>


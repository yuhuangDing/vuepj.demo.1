<template>
    <div>
        <comment :id="$route.params.id"></comment>
    </div>
</template>

<script>
    import comment from "../subcomponent/comment.vue";

    export default {
        name: "goodscomment",
        components: {comment},

        methods:{

        }
    }
</script>

<style scoped>

</style>
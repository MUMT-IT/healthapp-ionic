<template>
    <base-layout>
    <p>this is Homepage</p>
    <h2>{{ msg }}</h2>
    <p>{{ dis }}</p>
    </base-layout>
</template>
<script>
export default {
    components:{

    },
    data(){
        return{
            msg: this.$route.query.title,
            dis: this.$route.query.dis
        }
    },
};
</script>
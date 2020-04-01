<template>
    <div>
        <dashboard v-if="token"/>
        <login v-else/>
    </div>
</template>

<script>
    import Login from "./views/Login";
    import store from "./store/modules/login";
    import {mapState} from 'vuex';
    import Dashboard from "./views/admin/Dashboard";

    export default {
        name: 'App',
        store,
        components: {
            Dashboard,
            Login,
        },
        computed: {
            ...mapState([
                'token'
            ])
        },
    }
</script>

<style>

</style>

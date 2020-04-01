<template>
    <div>
        <navbar></navbar>
        <left-sidebar></left-sidebar>
        <div class="content-wrapper">
            <router-view/>
        </div>
        <right-sidebar></right-sidebar>
        <basement></basement>
    </div>
</template>

<script>
    import Navbar from "../../components/layout/navbar";
    import LeftSidebar from "../../components/layout/left-sidebar";
    import RightSidebar from "../../components/layout/right-sidebar";
    import Basement from "../../components/layout/basement";

    export default {
        name: "Admin",
        components: {
            Navbar,
            LeftSidebar,
            RightSidebar,
            Basement,
        },
    }
</script>

<style scoped>

</style>
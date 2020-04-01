<template>
    <div class="hold-transition login-page">
        <div v-for="err in errors" v-bind:key="err.message">{{err.message}}</div>
        <div class="login-box">
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit="sendLogin" method="post" novalidate="novalidate">
                        <div>
                            <div class="input-group mb-3">
                                <input v-model="user.email" type="email" class="form-control" required="required" placeholder="Email">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input v-model="user.password" type="password" required="required" class="form-control"
                                       placeholder="Password">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                </div>
                                <div class="col-4">
                                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <p class="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                        <a href="register.html" class="text-center">Register a new membership</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>

<script>
    import store from "../store/modules/login";

    export default {
        store,
        name: "login",
        data: function () {
            return {
                user: {
                    email: null,
                    password: null,
                },
                error: null,
            }
        },
        computed: {
            errors() {
                return this.$store.state.errors
            }
        },
        methods: {
            sendLogin: function (e) {
                this.$store.dispatch('getToken', this.user).then(() => {
                    if (0 === this.$store.state.errors.length) {
                        this.$router.go()
                    }
                });
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>

</style>
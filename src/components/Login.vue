<template lang="pug">
    #loginContainer
        .demo-inpu-suffix 用户名:
            el-input(placeholder="请输入用户名" v-model="username")
                i(slot="prefix" class="el-input__icon el-icon-search")
        .demo-inpu-suffix 密码:
            el-input(placeholder="请输入密码" v-model="password")

        el-button(type="primary") 登录
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            };
        },
    };
</script>

<style lang="less" scoped>
    #loginContainer{
        text-align: left;
    }
</style>

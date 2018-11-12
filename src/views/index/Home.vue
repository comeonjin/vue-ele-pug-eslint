<template lang='pug'>
    #homeContainer
        el-menu(:default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect")
            el-menu-item(index="1") 首页
            el-submenu(index="2")
                template(slot="title") 我的工作台
                el-menu-item(index="2-1") 选项1
                el-menu-item(index="2-2") 选项2
                el-menu-item(index="2-3") 选项3
                el-submenu(index="2-4")
                    template(slot="title") 选项4
                    el-menu-item(index="2-4-1") 选项1
                    el-menu-item(index="2-4-2") 选项2
                    el-menu-item(index="2-4-3") 选项3
            el-menu-item(index="3" disabled) 消息中心
            el-menu-item(index="4")
                a(href="https://www.ele.me" target="_blank") 订单管理
        el-menu(:default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b")
            el-menu-item(index="1") 处理中心
            el-submenu(index="2")
                template(slot="title") 我的工作台
                el-menu-item(index="2-1") 选项1
                el-menu-item(index="2-2") 选项2
                el-menu-item(index="2-3") 选项3
                el-submenu(index="2-4")
                    template(slot="title") 选项4
                    el-menu-item(index="2-4-1") 选项1
                    el-menu-item(index="2-4-2") 选项2
                    el-menu-item(index="2-4-3") 选项3
            el-menu-item(index="3" disabled) 消息中心
            el-menu-item(index="4")
                a(href="https://www.ele.me" target="_blank") 订单管理

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            },
        },
    };
</script>

<style lang="less" scoped>

</style>

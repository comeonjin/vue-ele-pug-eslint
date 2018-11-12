<template>
    <!-- <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload> -->

    <el-col :span="10" class="mt10">
        <el-upload class="upload-demo"
            :file-list="fileList2"
            :action="domain"
            :before-upload="beforeAvatarUpload"
            :data="form"
            :on-remove="handleRemoveQrgLogo"
            :on-success="handleAvatarSuccess"
            list-type="picture"
            :limit="1"
            multiple>
            <el-button size="small" type="primary" @click="upPicName='orgLogo'">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </el-col>


</template>

<script>
    export default {
        data() {
            return {
                fileList: [
                    { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
                    { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
        },
    };
</script>

<style lang="less" scoped>
    .el-container{
        background: yellow;
        .el-header{
            background: orange;
        }
        .el-container{
            background: #ddc;
        }
        .el-aside{
            background: orangered;
            height: 200px;
        }
        .el-main{
            background: lightgreen;
        }
    }
</style>

<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://upload.qiniu.com"
      accept="image/jpeg,image/gif,image/png,image/bmp"
      :data="postData"
      :multiple="true"
      :limit="5"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :before-upload="beforeAvatarUpload"
      :on-success="handleAvatarSuccess"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      fileList: [],
      postData: {
        token: 'OMemSy6xyQF-LbvL5FkQ0OSGgJQ4g0Pq4xQiZ4rd:ffDzV0ezqXnK0Qhrv9f1e6VwJnM=:eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsInNjb3BlIjoicGV0cyIsImRlYWRsaW5lIjoxNTUwNjU0NTM1fQ=='
      }
    };
  },
  methods: {
    submitUpload() {
      console.log(this);
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleAvatarSuccess(res, file) {
      cnsole.log(res);
    },
    beforeAvatarUpload(file) {
      console.log(file);
    }
  },
  beforeMount(){}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

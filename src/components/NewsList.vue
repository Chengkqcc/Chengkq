<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="number" label="浏览量"> </el-table-column>
      <el-table-column prop="reply" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="deleteItem(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  name: "NewsList",
  data() {
    return {
      tableData: null,
    };
  },
  methods: {
    deleteItem(index, s) {
      console.log(s);
      this.$confirm("您确定删除该条信息吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //  确定的回调函数
          console.log("删除成功");
          this.del(index);
        })
        .catch(() => {
          console.log("取消删除");
        });
    },
    async getData() {
      let { data } = await instance.get("/home");
      console.log(data);
      this.tableData = data;
    },
    async del(index) {
      let { data } = await instance.delete("/del/" + index);
      console.log(data);
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
</style>
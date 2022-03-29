<template>
  <div class="home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu
          style="background=color:rgb(50,64,87) text-color:#fff"
          :router="true"
        >
          <!-- 1级菜单 -->
          <el-menu-item class="item">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="2-1" style="color: #fff"
                >文章列表</el-menu-item
              >
              <el-menu-item index="2-2" style="color: #fff"
                >多层级路由示例</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button
            type="primary"
            class="addbtn"
            @click="dialogFormVisible = true"
          >
            编辑添加，字段各种验证规则示例
          </el-button>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

    <!-- 弹窗 -->
    <el-dialog title="请输入文章" :visible.sync="dialogFormVisible">
      <el-form >
        <el-form-item label="文章标题" >
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" >
          <el-input  autocomplete="off" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data(){
    return{
      dialogFormVisible:false,
    }
  },
  methods: {
    addfn(){

    }
  },
};
</script>

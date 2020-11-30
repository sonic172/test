<template>
<el-container class="home_container">
  <el-header class="home_header"> 
      <div>
      <img src="../assets/taibiao.png" >  
      <span>网络综合运维管理测试版</span>
      </div>
      <div>退出</div>
  </el-header>
  <el-container>
    <!-- 侧边栏区 -->
    <el-aside width="200px">
        <!-- 侧边栏表单 -->
        <el-menu background-color="#1677b3"  text-color="#fff"  active-text-color="#ffd04b" router>
      <el-menu-item index="paiban">
        <i class="el-icon-menu"></i>
        <span slot="title">排班管理</span>
      </el-menu-item>
      <el-menu-item index="tongzhi">
        <i class="el-icon-menu"></i>
        <span slot="title">通知管理</span>
      </el-menu-item>
      <el-menu-item index="gongdan">
        <i class="el-icon-setting"></i>
        <span slot="title">工单管理</span>
      </el-menu-item>
      <el-menu-item index="beijian">
        <i class="el-icon-menu"></i>
        <span slot="title">备件管理</span>
      </el-menu-item>
      <el-menu-item index="shuju">
        <i class="el-icon-menu"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <!-- 组件占位符 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.el-header{
    background-color: #93d5dc;
}
.el-aside{
    background-color: #1677b3;
}
.el-main{
    background-color: #eaedf1;
}
.home_container{
    height: 100%;
}
.home_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  div{
      display: flex;
        align-items: center;
     span{
         font-size: 20px;
         margin-left: 20px;
     }   
    img{
        margin-left: 10px;
        height: 48px;
        width: 48px;
    }}
}
</style>
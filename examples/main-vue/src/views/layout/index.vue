<template>
  <div class="layout-wrapper">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            :default-active="currentPath"
            class="el-menu-vertical-demo"
            router
          >
            <el-menu-item
              v-for="menu in menuList"
              :index="menu.path"
              :route="menu.path"
            >
              <span>{{ menu.label }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const menuList = [
  {
    label: '主页',
    path: '/'
  },
  {
    label: '主菜单1',
    path: '/test1'
  },
  {
    label: '主菜单2',
    path: '/test2'
  }
]

const currentPath = computed(() => route.path)
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-header {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .el-aside {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-text-color-primary);
  }
  .el-main {
    padding: 10px;
  }
}
</style>

<!--
 * @Author: 秦真
 * @Date: 2022-03-14 11:02:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 11:19:32
 * @Description: Vuex 和Pinia 是Vue3中的状态管理工具，使用这两个工具可以轻松实现组件通信
 * @FilePath: \vue3-features\src\communication\state-parent.vue
-->
<template>
  <el-collapse>
    <el-collapse-item v-for="item in list" :title="item" :name="item">
    </el-collapse-item>
  </el-collapse>

  <child-component></child-component>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './state-child.vue'
import { useStore } from './state'

const store = useStore()
const list = ref(store.list)
</script>

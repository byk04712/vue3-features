<!--
 * @Author: 秦真
 * @Date: 2022-03-14 11:02:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 11:19:12
 * @Description: Vuex 和Pinia 是Vue3中的状态管理工具，使用这两个工具可以轻松实现组件通信
 * @FilePath: \vue3-features\src\communication\state-child.vue
-->
<template>
  <el-input v-model="value" placeholder="请输入" @keyup.enter="handleAdd">
    <template #append>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </template>
  </el-input>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from './state'

const store = useStore()
const value = ref('')

const handleAdd = () => {
  store.add(value.value)
  value.value = ''
}
</script>

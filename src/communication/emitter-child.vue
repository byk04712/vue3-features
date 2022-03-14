<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:54:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 11:00:46
 * @Description: 
 * @FilePath: \vue3-features\src\communication\emitter-child.vue
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
import emitter from './emitter'

const value = ref('')

const handleAdd = () => {
  emitter.emit('add', value.value)
  value.value = ''
}
</script>

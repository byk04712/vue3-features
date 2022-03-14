<!--
 * @Author: 秦真
 * @Date: 2022-03-14 09:22:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:17:36
 * @Description: Props方式是Vue中最常见的一种父传子的一种方式
 * @FilePath: \vue3-features\src\communication\props-parent.vue
-->
<template>
  <!-- 子组件  -->
  <child-component :list="list"></child-component>

  <!-- 父组件 -->
  <el-input v-model="value" placeholder="请输入" @keyup.enter="handleAdd">
    <template #append>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </template>
  </el-input>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './props-child.vue'

const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')

const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}
</script>
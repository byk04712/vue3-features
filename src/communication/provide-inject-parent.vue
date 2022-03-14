<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:47:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:49:45
 * @Description: provide和inject是Vue中提供的一对API，该API可以实现父组件向子组件传递数据，无论层级有多深，都可以通过这对API实现。
 * @FilePath: \vue3-features\src\communication\provide-inject-parent.vue
-->
<template>
  <!-- 子组件  -->
  <child-component></child-component>

  <!-- 父组件 -->
  <el-input v-model="value" placeholder="请输入" @keyup.enter="handleAdd">
    <template #append>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </template>
  </el-input>
</template>

<script setup>
import { ref, provide } from 'vue'
import ChildComponent from './provide-inject-child.vue'

const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')

const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}

provide('list', list.value)
</script>

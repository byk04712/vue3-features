<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:17:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:29:37
 * @Description: emit方式也是Vue中最常见的组件通信方式，该方式用于子传父
 * @FilePath: \vue3-features\src\communication\emit-parent.vue
-->
<template>
  <el-collapse>
    <el-collapse-item v-for="item in list" :title="item" :name="item">
    </el-collapse-item>
  </el-collapse>

  <child-component @add="handleAdd"></child-component>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './emit-child.vue'

const list = ref(['JavaScript', 'HTML', 'CSS'])

const handleAdd = (value) => {
  list.value.push(value)
}
</script>
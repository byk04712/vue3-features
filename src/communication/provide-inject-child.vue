<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:47:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:49:14
 * @Description: 
 * @FilePath: \vue3-features\src\communication\provide-inject-child.vue
-->
<template>
  <el-collapse>
    <el-collapse-item v-for="item in list" :title="item" :name="item">
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { inject } from 'vue'

const list = inject('list')
</script>

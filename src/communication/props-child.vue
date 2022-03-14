<!--
 * @Author: 秦真
 * @Date: 2022-03-14 09:22:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:17:52
 * @Description: Props方式是Vue中最常见的一种父传子的一种方式
 * @FilePath: \vue3-features\src\communication\props-child.vue
-->
<template>
  <el-collapse>
    <el-collapse-item v-for="item in list" :title="item" :name="item">
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { defineProps} from 'vue'

defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>
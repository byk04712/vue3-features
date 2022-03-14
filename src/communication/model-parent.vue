<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:31:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:37:37
 * @Description: 
 * @FilePath: \vue3-features\src\communication\model-parent.vue
-->
<template>
  <el-collapse>
    <el-collapse-item v-for="item in list" :title="item" :name="item">
    </el-collapse-item>
  </el-collapse>

  <child-component v-model:list="list"></child-component>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './model-child.vue'

const list = ref(['JavaScript', 'HTML', 'CSS'])
</script>

<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:17:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:22:21
 * @Description: emit方式也是Vue中最常见的组件通信方式，该方式用于子传父
 * @FilePath: \vue3-features\src\communication\emit-child.vue
-->
<template>
  <el-input v-model="value" placeholder="请输入" @keyup.enter="handleAdd">
    <template #append>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </template>
  </el-input>
</template>

<script setup>
import { ref, defineEmits} from 'vue'

const value = ref('')
const emits = defineEmits(['add'])

const handleAdd = () => {
  emits('add', value.value)
  value.value = ''
}
</script>

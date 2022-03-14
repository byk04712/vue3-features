<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:31:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:36:49
 * @Description: 
 * @FilePath: \vue3-features\src\communication\model-child.vue
-->
<template>
  <el-input v-model="value" placeholder="请输入" @keyup.enter="handleAdd">
    <template #append>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </template>
  </el-input>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const value = ref('')

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['update:list'])

const handleAdd = () => {
  const arr = props.list
  arr.push(value.value)
  emits('update:list', arr)
  value.value = ''
}
</script>
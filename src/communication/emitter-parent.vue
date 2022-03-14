<!--
 * @Author: 秦真
 * @Date: 2022-03-14 10:52:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:59:41
 * @Description: Vue3中移除了事件总线，但是可以借助于第三方工具来完成，Vue官方推荐mitt或tiny-emitter
 * @FilePath: \vue3-features\src\communication\emitter-parent.vue
-->
<template>
  <el-collapse>
    <el-collapse-item v-for="item in list" :title="item" :name="item">
    </el-collapse-item>
  </el-collapse>

  <child-component></child-component>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './emitter-child.vue'
import mitter from './emitter'

const list = ref(['JavaScript', 'HTML', 'CSS'])

mitter.on('add', value => {
  list.value.push(value)
})
</script>


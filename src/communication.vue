<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :label="tab.label"
      :name="tab.name"
      :key="tab.name"
    ></el-tab-pane>
  </el-tabs>

  <el-card style="margin:100px;">
    <component v-if="comp" :is="comp"></component>
  </el-card>
</template>

<script setup>
import { ref, watch } from 'vue'

const tabs = ref([
  { label: 'Props方式', name: 'props-parent' },
  { label: 'Emit方式', name: 'emit-parent' },
  { label: 'v-model方式', name: 'model-parent' },
  { label: 'refs方式', name: 'refs-parent' },
  { label: 'provide-inject 方式', name: 'provide-inject-parent' },
  { label: '事件总线方式', name: 'emitter-parent' },
  { label: '状态管理方式', name: 'state-parent' },
])
const activeName = ref('props-parent')
const comp = ref(null)

watch(() => activeName.value, async (val) => {
  comp.value = (await import(`./communication/${val}.vue`)).default
}, {
  immediate: true
})
</script>
/*
 * @Author: 秦真
 * @Date: 2022-03-14 10:56:03
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 10:56:03
 * @Description: 在大多数情况下不推荐使用全局事件总线的方式来实现组件通信，虽然比较简单粗暴，但是长久来说维护事件总线是一个大难题
 * @FilePath: \vue3-features\src\communication\emitter.js
 */
import mitt from 'mitt'

const emitter = mitt()

export default emitter

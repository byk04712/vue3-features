/*
 * @Author: 秦真
 * @Date: 2022-03-14 11:05:56
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-14 11:11:42
 * @Description: 
 * @FilePath: \vue3-features\src\communication\state.js
 */
import { defineStore } from 'pinia'

// define a store
export const useStore = defineStore('main', {
  state: () => ({
    list: ['JavaScript', 'HTML', 'CSS']
  }),
  actions: {
    add(value) {
      this.list.push(value)
    }
  }
})

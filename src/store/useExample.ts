import { defineStore } from 'pinia'

export const useExample = defineStore('useExample', {
    state: () => ({
        count: 1,
    }),
    actions: {
        init() {
           const initCount = localStorage.getItem('count')
           if(initCount) {
            this.count = parseInt(initCount)
           }
        },        
        increment(val = 1) {
            this.count += val
            localStorage.setItem('count', this.count.toString())
        },
        decrement(val = 1) {
            this.count -= val
            localStorage.setItem('count', this.count.toString())
        },
    },
    persist: {
        storage: sessionStorage,
        paths: ['count'],
    }
})
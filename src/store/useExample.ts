import { defineStore } from 'pinia'

export const useExample = defineStore('useExample', {
    state: () => ({
        count: 1,
    }),
    actions: {
        increment(val = 1) {
            this.count += val
        },
        decrement(val = 1) {
            this.count -= val
        },
    }
})
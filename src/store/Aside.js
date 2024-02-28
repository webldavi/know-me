import { defineStore } from "pinia";

export const useAsideStore = defineStore('asideStore', {
    state: ()=>{
        return {
            show: false
        }
    },
    actions: {
        updateShow(value){
            this.show = value
        }
    }
})
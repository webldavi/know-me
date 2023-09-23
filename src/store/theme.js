import { defineStore } from "pinia";


export const useThemeStore = defineStore('theme',{
    state: ()=>{
        return {
            isDark: false,
        }
    },
    getters: {
        getTheme(state){
            return state.isDark
        }
    },
    actions: {
        switchTheme(){
            this.isDark = !this.isDark
            localStorage.setItem("theme", this.isDark)
        },
        setTheme(value){
            this.isDark = value
        }
    }
})
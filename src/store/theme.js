import { defineStore } from "pinia";


export const useThemeStore = defineStore('theme',{
    state: ()=>{
        return {
            isDark: true,
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
            console.log(value)
            this.isDark = value
        }
    }
})
import { defineStore } from "pinia";

export const useSkillStore = defineStore("skillStore", {
    state: () => {
        return {
            skills: [
                {
                    skillName: "HTML5",
                    skillDesc:
                        "HTML5 é a sigla para HyperText Markup Language, linguagem de marcação usada para criar a estrutura de uma página.",
                    link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
                    mainColor: "#ed5d24",
                },
                {
                    skillName: "CSS3",
                    skillDesc:
                        "CSS3, uma linguagem de estilização usada para estilizar e dar forma as estruturas de uma página.",
                    link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
                    mainColor: '#41b2e1'
                },

                {
                    skillName: "Tailwind CSS",
                    skillDesc:
                        "Uma estrutura CSS baseada em utilitários, repleta de classes como text-center e rotate-90, que podem ser ussdas para criar qualquer design, direto no HTML.",
                    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
                    mainColor: '#41b2e1'
                },
                {
                    skillName: "VueJS",
                    skillDesc:
                        "VueJs, um Framework usado para criar páginas SPA(single page application).",
                    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
                    mainColor: '#49b883'
                },
                {
                    skillName: "ReactJS",
                    skillDesc:
                        "ReactJS é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
                    link: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
                    mainColor: '#61dafb'
                },
                {
                    skillName: "JavaScript",
                    skillDesc:
                        "Javascript é uma linguagem interpretada pelo navegador, ou seja, ela é client-side, vulgo Front-end.",
                    link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                    mainColor: '#f1dc4e'
                },
                {
                    skillName: "TypeScript",
                    skillDesc:
                        "É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
                    link: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
                    mainColor: '#247acc'
                },
            ],
        };
    },

    getters: {
        getSkills(state) {
            return state.skills;
        },
    },
});

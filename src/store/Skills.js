import { defineStore } from "pinia";

export const useSkillStore = defineStore("skillStore", {
    state: () => {
        return {
            skills: [
                {
                    name: 'Tecnologias do Front-end',
                    items: [
                        {
                            name: "HTML5",
                            desc:
                                "HTML5 é a sigla para HyperText Markup Language, linguagem de marcação usada para criar a estrutura de uma página.",
                            link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
                            mainColor: "#ed5d24",
                        },
                        {
                            name: "CSS3",
                            desc:
                                "CSS3, uma linguagem de estilização usada para estilizar e dar forma as estruturas de uma página.",
                            link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
                            mainColor: '#41b2e1'
                        },
        
                        {
                            name: "Tailwind CSS",
                            desc:
                                "Uma estrutura CSS baseada em utilitários, repleta de classes como text-center e rotate-90, que podem ser ussdas para criar qualquer design, direto no HTML.",
                            link: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png",
                            mainColor: '#41b2e1'
                        },
                        {
                            name: "VueJS",
                            desc:
                                "VueJs, um Framework usado para criar páginas SPA(single page application).",
                            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
                            mainColor: '#49b883'
                        },
                        {
                            name: "ReactJS",
                            desc:
                                "ReactJS é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
                            link: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
                            mainColor: '#61dafb'
                        },
                        {
                            name: "JavaScript",
                            desc:
                                "Javascript é uma linguagem interpretada pelo navegador, ou seja, ela é client-side, vulgo Front-end.",
                            link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                            mainColor: '#f1dc4e'
                        },
                        {
                            name: "TypeScript",
                            desc:
                                "É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
                            link: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
                            mainColor: '#247acc'
                        },
                        {
                            name: 'Vite.js',
                            link: 'https://vitejs.dev/logo-with-shadow.png'
                        },
                        {
                            name: 'Nuxt.js',
                            link: 'https://nuxt.com/assets/design-kit/icon-green.svg'
                        },
                        {
                            name: 'Pinia.js',
                            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/800px-Pinialogo.svg.png'
                        },
                        {
                            name: 'Vuetify',
                            link: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg'
                        },
                        {
                            name: 'Astro',
                            link: 'https://astro.js.org/astro.png'
                        },
                        {
                            name: 'Vue Router',
                            link: 'https://miro.medium.com/v2/resize:fit:1400/1*_bAwvo0fT9zI9VoG3B3LwQ.png'
                        },
                        {
                            name: 'Vuex',
                            link: 'https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png'
                        },
                        {
                            name: 'Bootstrap',
                            link: 'https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png'
                        }
                    ]
                    
                },
                {
                    name: 'Tecnologias do Back-end',
                    items: [
                        {
                            name: 'Node.js',
                            link: 'https://miro.medium.com/v2/resize:fit:400/1*tfZa4vsI6UusJYt_fzvGnQ.png'
                        },
                        {
                            name: "JavaScript",
                            link: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                        },
                        {
                            name: "TypeScript",
                            link: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
                        },
                        {
                            name: 'Prisma',
                            link: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/prisma.png'
                        }
                    ]
                },
                {
                    name: 'Banco de dados',
                    items: [
                        {
                            name: 'Sqlite',
                            link: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png'
                        },
                        {
                            name: 'Mysql',
                            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLJPWx9W2CzFPdreXHdMpxE7To41-3-UhRQ&usqp=CAU'
                        },
                        {
                            name: 'MongoDB',
                            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&usqp=CAU'
                        },
                    ]
                },
                {
                    name: 'Versionamento de código',
                    items: [
                        {
                            name: 'Git',
                            link: 'https://pachecoandre.com.br/assets/imgs/posts/git.png'
                        },
                        {
                            name: 'Github',
                            link: 'https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png'
                        },
                        {
                            name: 'Gitlab',
                            link: 'https://www.justsoftware.com.br/assets/images/GitLab_Logo.svg.png'
                        }
                    ]
                },
                {
                    name: 'Sistemas operacionais',
                    items: [
                        {
                            name: 'Zorin OS',
                            link: 'https://i.redd.it/zhf39gopv7o81.png'
                        },
                        {
                            name: 'Linux Mint',
                            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/512px-Linux_Mint_logo_without_wordmark.svg.png'
                        },
                        {
                            name: 'Windows 10',
                            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/2048px-Windows_logo_-_2012_%28dark_blue%29.svg.png'
                        }
                    ]
                },
                {
                    name: 'Ferramentas de Design',
                    items: [
                        {
                            name: 'Figma',
                            link: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format'
                        },
                        {
                            name: 'Freepik',
                            link: 'https://www.trustenablement.com/wp-content/uploads/2022/05/freepik.jpg'
                        },
                        {
                            name: 'Google Fonts',
                            link: 'https://seeklogo.com/images/G/google-fonts-logo-185D843C0C-seeklogo.com.png'
                        },
                        {
                            name: 'Gimp',
                            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/2048px-The_GIMP_icon_-_gnome.svg.png'
                        }
                    ]
                },
                {
                    name: 'Extensões e temas',
                    items: [
                        {
                            name: 'GitLens',
                            link: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675947725161/5f61e303-c49a-4dce-acea-8ef9d0676f7c.png'
                        },
                        {
                            name: 'Fluent Icons',
                            link: 'https://raw.githubusercontent.com/misolori/vscode-fluent-icons/master/icon.png'
                        },
                        {
                            name: 'ESlint',
                            link: 'https://pt-br.eslint.org/icon-512.png'
                        },
                        {
                            name: 'Prettier',
                            link: 'https://avatars.githubusercontent.com/u/25822731?s=280&v=4'
                        },
                        {
                            name: 'Envondev Dracula',
                            link: 'https://evondev.gallerycdn.vsassets.io/extensions/evondev/dracula-high-contrast/0.2.48/1700195016319/Microsoft.VisualStudio.Services.Icons.Default'
                        },
                        {
                            name: 'Live Server',
                            link: 'https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1661914858952/Microsoft.VisualStudio.Services.Icons.Default'
                        }
                    ]
                },
                {
                    name: 'Apps',
                    items: [
                        {
                            name: 'Spotify',
                            link: 'https://static.wixstatic.com/media/931f1b_6b997c27d57143d880f9e7286bab28ba~mv2.png',
                        },
                        {
                            name: 'Visual Studio Code',
                            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png'
                        },
                        {
                            name: 'Firefox Developer Edition',
                            link: 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg'
                        },
                        {
                            name: 'Beekeeper',
                            link: 'https://dashboard.snapcraft.io/site_media/appmedia/2020/03/512x512_4JGJ8f7.png'
                        },
                        {
                            name: 'Discord',
                            link: 'https://www.shutterstock.com/image-vector/vinnytsia-ukraine-may-7-2023-600nw-2299584421.jpg'
                        },
                        {
                            name: 'Notion',
                            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png'
                        }

                    ]
                }
            ],
        };
    },

    getters: {
        getSkills(state) {
            return state.skills;
        },
    },
});

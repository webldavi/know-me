<template>
    <div class="w-full h-screen flex flex-col-reverse sm:flex-row justify-center items-center gap-4 md:gap-16">
        <div class="flex flex-col gap-2 font-mono text-white items-center">
            <div id="AnimationBlink" class="text-5xl w-max border-r-8 pr-2 text-center">
                Luís Daví
            </div>
            <div class="text-3xl text-center">
                Desenvolvedor Front-end
            </div>
        </div>
        <div>
            <img width="200" height="200" id="AnimationPhoto" class="rounded-full border-2 border-gray-300 " src="/photo.jpg"/>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'Welcome'
    }
</script>
<style>
    @keyframes Elevation{
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(-20px);
        }
        100%{
            transform: translateY(0);
        }
    }

    @keyframes Blink{
        0%{
            border-color: transparent;
        }
        50%{
            border-color: white;
        }
        100%{
            border-color: transparent;
        }
    }
    #AnimationPhoto{
        animation: Elevation 3s infinite;
    }
    #AnimationBlink{
        animation: Blink 2s infinite
    }
</style>


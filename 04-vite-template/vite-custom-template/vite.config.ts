import { defineConfig } from "vite";
import pluginReact from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    base: '/',
    server:{
        host:'localhost',
        port:3000
    },
    plugins:[
        pluginReact({
            jsxRuntime:'automatic', //알아서 jsx파일을 읽어들인다
        })
    ],

    resolve:{
        alias:{
            '@' : fileURLToPath(new URL('./src', import.meta.url)) // 얘가 이제 base url이 된다
        }
    }
})
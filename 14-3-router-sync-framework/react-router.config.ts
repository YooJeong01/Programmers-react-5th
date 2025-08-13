import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src", // src 경로를 기준으로 앱을 수행하겠다
  ssr: false, // ssr mode를 끄고 SPA(CSR)로 작업하겠다
} satisfies Config;
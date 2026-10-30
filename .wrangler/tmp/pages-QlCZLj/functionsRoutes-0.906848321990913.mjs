import { onRequestPost as __api__form__ts_onRequestPost } from "/Users/davekjellmarong/Desktop/Code/Projects/drenering/frontend/functions/api/[form].ts"

export const routes = [
    {
      routePath: "/api/:form",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api__form__ts_onRequestPost],
    },
  ]
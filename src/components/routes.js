import { LazyResult } from "purgecss/node_modules/postcss";
import { lazy } from "react";

const routes = [
  {
    path: "home",
    component: lazy(() => import("./Home")),
    exact: true,
  },
  {
    path: "card",
    component: lazy(() => import("./Card")),
    exact: true,
  },

  {
    path: "new",
    component: lazy(() => import("./NewCredential")),
    exact: true,
  },
  //   {
  //     path: 'users',
  //     component: lazy(() => import('components/Users')),
  //     exact: true
  //   }
];

export default routes;

const BeefPagePath = '/beef-page/' as const;

const routes = {
  HomePage: '/',
  BeefPage: {
    routePath: `${BeefPagePath}:id`,
    createLink: (id: string | number) => `${BeefPagePath}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;

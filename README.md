# tRPC + Prisma + Turborepo
This is a minimum fullstack repo inspired by `T3 Stack`.

## Features
* High customizability and expandability
* Minimum configuration files
* Type safety isn't optional

## Getting Started
```sh
# optional: If you haven't installed pnpm
npm i -g pnpm
# clone repo
git clone https://github.com/yanagie/mono-trpc.git
# install packages
cd mono-trpc && pnpm i
# migrate db by prisma
pnpm --filter @mono-trpc/prisma run migrate:dev
# start dev server
pnpm dev
```
The app will become available at http://127.0.0.1:5173/

## Monorepo Structure
Projects in the `packages folder` can depend on other projects. On the other hand, projects in the `apps folder` must not depend on other projects in the same folder.
```sh
├── apps
│  └── front # react project
│     ├── index.html
│     ├── package.json
│     ├── public
│     ├── src
│     ├── tsconfig.json
│     ├── tsconfig.node.json
│     ├── vite.config.ts
│     └── node_modules
├── package.json
├── packages
│  ├── api # tRPC project
│  │  ├── index.ts
│  │  ├── package.json
│  │  ├── tsconfig.json
│  │  └── node_modules
│  └── prisma # DB ORM
│     ├── index.ts
│     ├── package.json
│     ├── prisma
│     ├── tsconfig.json
│     ├── node_modules
│     └── dist
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
└── node_modules
```

## Stacks
* [tRPC](https://trpc.io)
* [Prisma](https://www.prisma.io)
* [Turborepo](https://turbo.build/repo)


## Scripts
* `pnpm build ` — Compiles and bundles the app for deployment
* `pnpm dev` — Launches the app in development mode
* `pnpm start` — Launches the app in production mode
* `pnpm clean` — Clean all node_modules and caches

## License
MIT

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@mono-trpc/api";

export const trpc = createTRPCReact<AppRouter>();

import { callerFactory, router } from "@/server/trpc";
import { redisRouter } from "./redis";

export const appRouter = router({
  redis: redisRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = callerFactory(appRouter);

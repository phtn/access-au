"use server";

import type { RedisSetLikeParams } from "@/server/redis/like";
import { trpc } from "@/trpc/server";

export const redisGetLike = async (params: string) =>
  await trpc.redis.getLike(params);

export const redisSetLike = async (params: RedisSetLikeParams) =>
  await trpc.redis.setLike(params);

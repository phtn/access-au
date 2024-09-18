import { redis } from "@/lib/redis";
import { procedure, router } from "..";
import { RedisGetLikeSchema, RedisSetLikeSchema } from "@/server/redis/like";

const getLikeProcedure = procedure.input(RedisGetLikeSchema);
const setLikeProcedure = procedure.input(RedisSetLikeSchema);

export const redisRouter = router({
  getLike: getLikeProcedure.query(async ({ input }) =>
    redis.json.get(input, "$"),
  ),
  setLike: setLikeProcedure.query(({ input }) =>
    redis.json.set(input.key, input.dollar, input.data),
  ),
});

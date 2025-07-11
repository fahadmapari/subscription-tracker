import { Redis } from "@upstash/redis";
import { REDIS_TOKEN, REDIS_URL } from "./env";

const redisClient = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
});

export default redisClient;

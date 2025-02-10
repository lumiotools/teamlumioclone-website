import Redis from "ioredis";

const redisClient = new Redis(process.env.REDIS_URL as string);

export const validateUserVoiceTrial = async (userIP: string) => {
  let availableSeconds = 60;

  const redisKey = `user:${userIP}:availableVoiceChatSeconds`;
  const redisValue = await redisClient.get(redisKey);

  if (redisValue) {
    availableSeconds = parseInt(redisValue, 10);
  } else {
    await redisClient.set(redisKey, availableSeconds);
  }

  if (availableSeconds <= 0) {
    return false;
  } else {
    return true;
  }
};

export const updateUserVoiceTrial = async (
  userIP: string,
  availableSeconds: number
) => {
  const redisKey = `user:${userIP}:availableVoiceChatSeconds`;
  await redisClient.set(redisKey, availableSeconds);
};

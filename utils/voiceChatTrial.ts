import Redis from "ioredis";

const redisClient = new Redis(process.env.REDIS_URL as string);

export const validateUserVoiceTrial = async (userIP: string) => {
  let availableSeconds = await getUserVoiceAvailableSeconds(userIP);

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

export const getUserVoiceAvailableSeconds = async (userIP: string) => {
  const redisKey = `user:${userIP}:availableVoiceChatSeconds`;
  const redisValue = await redisClient.get(redisKey);

  if (redisValue) {
    return parseInt(redisValue, 10);
  } else {
    return 60;
  }
};

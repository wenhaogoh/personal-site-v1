import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

function convEnvToBool(val: string | undefined, defaultVal: boolean) {
  // convert env strings to boolean, i.e. 'true' -> true, will use defaultVal for any invalid val
  if (val !== "false" && val !== "true") {
    return defaultVal;
  }

  return val === "true";
}

export const DATABASE_URL = process.env.DATABASE_URL || "";
export const ON_GAE = convEnvToBool(process.env.ON_GAE, false);

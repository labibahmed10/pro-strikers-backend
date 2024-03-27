declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DATABASE_LOCAL_URL: string;
    DATABASE_URL: string;
    NODE_ENV: string;
  };
}

import dotenv from 'dotenv-flow';

export function loadEnv() {
  const envFilePath = process.env.ENVFILE_PATH;

  if (envFilePath) {
    dotenv.load([envFilePath]);
  }

  dotenv.config({
    silent: true,
  });
}

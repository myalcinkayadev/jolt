FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install

COPY tsconfig.json ./
COPY src/ ./src/

RUN bun build src/app/app.ts --outdir dist --target bun

EXPOSE 3000

CMD ["bun", "run", "dist/src/app.js"]

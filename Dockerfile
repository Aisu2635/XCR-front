FROM node:18-alpine as base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN yarn run build


FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN yarn install

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD yarn start

FROM base as dev
ENV NODE_ENV=development
RUN yarn install 
COPY . .
CMD yarn run dev
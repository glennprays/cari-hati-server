FROM node:21-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run prisma:generate
RUN npm run build

FROM node:21-alpine as production
WORKDIR /app
COPY --from=builder /app/ .
RUN rm -rf ./node_modules
RUN npm install -g ts-node
EXPOSE 3000 

CMD sh -c "npm run prisma:push && npm run seed:structural && npm run start:prod"

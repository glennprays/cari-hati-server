FROM node:21-alpine as builder
WORKDIR /app
ENV HUSKY=0
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run prisma:generate
RUN npm run build
RUN npm install -g ts-node
EXPOSE 3000 

CMD sh -c "npm run prisma:push && npm run seed:structural && npm run start:prod"

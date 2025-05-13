# Stage 1: React 애플리케이션 빌드
FROM node:22 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build
# RUN npm run build:production

# Stage 2: Nginx로 애플리케이션 배포
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
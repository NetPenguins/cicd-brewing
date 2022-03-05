#stage 1
FROM node:lts-gallium as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/brewery-example /usr/share/nginx/html

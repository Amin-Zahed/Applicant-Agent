FROM node:22.16-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --production --no-cache

COPY . .
RUN npm run build

FROM nginx:1.25-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY prod-conf/nginx.conf /etc/nginx/nginx.conf
COPY prod-conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
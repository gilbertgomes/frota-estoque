FROM node:14.0.0-buster-slim as build-stage

WORKDIR /app

COPY package*.json ./
#RUN apt update  
RUN npm i npm@latest -g
RUN npm i --legacy-peer-deps  
COPY . .
RUN npm run build

# estágio de produçãoc
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
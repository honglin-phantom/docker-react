# multiple steps configuration - build phase
FROM node:14-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . . 
RUN npm run build 

# multiple steps configuration - run phase (automatically dump previously built phase)
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html


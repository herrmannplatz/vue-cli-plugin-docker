# build static files
FROM node:alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build

# final image
FROM node:alpine
EXPOSE 8080
WORKDIR /usr/src/app
RUN npm install serve -g
COPY --from=build /usr/src/app/dist ./dist
USER node
CMD ["serve", "--single", "--port", "8080", "dist"]

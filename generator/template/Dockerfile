FROM node:alpine

EXPOSE 8080

RUN apk add --no-cache nginx

WORKDIR /usr/src/app

RUN npm install serve -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "--single", "--port", "8080", "dist"]

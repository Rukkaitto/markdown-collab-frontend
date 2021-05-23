FROM node:12 

WORKDIR /app

COPY . .

RUN npm install && npm run build

RUN npm install serve -g

CMD ["serve", "-s", "build"]

EXPOSE 5000

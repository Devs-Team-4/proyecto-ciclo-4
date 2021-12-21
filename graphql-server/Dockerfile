# Imagen base
FROM node:16

# Crear directorio de trabajo
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "src/index.js" ]

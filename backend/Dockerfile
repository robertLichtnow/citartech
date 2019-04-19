FROM node:carbon as builder
 
# cria o diretório da aplicação
WORKDIR /usr/src/app
 
# instala as dependências da aplicação
# Uma wildcard é usada pra que package.json e package-lock.json sejam copiadas 
COPY package*.json ./
 
# Install any needed packages
RUN npm install
 
# Bundle app source
COPY . .
 
# Stage 2 build for creating smaller image
FROM node:carbon-alpine
WORKDIR /usr/src/app
 
COPY --from=builder /usr/src/app .
 
EXPOSE 4000
 
CMD [ "npm", "run", "dev" ]
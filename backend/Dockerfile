FROM node:carbon as builder
 
# cria o diretório da aplicação
WORKDIR /usr/src/app
 
# Uma wildcard é usada pra que package.json e package-lock.json sejam copiadas 
COPY package*.json ./
 
# Instala as dependências da aplicação
RUN npm install
 
# Copia o source da aplicação
COPY . .
 
# Cria uma imagem menor para subir o ambiente
FROM node:carbon-alpine
WORKDIR /usr/src/app
 
COPY --from=builder /usr/src/app .
 
EXPOSE 4000
 
CMD [ "npm", "run", "dev" ]
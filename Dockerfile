# etapa de compilación devel 
FROM node:18.16.0-bullseye
WORKDIR /app
COPY package*.json ./
RUN npm install -g vite
COPY . .
EXPOSE 5173
# CMD ["npm", "run", "dev"]


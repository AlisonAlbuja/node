# Utilizar la imagen oficial de Node.js
FROM node:18-slim

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto 3000
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["node", "index.js"]

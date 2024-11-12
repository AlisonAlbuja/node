// Importar el módulo HTTP
const http = require('http');

// Definir el puerto del servidor, usando el puerto proporcionado por Heroku
const PORT = process.env.PORT || 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola, Mundo!');
});

// Iniciar el servidor en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

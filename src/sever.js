const app = require('./app');
const http = require('http');

//create server
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

function startServer() {
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  })
}

startServer();
const server = require("./api/server");

const port = 5000;

server.listen(port, () => {
  console.log(`listening on port ${port}`)
});

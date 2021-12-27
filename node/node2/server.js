const http = require("http");
const dateFns = require("date-fns");

const currentDate = dateFns.format(new Date(), "yyyy-MM-dd");
console.log(currentDate);
const add = (a, b) => {
  if (b) {
    return a + b;
  }
  return a;
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end(`<div> Example content </div> ${add(3, 2)} ${currentDate}`);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("srver is running at port 8000");
});

console.log(add(2));

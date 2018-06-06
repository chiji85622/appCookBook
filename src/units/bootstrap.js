export default function(cb) {
  if (process.env["NODE_ENV"] === "production") {
    window.apiready = cb;
  } else {
    cb();
  }
}
export default function(cb) {
  try {
    apiready = function() {
      cb();
    };
  } catch (err) {
    cb();
  }
}

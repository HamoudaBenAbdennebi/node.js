const app = require("./mymodule");
const folder = process.argv[2];
const ext = process.argv[3];

app(folder, ext, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((file) => console.log(file));
  }
});

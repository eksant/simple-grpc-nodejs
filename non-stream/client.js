const path = require("path");
const { createClient } = require("../grpc-kit");
const client = createClient(
  {
    protoPath: path.resolve(__dirname, "./greeter.proto"),
    packageName: "greeter",
    serviceName: "Greeter"
  },
  "0.0.0.0:50051"
);

client.hello({ name: "Eksa" }, (err, { message }) => {
  if (err) throw err;
  console.log(message);
});

client.goodbye({ name: "Eksa" }, (err, { message }) => {
  if (err) throw err;
  console.log(message);
});

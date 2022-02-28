import operations from "./operations";
import person from "./person";

const route = async (server) => {
  operations.route(server);
  person.route(server);
};
export default route;




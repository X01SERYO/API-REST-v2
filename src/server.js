import fastify from "fastify";
import * as ramda from "ramda";
import route from "./api/route";
import cors from "fastify-cors";

/**
 * jkashdkjsahkdhkj
 * @type {string}
 */
const name = 'PEPITo'

const start = async (server) => {
  try {
    await server.listen(8080, "0.0.0.0");
  } catch (error) {
    console.log(error);
  }
};

const build = () => {
  const server = fastify({ logger: true });
  server.register(route);

  server.register(cors, { origin: "*" });

  return server;
};

const run = ramda.pipe(build, start);

run();

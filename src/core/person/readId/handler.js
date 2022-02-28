import store from "./store";

const handle = async (cmd) => {
  const document = cmd.document;
  const person = await store.readId(document);

  if (person === undefined) {
    return "NO MATCHES FOUND.";
  } else {
    return person;
  }
};

export default handle;

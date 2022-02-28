import store from "./store";

const handle = async () => {
  console.log(await store.readAll())
  const person = await store.readAll();

  return {person};
};

export default handle;

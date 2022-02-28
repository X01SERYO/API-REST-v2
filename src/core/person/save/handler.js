import store from "./store";

const handle = async (cmd) => {
  const date = cmd.date;
  const document = cmd.document;
  const name = cmd.name;
  const lastName = cmd.lastName;
  const address = cmd.address;
  const phone = cmd.phone
  await store.save(date, document, name, lastName, address, phone);

  return `SAVE USER ${document}  ${name} ${lastName}  WITH SUCCESSFUL`
};

export default handle;

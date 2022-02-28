import core from "../../core";

const readId = async (req, res) => {
  const { document } = req.query;
  const cmd = new core.person.readId.Command(document);
  res.send(await core.person.readId.handler(cmd));
};

const readAll = async (req, res) => {
  res.send(await core.person.readAll.handler());
};

const save = async (req, res) => {
  const { date, document, name, lastName, address, phone } = req.query
  const cmd = new core.person.save.Command(date, document, name, lastName, address, phone);
  res.send(await core.person.save.handler(cmd));
};

export default { readId, readAll, save };

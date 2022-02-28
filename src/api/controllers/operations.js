import core from "./../../core";

const add = async (req, res) => {
  const { numberOne, numberTwo } = req.query;
  const cmd = new core.operations.add.Command(numberOne, numberTwo);
  
  res.send(await core.operations.add.handler(cmd));
};

const division = async (req, res) => {
  const { dividend, divider } = req.query;
  const cmd = new core.operations.divison.Command(dividend, divider);

  res.send(await core.operations.divison.handler(cmd));
};

const multiplication = async (req, res) => {
  const { multiplying, multiplicador } = req.query;
  const cmd = new core.operations.multiplication.Command(
    multiplying,
    multiplicador
  );

  res.send(await core.operations.multiplication.handler(cmd));
};

const subtraction = async (req, res) => {
  const { minuend, subtracting } = req.query;
  const cmd = new core.operations.subtraction.Command(minuend, subtracting);

  res.send(await core.operations.subtraction.handler(cmd));
};

export default { add, division, multiplication, subtraction };

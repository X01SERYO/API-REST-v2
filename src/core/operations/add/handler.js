const handle = async cmd => {
    const numberOne = parseInt(cmd.numberOne);
    const numberTwo = parseInt(cmd.numberTwo);

    const total = numberOne + numberTwo;

    return { total };
}

export default handle;
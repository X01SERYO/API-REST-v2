const handle = async (cmd) => {
    
    const multiplying = parseInt(cmd.multiplying);
    const multiplier = parseInt(cmd.multiplier);
    const total = multiplying * multiplier;

    return { total };
}

export default handle;
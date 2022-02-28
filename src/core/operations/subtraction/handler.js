const handle = async (cmd) => {
    
    const minuend = parseInt(cmd.minuend);
    const subtracting = parseInt(cmd.subtracting);
    const total = minuend - subtracting;

    return { total };
}

export default handle;
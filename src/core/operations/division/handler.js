const handle = async (cmd) => {
    const dividend = parseInt(cmd.dividend);
    const divider = parseInt(cmd.divider);
    let total;

    if(divider == 0){
        total = 'Divider must be different from 0';
    }else{
        total = dividend/divider;
    }

    return { total };
}

export default handle;
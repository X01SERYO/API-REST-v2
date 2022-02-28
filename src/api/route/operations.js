import controllers from "../controllers";

const route = server =>{
    server.get('/operations/add/:params', controllers.operations.add);
    server.get('/operations/division/:params', controllers.operations.division);
    server.get('/operations/multiplication/:params', controllers.operations.multiplication);
    server.get('/operations/subtraction/:params', controllers.operations.subtraction);
}

export default { route };
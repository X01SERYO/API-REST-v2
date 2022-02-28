import controllers from "../controllers";

const route = server =>{
    server.get('/person/readId/:params', controllers.person.readId);
    server.get('/person/readAll', controllers.person.readAll);
    server.post('/person/save', controllers.person.save);
}

export default { route };
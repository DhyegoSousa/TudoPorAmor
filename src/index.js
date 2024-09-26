const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("servidor na port ", app.get("port"));
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});
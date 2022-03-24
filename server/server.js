// ~~~~~~~ Dependencies ~~~~~~~~ //
const express = require('express');
const app = express();
const cors = require('cors');

// ~~~~~~~ Mongoose Configuration ~~~~~~~~ //
require("./config/mongoose.config");

// ~~~~~~~ Express Configuration ~~~~~~~~ //
app.use(cors());
app.use(express.json(), express.urlencoded({extended : true}));

// ~~~~~~~ Routes ~~~~~~~~~ //
require("./routes/author.routes")(app)

// ~~~~~ Port ~~~~~ //
app.listen(8000, () => console.log(`Live and Fire up from port: 8000`));
const express = require("express");
const router = require("./routers/product");
require('../src/database/connection');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(router);

// Uncomment the following block if you want a default route
// app.get("/", async (req, res) => {
//     res.send("Server is live now!...😁✌️");
// });

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Connection is successful on port ${port}`);
    }
});

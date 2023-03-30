const express = require("express");
const PORT = 8002;
const app = express();

const router = require("./router")

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});

app.use(router);

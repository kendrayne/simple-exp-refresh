const express = require('express');
const app = express();
app.use(express.json())
const PORT = 3001;

const db = require('./models');

// Routes

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
})


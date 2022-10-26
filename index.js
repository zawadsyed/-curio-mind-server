const express = require('express')
const app = express();
const port = process.env.port || 5000;


app.get('/', (req, res) => {
    res.send('Express Server is running');
})
app.listen(port, () => {
    console.log(`app server is running on ${port}`);
})
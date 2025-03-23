import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'node:http';

const port = 2896

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const nodehttpserver = createServer(app)

app.use('/public', express.static('./public/'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
})


nodehttpserver.listen(port, () => {
    console.log(`Main Server is running on port: ${port}`);
});

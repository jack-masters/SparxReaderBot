import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const nodehttpserver = createServer(app)

app.use(cookieParser(cookieSecret));
app.use('/public', express.static('./public/'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
})
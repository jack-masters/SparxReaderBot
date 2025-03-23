import express from "express";

const app = express();
const nodehttpserver = createServer(app)

app.use(cookieParser(cookieSecret));
app.use('/public', express.static('./public/'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    
})
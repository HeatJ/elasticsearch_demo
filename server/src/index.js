import express from "express";
import client from "./connection.js";
import searchRouter from './search.js'
import cors from 'cors'


const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send('hello node');
  })

async function bootstrap() {
    try {
      client.ping();
      console.log("9200번 포트 연결");
    } catch (e) {
      console.log(e);
    }
}

bootstrap()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin : 'http://localhost:3000',
}));

app.use(searchRouter)

app.listen(PORT , () => {
    console.log(`server opened at ${PORT}`)
})

// this.server.enableCors({
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//   credentials: true,
// });
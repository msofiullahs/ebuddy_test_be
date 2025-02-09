import express, { Express, Request, Response } from "express";
import cors from "cors";
import { json } from "body-parser";
import userRouter from "../routes/userRoutes";

const app = express();
app.use(cors());
app.use(json());
app.use('/user', userRouter);

app.get('/', (req: Request, res: Response)=>{
    res.send('<h1>Express & Firestore</h1>')
})

app.listen(3000, ()=>{
    console.log('Active server port 3000')
})

// import express, { Express, Request, Response } from "express";
// import cors from "cors";
// import { json } from "body-parser";
// import userRouter from "@routes/userRoutes";

// const App = () => {
//   const app = express();
//   app.use(cors());
//   app.use(json());
//   app.use('/user', userRouter);

//   return app;
// };

// export default App;
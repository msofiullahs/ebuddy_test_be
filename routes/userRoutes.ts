import express, { Express, Request, Response, Router } from "express";
import bodyParser from "body-parser";
import { getUsers } from "../controller/api";

const userRouter = Router();
userRouter.use(bodyParser.json());

userRouter.get('/', getUsers);

// userRoutes.post('/data', (req : any, res : any)=>{
//     db.settings({
//         timestampsInSnapshots: true
//     })
//     db.collection('karyawan').add({
//         nama: req.body.nama,
//         usia: req.body.usia,
//         kota: req.body.kota,
//         waktu: new Date()
//     })
//     res.send({
//         nama: req.body.nama,
//         usia: req.body.usia,
//         kota: req.body.kota,
//         waktu: new Date()
//     })
// });

export default userRouter;
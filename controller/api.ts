import { collection, getDocs, query, orderBy, doc, setDoc, updateDoc, getDoc } from "@firebase/firestore"; 
import { db } from "../config/firebaseConfig";
import { RequestHandler } from "express";
import UserCollection from "../repository/userCollection";
import { User } from "../entities/user";

const getUsers:RequestHandler = async (req, res, next) =>
{
  try {
    const colRef = collection(db, "users");
    const q = query(colRef, orderBy("totalAverageWeightRatings", "desc"), orderBy("numberOfRents", "desc"), orderBy("recentlyActive", "desc"));
    const querySnapshot = await getDocs(q);
    
    const collections: Array<User> = [];
    querySnapshot.forEach((doc: any) => {
      const data = doc.data();
      data.id = doc.id;
      const convertDate = new Date();
      convertDate.setTime(data.recentlyActive * 1000);
      data.recentlyActive = convertDate;
      const user = new User(data);
      collections.push(user);
    });

    const userCollection = new UserCollection(collections);

    res.status(200).json(userCollection);
  } catch (error) {
    throw error;
  }
}

const updateUser:RequestHandler = async (req, res, next) => {
  try {
    console.info("TEST BODY", req.body);
    const id = String(req.query.id);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    const existingData: any = docSnap.data();
    await updateDoc(docRef, {
      firstName: req.body.firstName ? req.body.firstName : existingData.firstName,
      lastName: req.body.lastName ? req.body.lastName : existingData.lastName,
      username: req.body.username ? req.body.username : existingData.username,
      numberOfRents: req.body.numberOfRents ? Number(req.body.numberOfRents) : existingData.numberOfRents,
      totalAverageWeightRatings: req.body.totalAverageWeightRatings ? Number(req.body.totalAverageWeightRatings) : existingData.totalAverageWeightRatings,
      recentlyActive: req.body.recentlyActive ? Number(req.body.recentlyActive) : existingData.recentlyActive,
      password: req.body.password ? req.body.password : existingData.password,
    });

    const result = await getDoc(docRef);

    res.status(200).json(result.data());
  } catch (error) {
    throw error;
  }
}

export {
  getUsers,
  updateUser,
};

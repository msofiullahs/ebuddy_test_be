import { collection, getDocs, query, orderBy, doc } from "@firebase/firestore"; 
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
      const user = new User(data);
      collections.push(user);
    });

    const userCollection = new UserCollection(collections);

    res.status(200).json(userCollection);
  } catch (error) {
    throw error;
  }
}

export {
  getUsers,
};

import mongoose from "mongoose";

export const connectDB = async () => {
await mongoose.connect('mongodb+srv://azharmahmood10:11Berlin22@quickbites.lx2gmqe.mongodb.net/RESTURENT-APP').then(()=>console.log("DB Connected"));

}
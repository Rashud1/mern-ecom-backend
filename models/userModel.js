import mongoose from 'mongoose';

//.. moongoose.schema accepts an object as a parameter and this object defines the field of product that is as presented below type,required and unique.../
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    //...we create a document in product collection and automatically creates 2 new fields will be added to the above field.cretaed add and updated app and will have the last update sign and cretae time of each record
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;

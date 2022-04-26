import mongoose from 'mongoose';

//.. moongoose.schema accepts an object as a parameter and this object defines the field of product that is as presented below type,required and unique.../
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    //...we create a document in product collection and automatically creates 2 new fields will be added to the above field.cretaed add and updated app and will have the last update sign and cretae time of each record
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;

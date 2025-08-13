import mongoose from "mongoose";

const addBookSchema = new mongoose.Schema({
    serial_no: Number,
    title: String,
    author_name: String,
    total_pages: Number,
    publication: String,
    date_of_published: Date,
    quantity: Number,
    price: Number,
    discounted_price: Number,
    upload_image: String,
    language: String,
    availablility: String,
    rating: Number,
    description: String,
    summary: String,
})

const  addBookModel = mongoose.model("addbook",addBookSchema);

export default addBookModel;
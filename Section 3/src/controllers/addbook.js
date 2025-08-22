import { DateTime } from "luxon";
import addBookModel from "../models/addbookModel.js";

export const addbook = async (req, res) => {
  let {
    serial_no,
    title,
    author_name,
    total_pages,
    publication,
    date_of_published,
    quantity,
    price,
    discounted_price,
    upload_image,
    language,
    availablility,
    rating,
    description,
    summary,
  } = req.body;
  try {
    if (
      !serial_no.trim() ||
      !title.trim() ||
      !author_name.trim() ||
      !total_pages.trim() ||
      !publication.trim() ||
      !date_of_published.trim() ||
      !quantity.trim() ||
      !price.trim() ||
      !discounted_price.trim() ||
      !upload_image.trim() ||
      !language.trim() ||
      !availablility.trim() ||
      !rating.trim() ||
      !description.trim() ||
      !summary.trim()
    ) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const result = await addBookModel.create({
      serial_no,
      title,
      author_name,
      total_pages,
      publication,
      date_of_published,
      quantity,
      price,
      discounted_price,
      upload_image,
      language,
      availablility,
      rating,
      description,
      summary,
      created_at: DateTime.now().toISO(),
      updated_at: DateTime.now().toISO(),
    });
    res.status(200).json({ message: "add book Successfully", result });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};

export const getAllBookData = async (req, res) => {
  try {
    const result = await addBookModel.find({});
    return res.status(200).json({ message: "Fetched  All Data", result });
  } catch (error) {
    return res.status(500).json({ message: `something went wrong ${error}` });
  }
};

export const getParamBookdata = async (req, res) => {
  const { book_id } = req.params;
  // console.log(req.params);
  
  try {
    const bookDatails = await addBookModel.findById(book_id);
    if (!book_id) {
      return res.status(400).json({ message: "Book id is required"});
    }
    if (!bookDatails) {
      return res.status(400).json({ message: "Book not exist in Database" });
    }
    return res.status(200).json(bookDatails);
  } catch (error) {
    return res.status(500).json({ message: `something went wrong ${error}` });
  }
};

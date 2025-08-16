import foodModel from "../models/foodmodels.js";
import fs from 'fs';

// ✅ Add Food Item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ List All Food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ Remove Food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {}); // Delete image file
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ Update Food Item
const updateFood = async (req, res) => {
  const { id, name, category, price } = req.body;
  try {
    await foodModel.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });
    res.json({ success: true, message: "Item updated" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Update failed" });
  }
};

export { addFood, listFood, removeFood, updateFood };

const Product=require('../models/Product');

const getAllProducts =async(eq,res)=>{
    try {
        const products = await Product.find({});
        res.json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }


}

const getProductById =async(eq,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
}
const AddProduct =async(req,res)=>{
try {
      const newproduct = await Product.addById(req.params.product);
     res.json(newproduct);
  } catch (error) {
     console.error(error);
       res.status(500).json({ message: "Server Error" });
  }


 }










module.exports={
    getAllProducts,
    getProductById,
    AddProduct,
}


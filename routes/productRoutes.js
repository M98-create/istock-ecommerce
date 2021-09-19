const express=require('express');
const router=express.Router();

const{getAllProducts,getProductById,AddProduct}=require('../controller/productControllers');


router.get('/',getAllProducts)


router.get('/:id',getProductById)



router.post('/add',AddProduct)
module.exports=router;
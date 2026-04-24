const productModel=require('../modules/product_module');


exports.getProducts=async (req,res,next)=>{
    const products=await productModel.find({});

    res.json({
        success: true,
        products
    })
}


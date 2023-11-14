const product = require('../../models/ProductModel')

const deleteProduct = async (req,res) =>{
    const id = req.params.id
    try {
        await product.deleteOne({_id:id})
        res.status(200).json({
            message:"Product Deleted"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = deleteProduct
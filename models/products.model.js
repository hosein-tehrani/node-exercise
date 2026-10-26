const products = require("../data/products.json")
async function find(){
    return new Promise((res,rej)=>{
        res(products)
    })
}
const productModel = {
    find
}
module.exports = productModel;
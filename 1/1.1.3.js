let massiveOfAbstractProducts = [new AbstractProduct()]

class AbstractProduct {
    constructor(id, name, description, price, skolko, reviews, images, date, brand) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.skolko = skolko;
        this.reviews = reviews;
        this.images = images;
        this.date = date;
        this.brand = brand;
        function getter_Setter (product, elementOfProduct){
            if (product.elementOfProduct === undefined && product.elementOfProduct === NaN){
                return elementOfProduct
            }
            else{
                product.elementOfProduct = elementOfProduct
            }

        }
        function getFullInformation(){
            let res = []
            for(let i = 0; i<massiveOfAbstractProducts.length; i++){
                res[i] = massiveOfAbstractProducts[i].brand +  massiveOfAbstractProducts[i].date + massiveOfAbstractProducts[i].description + massiveOfAbstractProducts[i].id + massiveOfAbstractProducts[i].images + massiveOfAbstractProducts[i].name + massiveOfAbstractProducts[i].price + massiveOfAbstractProducts[i].reviews + massiveOfAbstractProducts[i].skolko;
            }
            return res.join(", ")
        }
        function getPriceForQuantity(int){
            let res
            for (let i = 0;i<massiveOfAbstractProducts.length; i++){
                res += massiveOfAbstractProducts[i].price + "$"
            }
        }
    }
}
class Clothes{
    constructor(material, color){
        this.material = material;
        this.color = color
        getColor = function(){return this.material};
        setColor = function(color){this.color = color};
        getMaterial = function(){return this.color};
        setMaterial = function(material){this.material = material};
    }
}
class Electronics{
    constructor(warranty, power){
        this.warranty = warranty;
        this.power = power;
        getWarranty = function(){return this.warranty};
        setWarranty = function(warranty){this.warranty = warranty};
        getPower = function(){return this.power};
        setPower = function(power){this.power = power}
    }
}
function SearchProducts (products, search){
    let result = ""
    for (let i = 0; i<this.products.length;i++){

        if(products[i].name === search){
            result += products[i].name

        }
        return result
    }
}
function sortProducts(products, sortRule) {
    let result = [];
    if (sortRule === "id".toLowerCase()){
        for (let i = 0; i < products.length; i++) {
            result[i] = products[i].id;
        }
        result.sort(function(a, b) {
            return a - b;
        });

    }
    if (sortRule === "Price".toLowerCase()){
        for (let i = 0; i < products.length; i++) {
            result[i] = products[i].price;
        }
        result.sort(function(a, b) {
            return a - b;
        });
    }
    if(sortRule === "Name".toLowerCase()){
        for (let i = 0; i < products.length; i++) {
            result[i] = products[i].name;
        }
        result.sort();
    }
    return console.log(result);
}
//Тестінг я прибрав
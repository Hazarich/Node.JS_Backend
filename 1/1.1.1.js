function Product (id, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images){
    this.id = id,
        this.name = name,
        this.description = description,
        this.price = price,
        this.brand = brand,
        this.sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    this.activeSize = activeSize,
        this.quantity = quantity,
        this.date = date,
        this.reviews = [new Reviews(1, "Vasya", "18.06.2023", "Milka yje ne ta", 3), new Reviews(2, "Masha", "21.06.2023", "Plocho", 1)]
    this.images = images,
        this.getId = function(){return this.id};
    this.setId = function(id){this.id = id};
    this.getName = function(){return this.name};
    this.setName = function(name){this.name = name};
    this.getDescription = function(){return this.description};
    this.setDescription = function(description){this.description = description;};
    this.getPrice = function(){return this.price};
    this.setPrice = function(price){this.price = price};
    this.getBrand = function(){return this.brand};
    this.setBrand = function(brand){this.brand = brand;};
    this.getSizes = function(){return this.sizes};
    this.setSizes = function(sizes){this.sizes = sizes};
    this.getActiveSize = function(){return this.activeSize};
    this.setActiveSize = function(activeSize){this.activeSize = activeSize;};
    this.getQuantity = function (){return this.quantity};
    this.setQuantity = function (quantity){this.quantity = quantity}
    this.getDate = function(){return this.date};
    this.setDate = function(date){this.date = date};
    this.getReviews = function(){return this.reviews};
    this.setReviews = function(reviews){this.reviews = reviews};
    this.getImages = function (){return this.images};
    this.setImages = function (images){this.images = images}
    this.getReviewsById = function(id){
        let result = []
        this.reviews.array.forEach((element, index) => {
            if(element.id === id && id === undefined){
                result.push(this.reviews[index])
            }
        });
    }

    this.getImage = function (parametr){
        return images === undefined ? images[0] : this.images[parametr]
    }




    this.addSizes = function(parametr){
        this.sizes.push(parametr)
    }

    this.deleteSizes = function(parametr){
        this.sizes.splice(parametr)
    }

    this.addReview = function(parametr){
        if(parametr != undefined && parametr != NaN){this.reviews.push(new Reviews(id, author, date, comment, rating))}
    }

    this.deleteReview = function(parametr){
        this.reviews.splice(parametr)
    }

    this.getAverageRating = function(){
        let result = 0;
        for(let i=0; i<this.reviews.length; i++){
            result = result + this.reviews[i].rating
        }
        result = result/this.reviews.length
        return console.log(result);
    }

}
class Reviews {
    constructor(id, author, date, comment, rating) {
        this.id = id;
        this.author = author,
            this.date = date,
            this.comment = comment,
            this.rating = rating;
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

sortProducts([new Product(1, "MilKa".toLowerCase(), "h", 34, "j", 7, 8, 8,3,4,8), new Product(2, "Footbolka".toLowerCase(), "h", 35, "j", 7, 8, 8,3,4,8)], "id".toLowerCase());
   
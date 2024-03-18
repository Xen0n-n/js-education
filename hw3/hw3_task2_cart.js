function countBasketPrice(basket){
    let all_price = 0;
    for (let i = 0; i < basket.length; i++){
        all_price += basket[i][1];
    }
    return all_price
}
let basket = [["obj1", 20000],["obj2", 30000],["obj3", 23000]];
console.log(countBasketPrice(basket))
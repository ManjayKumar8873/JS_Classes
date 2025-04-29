const shopingCart =[
    {
        itemnam : "java",
        price: 999
    },

    {
        itemName: "CSS",
        price: 550
    },

    {
        itemName: "Python",
        price: 2999
    }
]

const totalPrice =  shopingCart.reduce((acc, item)=>{
    return acc + item.price
},0 )

console.log(totalPrice);

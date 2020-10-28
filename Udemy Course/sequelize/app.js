const models = require('./models')

// Add dish to Dishes table
// let dish = models.Dish.build({
//     name: 'Spring Rolls',
//     description: 'Delicious egg spring rolls.',
//     price: 3.75
// })

// dish.save().then((persistedDish) => {
//     console.log(persistedDish)
// })

// search for all dishes
// models.Dish.findAll()
//     .then(dishes => console.log(dishes))

// search for a single dish
// models.Dish.findByPk(3)
//     .then(dish => console.log(dish))

// search for a single dish (returned in an array)
// models.Dish.findAll({
//     where: {
//         name: 'Spring Rolls'
//     }
// }).then(dishes => console.log(dishes))

// search for a single dish NOT in an array (object)
// models.Dish.findOne({
//     where: {
//         name: 'Spring Rolls'
//     }
// }).then(dish => console.log(dish))

// Updating item in table
// models.Dish.update({
//     name: 'Carrot Cake',
//     price: 8.0
// },{
//     where: {
//         id: 2
//     }
// }).then(updatedDish => console.log(updatedDish))

models.Dish.destroy({
    where: {
        id: 3
    }
}).then(result => console.log(result))


require("dotenv").config();
const { where } = require("sequelize");
const { User, Todo, sequelize } = require("./models");
// // Mock data
// sequelize 
//   .sync({ force: true })
//   .then(() => {
//     return User.bulkCreate([
//       { name: "Andy", password: "1234" },
//       { name: "Bobby", password: "1234" },
//       { name: "Candy", password: "1234" },
//       { name: "Danny", password: "1234" },
//       { name: "Eddy", password: "1234" },
//     ]);
//   })
//   .then(() => {
//     return Todo.bulkCreate([
//       { title: "Learn HTML", dueDate: "2023-05-19", userId: 1 },
//       { title: "Learn CSS", dueDate: new Date("2023-05-21"), userId: 1 },
//       { title: "Learn Javascript", dueDate: new Date("2023-05-25"), userId: 2 },
//       { title: "Practice Git", dueDate: new Date("2023-05-30"), userId: 3 },
//       {
//         title: "Read mySQL Manual",
//         dueDate: new Date("2023-06-02"),
//         userId: 3,
//       },
//       { title: "Review Docker", dueDate: "2023-06-10", userId: 4 },
//     ]);
//   })
//   .catch((err) => console.log(err.message));



// sequelize.sync({force: true})

// Join table User and Todo   กรณีไม่ได้กำหนด  hasMany และ belongsTo  68-76 ใน modesl/index จะ error
// User.findAll( {
//     where: {name : 'andy'},
//     include : Todo         // include คือ Join
// }).then( rs => {
//     console.log(JSON.stringify(rs, null, 2))
//     console.log(rs[0].Todos[1].title)
// })


// Todo.findAll({
//     include: User
// }).then( rs => {
//     console.log(JSON.stringify(rs, null, 2))
// })

//  เอาแค่ Title กับ status  ออกมา
User.findAll({
    where : { id : 3},
    attributes: ['name'],
    include : {
        model : Todo,
        attributes: ['title', 'status']
    }
}).then(rs=> {
    //console.log(JSON.stringify(rs,null,2))
  //  [ "title": "Practice Git","status": false]
    // console.log(rs[0].Todos[0].title) // เอาแค่ title ตัวที่ 0 มา [Practice Git]
    console.log(JSON.stringify(rs[0].Todos, null, 2))
    let output = rs[0].Todos.map(el => el.title)
    console.log(output)
})




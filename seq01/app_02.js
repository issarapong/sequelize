require('dotenv').config()
const {Op} = require('sequelize')  // require จาก library ตรง เพื่อจะใช้ Op  > checl in Line 92
const {User, Todo, sequelize} = require('./models/index')

// sequelize.sync({force:true})

//CRUD
//CREATE

// User.create({name: 'Andy', password: '1234'}).then( rs => {
//     console.log(JSON.stringify(rs, null, 2))
// })



// Bulk Create

// const mockUser = [
//           { name: 'Andy', password: '1234'},
//           { name: 'mike', password: '1234'},
//           { name: 'bob', password: '1234'},
//           { name: 'rock', password: '1234'},
//           { name: 'kaka', password: '1234'},
//           { name: 'exc', password: '1234'},
//           { name: 'saw', password: '1234'},
//           { name: 'cae', password: '1234'}
// ]

// User.bulkCreate(mockUser).then(rs=> {
//     console.log(JSON.stringify(rs))
// })



//DELETE

// User.destroy({
//     where : { id:3}

// }).then(rs=> console.log(JSON.stringify(rs, null, 4)))

//UPDATE
// User.update({password: '4567'},{
//            where: {name: 'Andy'}
// }).then(rs=> {
//     console.log(JSON.stringify(rs, null, 2))
// })

//---------------------------------
// SELECT FIND
 ///หาคนแรกคนเดียว
// User.findOne({  
//     where: {name: 'Andy'}
// }).then(rs => console.log(rs.toJSON()))

//หามาทั้งหมด
// User.findAll({
//     where: {name: 'Andy'}
// }).then(rs => console.log(JSON.stringify(rs, null, 2)))

//หาเฉพาะคอลัมที่ต้องการ โดยระบุ attribute
// User.findAll({
//     attributes: ['name', 'password', 'createdAt'],
//     where: {name: 'Andy'}
// }).then(rs => console.log(JSON.stringify(rs, null, 2)))

// change result โอยเอา array ครอบ // เปลี่ยนชื่อ attiribute
// User.findAll({
//     attributes: [['name', 'userName'], 'password', 'createdAt'],
//     where: {name: 'Andy'}
// }).then(rs => {
//     //console.log(JSON.stringify(rs, null, 2))
//    // console.log(rs[0].dataValues.userName)   
//    console.log(rs[0].get('userName'))
// })

// หาทุกอย่าง ยกเว้น password //exclude attribute
// User.findAll({
//     attributes: {exclude:'password'}
// }).then( rs=> console.log(JSON.stringify(rs,null,2)))


// count ROWs
// User.findAll({
//     attributes:[
//         [sequelize.fn('COUNT', sequelize.col('id')), 'countAll']
//     ],
//     where: {name: 'Andy'}
// }).then(rs=> console.log(JSON.stringify(rs, null, 2)))

//--------------------------------------------------
// use => Op Operator

// User.findAll({
//     where: {
//         name: {
//             [Op.like] : 'A%'
//         }
//     }
// }).then(rs => console.log(JSON.stringify(rs, null, 2)))

//find  where with OR
// User.findAll({
//     where : {
//         [Op.or] : [
//             { id: 12}, 
//             { name: 'Andy'}
//         ]
//     }
// }).then(rs => console.log(JSON.stringify(rs, null, 2)))

// op ซ้อน op
User.findAll({
    offset: 2,
    limit:3,
    group: 'name',
    where : {
        [Op.or] : [
            { id: 12}, 
            { [Op.or]:
                [{name: 'andy'}
                 {name: 'booby'}
                ]}               
        ]
    }
}).then(rs => console.log(JSON.stringify(rs, null, 2)))


//Test validate name must char  Ref (index Line 20)

// User.create({
//     name: 'GeGE',
//     password: '1234'
// })
// .then(rs =>  console.log(JSON.stringify(rs, null, 2)))
// .catch((err) => console.log(err.message));
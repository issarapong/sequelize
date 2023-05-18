// Sync DB  after add models/Todo.js 
const {sequelize} = require('./models')

sequelize.sync({force:true})  // คำสั่งเต็มอยู๋ใน  models/index.js 


//const {Todo} = require('./models')   //index.js  จะหา ไฟลล์ model ให้อัตืโนมัติ

//console.log(db)

//Todo.findByPk(2).then(  rs => console.log(rs))
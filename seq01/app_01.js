const {Sequelize, DataTypes} = require('sequelize')

// connect DB by Sequelize
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'passw0rd',
    database: 'cc14_shop',
    dialect: 'mysql'
})

sequelize.authenticate().then(console.log('DB connect ok')) // Test Authenticate

//Test Select
// sequelize.query('select * from products where id = 38').then(([rs]) => {
//     console.log(rs)
// })

// Maping table Produtc=Produtcs and add parameter ให้เหมือน object ใน JS
sequelize.define('Product',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    price: {
        type: DataTypes.DECIMAL(10,2,),
        allowNull: false       
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},{ 
    timestamps : false   //Disable time Stamps
})



//create table
//sequelize.define('Person', {
const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: 'No specify'   // ตั้ง Default value
    }
    },{
        timestamps: true, // สั่งงดตรวจสอบ 
       // freezeTableName: true // บังคับสร้างชื่อ table ตามที่เรากำหนด ไม่สร้างแบบ เอกพจน์/พหูพจ 
         //tableName: 'AllUser' // บังคับ เปลี่ยนชื่อ table ไหม่ แทนที่กำหนด
         underscored: true   // สั่งใส่ underscore ให้อัตโนมัติ  หรือ ตั้งชื่อให้มี _ ไปเลย
})

// sequelize.models.Customer.sync() // สั่ง implement
 //sequelize.models.Customer.sync({force:true})  // สั่ง force implement

 Customer.sync({force:true})
 
//Person.drop().then(console.log('table del'))   // สั่งลบ หลัง  const = Person

//console.log(sequelize.models)
// Query CLI
// findAll / select * form table
// sequelize.models.Product.findAll().then(rs => {
//     console.log(JSON.parse(JSON.stringify(rs)))
//     console.log(JSON.parse(JSON.stringify(rs[1].name)))
// })

//sequelize.synce()  // สร้าง Table ที่ define ไว้ให้ อัติโนมัติ

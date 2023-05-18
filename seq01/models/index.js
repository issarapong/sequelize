
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_CONNECT)  // Connect via ENV

// sequelize.authenticate().then(console.log('DB Connected 😙')).catch(err => console.log(err.message)) // Check Authen


const User = sequelize.define('User', {
    // id:{
    //     type: DataTypes.INTEGER,     // Primarykey ไม่จำเปนต้องประกาศก็ได้ ระบบจะสร้างให้ auto
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true,
    // },
    name:{
        type: DataTypes.STRING(25),
        allowNull: false,
        validate:{               // Add validate 
            isAlpha: true,
            len: [2,5]
        }        
    },
    password:{
        type: DataTypes.STRING(25),
        allowNull: false
    },
    image:{
        type: DataTypes.STRING(25)
    }
    },{ 
        timestamps : true,
        freezeTableName: true 
    })



const Todo = sequelize.define('Todo',{
    // id:{
    //     type:DataTypes.INTEGER,    // Primarykey ไม่จำเปนต้องประกาศก็ได้ ระบบจะสร้างให้ auto
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    user_id : {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    title : {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    due_date: {
    type: DataTypes.DATEONLY,
    allowNull:false
    },
status : { 
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false 

     }
    },{ 
        timestamps : false,
        freezeTableName: true 
    })


//sequelize.sync({force:true})

//    User.sync({force:true})
//    Todo.sync({force:true})

module.exports = {User, Todo, sequelize}
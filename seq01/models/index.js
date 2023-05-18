
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
        },       
        
        // Add Getter  // แปลงข้อมูลก่อนส่ง ตัวอย่างคือทำ Name toUpperCase() เป็นตัวใหญ่ทั้งหมด หลัง add ให้ sync alter
   
            //   get() {
            //     const rawValue = this.getDataValue('name');
            //     return rawValue ? rawValue.toUpperCase() : null;
            //   }
            get() {
                const rawValue = this.getDataValue('name');
                return rawValue ? rawValue.toUpperCase() : null;
              }

              // restruct again




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
    userId : {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    title : {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    dueDate: {
    type: DataTypes.DATEONLY,
    allowNull:false
    },
 // Virtuals fields   // ไม่ต้อง sync  // ตัวอย่างเรียกใช้  79 -80
     inSevenDay: {
        type: DataTypes.VIRTUAL,
        get() {
            let sevenDay = new Date(this.dueDate);
            sevenDay.setDate(sevenDay.getDate()+7)
            return sevenDay
        }
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

// บอกให้ sql รู้ ว่า field ไหน เปน FK  // Default option จะเปน cadcase  // หลังจาก update ข้อมูล ต้องไป sync ไห่่ม่  (sequelize.sync({alter:true}))
    User.hasMany(Todo,{
        foreignKey: 'userId',
        onDelete: 'Restrict',
        onUpdate: 'Restrict' 
    })
    
    Todo.belongsTo(User, {
        foreignKey: 'userId',
        onDelete: 'Restrict',
        onUpdate: 'Restrict' 
    })

// command sync เปิดแล้วอย่าลืมปิด
//sequelize.sync({force:true})
// sequelize.sync({alter:true})
//    User.sync({force:true})
//    Todo.sync({force:true})

module.exports = {User, Todo, sequelize}
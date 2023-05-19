const {Todo, User} = require('../models')

//find aLl
exports.getAllTodos = (req, res, next ) => {
    Todo.findAll().then(rs => {
        res.json(rs)
    }).catch(next)

   
}


//find by id
// exports.getTodoById = (req, res, next) => {

// const {id} = req.params

// Todo.findAll({
//     where : { id: id}
// }).then(rs => {
//        res.json(rs)
// }).catch(next)
// }

// หา เฉพาะ title Due_date, status  by id
exports.getTodoById = (req, res, next) => {

const {id} = req.params

Todo.findAll({
    attributes: ['title', 'dueDate', 'status' ],
    where : { id: id}
}).then(rs => {
       res.json(rs)
}).catch(next)
}


// เพิ่มข้อมูลโดยส่งมาทาง req.body


    // {
    //   "title": "Learn CSS",
    //   "dueDate": "2023-05-21",
    //   "userId": 2
    // }
  
exports.createTodo = (req, res, next) => {
        // validation
        Todo.create(req.body).then(rs=> {
            res.json(rs)
        }).catch(next)
    
    }




    exports.deleteTodo = (req, res, next) => {
        const {id} = req.params
        Todo.destroy({
            where : {id : id}
        }).then(rs=> {
            if (rs===0) {
                throw new Error('Cannot Delete!!')
            }
            res.json(rs)
        }).catch(next)
    }

    exports.updateTodo = (req, res, next) => {
        const {id} = req.params
        Todo.update(req.body, {
            where : { id:id}
        }).then(rs => {
            res.json(rs)
        }).catch(next)
    }
    

// /user?name=Andy  หาโดย user
// exports.getTodoByUser = (req, res, next) =>
// {
//     const {name} = req.query
//  User.findAll({
//      where : { name : name},
//   attributes: ['name'],
//      include : {
//          model : Todo,
//         attributes: ['title', 'status'],
//      }
//     }).then(rs => {
//         res.json(rs)
//     }).catch(next)
// }


// แสดง todolist จากชื่อ user
// /user?name =Andy


// แสดง todolist จากชื่อ user
//   /user?name=Andy
// By teacher
exports.getTodoByUser = (req, res, next) => {
    const {name} = req.query
    User.findAll({
        attributes: {exclude: 'password'},
        where : { name : name},
        include : {
            model : Todo,
            attributes: ['title', 'dueDate', 'status']
        }
    }).then(rs => {
        res.json(rs)
    }).catch(next)
}


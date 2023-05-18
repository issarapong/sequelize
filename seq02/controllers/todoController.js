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
    

// exports.createProduct = (req, res, next) => {
//     // const data = req.body
//     // console.log(data)
//     // res.send('createproduct')
//     Products.create(req.body).then(rs=> {
//         console.log(rs)
//       //  res.json(rs)
//         if(rs.affectedRows>=1) {
//             res.status(201).json(rs)   //Create status
//         } 
//         throw new Error( 'cant create')
//     }).catch(next)
// }



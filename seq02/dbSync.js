const {sequelize, User, Todo} = require('./models')

sequelize
  .sync({ force: true })
  .then(() => {
    return User.bulkCreate([
      { name: "Andy", password: "1234" },
      { name: "Bobby", password: "1234" },
      { name: "Candy", password: "1234" },
      { name: "Danny", password: "1234" },
      { name: "Eddy", password: "1234" },
    ]);
  })
  .then(() => {
    return Todo.bulkCreate([
      { title: "Learn HTML", dueDate: "2023-05-19", userId: 1 },
      { title: "Learn CSS", dueDate: new Date("2023-05-21"), userId: 1 },
      { title: "Learn Javascript", dueDate: new Date("2023-05-25"), userId: 2 },
      { title: "Practice Git", dueDate: new Date("2023-05-30"), userId: 3 },
      {
        title: "Read mySQL Manual",
        dueDate: new Date("2023-06-02"),
        userId: 3,
      },
      { title: "Review Docker", dueDate: "2023-06-10", userId: 4 },
    ]);
  }).then(()=>process.exit(0)) // .then(()=>process.exit(0)) ออกจากคำสั่งอัติโนมัติ ถ้าไม่ใส่จะค้า
  .catch((err) => console.log(err.message));
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// let msg = 'Codecamp14'

// let hashMsg = bcrypt.hashSync(msg)
// console.log(hashMsg)  // result include $2a$10$9Pnmu0I4E8GlOjdzP2EnxeIuMrn7EQ1CDqtpw1dyyGKXaDFjc2YKS

// console.log(bcrypt.compareSync('Codecamp14', '$2a$10$9Pnmu0I4E8GlOjdzP2EnxeIuMrn7EQ1CDqtpw1dyyGKXaDFjc2YKS'))   // เวลา login ก็ใช้ Bcryp Compare 



// JWT Lab
let payload = { id:3, name:'Andy'}

let token = jwt.sign(payload, 'Codecamp14', { expiresIn : '7d'}) // secret key is "Codecamp14"

console.log(token)   // check as https://jwt.io/   as VERIFY SIGNATURE with "Codecamp14" result will same



// Check Token

let token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkFuZHkiLCJpYXQiOjE2ODQ0NzE2MzAsImV4cCI6MTY4NTA3NjQzMH0.5yKyqkoB9rOF40cMt7qHlDXOfYJ8F9RS5HoD1oKt6mg'


let checkToken = jwt.verify('token2', 'Codecamp14')



console.log(checkToken)


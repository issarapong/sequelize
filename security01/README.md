 # bcrypt
 -npm install bcryptjs


#JWT
 HEADER.PAYLOAD.SIGNATURE
-------
 HEADER

- alg

PAYLOAD

- userid name


 SIGNATURE

 --(Header+payload)+SecretKey = SIGNATURE


 # JWT

 npm i jsonwebtoken



 ```
 // JWT Lab
let payload = { id:3, name:'Andy'}

let token = jwt.sign(payload, 'Codecamp14', { expiresIn : '7d'})

console.log(token)   // check as https://jwt.io/
 ```
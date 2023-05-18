# Sequelize

## Check authenn

```
const sequelize = new Sequelize(process.env.DB_CONNECT)  
```

## Auto Generate Model 
```
https://github.com/sequelize/sequelize-auto

Ordering and Grouping

## Associations

One-To-One, 
One-To-Many // เน้น  One-To-Many ไว้เป็นหลัก
Many-To-Many. // ซับซ้อน ยุ่งนาก


## frontent ไม่ต้องการตั้งก้อน  Backend ต้องทำเฉพาพที่ ต้องการ

# sequelize-cli 

## ติดตัง sudo npm i -g sequelize 

```
sudo npm i -g sequelize-cli // install package @ Global // global คือเรียกตรงๆได้เลย

sequelize-cli  // เรียกใช้
```

blackbook@BlackBook seq02 % npm ls
/cc14-sequelize/seq02
├── dotenv@16.0.3
├── express@4.18.2
├── mysql2@3.3.1
└── sequelize@6.31.1

## Step install
``
sequelize-cli init:config
sequelize db:create 
sequelize init:models


## if error below use  // sudo npm i  -g mysql2

```
$sequelize db:create    

Sequelize CLI [Node: 18.16.0, CLI: 6.6.0, ORM: 6.31.1]

Loaded configuration file "config/config.json".
Using environment "development".

ERROR: Please install mysql2 package manually
```
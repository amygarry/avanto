const express = require ('express')
const cors = require('cors')
const db = require('./util/database')
const seed = require('./util/seed')
const {Car, Photo, Inquiry, User}=require('./util/models')

const server= express()
server.use(express.json())
server.use(cors())

Car.hasMany(Photo)
Photo.belongsTo(Car)
User.hasMany(Inquiry)
Inquiry.belongsTo(User)
Car.hasMany(Inquiry)

db
.sync()
// .then(seed())

server.listen(4000, ()=>console.log("up on 4000"))
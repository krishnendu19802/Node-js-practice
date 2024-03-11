const express = require('express')
const app = express()
const port = 5000
const Joi = require('joi')
const ProductRouter=require('./products.routes.js')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');

const pwd=process.env.password
// Middleware to parse URL-encoded form data in the request body
// app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://krishnendu19802:${pwd}@cluster0.4lahfo1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  console.log('Connected successfully')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}).catch(() => { console.log('error connecting') })


// mongoose.connect('mongodb://127.0.0.1:27017/learning?directConnection=true').then(() => {
//   console.log('Connected successfully')
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
// }).catch((err) => { console.log('error connecting',err) })

let arr = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },

]
app.use('/',ProductRouter)


// function check(obj) {
//   const schema = Joi.object({
//     name: Joi.string().min(4)
//   })
//   // console.log(req.body)
//   return schema.validate(obj)
// }

// app.post('/newcontent', async(req, res) => {
//  
//   // if (error) {
//   //   console.log(error)
//   //   res.status(400).send('Wrong value received')
//   //   return
//   // }
//   // else {
//   //   arr.push({ id: arr.length + 1, name: req.body.name })
//   //   res.send(arr)
//   // }

// })

// app.put('/:id', async(req, res) => {
//   // const ind = parseInt(req.params.id)
//   // let elem = arr.find(each => each.id === ind)
//   // if (!elem) {
//   //   res.status(404).send('No such value')
//   //   return
//   // }
//   // const body = req.body
//   // const { error, value } = check(body)
//   // if (error) {
//   //   console.log(error)
//   //   res.status(400).send('Wrong value received')
//   //   return
//   // }
//   // else {
//   //   elem.name = body.name
//   //   res.send(arr)

//   // }

// })


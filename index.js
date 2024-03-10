const express=require('express')
const app=express()
const port =5000
const Joi=require('joi')
app.use(express.json());

// Middleware to parse URL-encoded form data in the request body
// app.use(express.urlencoded({ extended: true }));


let arr=[
  {id:1,name:'course1'},
  {id:2,name:'course2'},
  {id:3,name:'course3'},

]

app.get('/', (req, res) => {
    res.send(arr)
  })

app.get('/:id',(req,res)=>{
  const params=req.params.id
  console.log(params)
  res.send(arr[params])
})

function check(obj){
  const schema=Joi.object({
    name: Joi.string().min(4)
  })
  // console.log(req.body)
  return schema.validate(obj)
}

app.post('/newcontent',(req,res)=>{
  const {error,value}=check(req.body)
  
  if(error){
    console.log(error)
    res.status(400).send('Wrong value received')
    return
  }
  else{
    arr.push({id:arr.length+1,name:req.body.name})
    res.send(arr)
  }
  
})

app.put('/:id',(req,res)=>{
  const ind=parseInt(req.params.id)
  let elem=arr.find(each=> each.id===ind)
  if(!elem ){
    res.status(404).send('No such value')
    return
  }
  const body=req.body
  const {error,value}=check(body)
  if(error){
    console.log(error)
    res.status(400).send('Wrong value received')
    return
  }
  else{
    elem.name=body.name
    res.send(arr)
    
  }
  
})
 
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

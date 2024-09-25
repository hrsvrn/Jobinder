const PORT=8000
const express= require('express')
const app=express()
const { MongoClient }= require('mongodb')
const uri=
app.get('/',(req,res)=>{
  res.json('Hello to my app')
})

app.get('/signup',(req,res)=>{
  res.json('Hello to my app')
})
app.get('/login',(req,res)=>{
  res.json('Hello to my app')
})
app.get('/',(req,res)=>{
  res.json('Hello to my app')
})

app.get('/users',async(req,res)=>{
  const client = new MongoClient(uri)
  try{
    await client.connect()
    const database= client.db('app=data')
    const users = database.collection('users')
    const returnedUsers=await users.toArray()
    res.send(returnedUsers)
  }finally{
    await client.close()
  }
})


app.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`))

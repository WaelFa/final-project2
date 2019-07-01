const express=require('express')
const bodyParser=require('body-parser')
const{ObjectID,MongoClient}=require('mongodb')
const assert=require('assert')

const app=express()
app.use(bodyParser.json())
const MongoUrl='mongodb://localhost:27017'
const database='destinationsList'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database)

//add destination
app.post('/add-destination',(req,res)=>{
    let newdestination=req.body
    db.collection('destinations').insertOne(newdestination,(err,data)=>{
        if(err) res.send('cant not add destination')
        else res.send(data)
    })
})
//get destination
app.get('/get-destination',(req,res)=>{

db.collection('destinations').find().toArray((err,data)=>{
     if(err) res.send('can not get destination')
    else res.send(data)
})   
})
//remove destination
app.delete('/delete-destination/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('contacts').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete destination')
        else res.send(data)
    })
})
//edit destination
app.put('/edit-destination/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('contacts').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the destination')
    else res.send (data)
})
})

})




app.listen(3055,(err)=>{
assert.equal(null,err,'server not running')
console.log('the server is running on port 3055')
})




const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.port || 5000;


// middleware
app.use(cors());
app.use(express.json());

//brandShop
//TlrvFBRW7I3cIWIa



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ovs4csm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    

    //for google
    const googleProductCollection = client.db('productGoogleDB').collection('google')

    app.get('/google',async(req, res) =>{
        const cursor = googleProductCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/google' , async(req, res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await googleProductCollection.insertOne(newProduct)
        res.send(result);
    })

    //update

    // app.put('/google/:id', async(req, res) =>{
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id)}
    //   const options = {upsert: true};
    //   const updateProduct = req.body;
    //   const Product = {
    //     $set: {
    //       name: updateProduct.name,
    //        image: updateProduct.image,
    //         brand: updateProduct.brand,
    //          type: updateProduct.type,
    //          price: updateProduct.price,
    //          description: updateProduct.description
    //     }
    //   }

    //   const result = await googleProductCollection.updateOne(filter, Product, options);
    //   res.send(result);

    // })

    app.get('/google/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await googleProductCollection.findOne(query)
      res.send(result);
    })

    // details
    app.get('/google/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await googleProductCollection.findOne(query);
      res.json(result);
    })

    // for google end 

    // for apple
    const appleProductCollection = client.db('productAppleDB').collection('apple')

    app.get('/apple',async(req, res) =>{
        const cursor = appleProductCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/apple' , async(req, res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await appleProductCollection.insertOne(newProduct)
        res.send(result);
    })

      //update

      app.put('/apple/:id', async(req, res) =>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)}
        const options = {upsert: true};
        const updateProduct = req.body;
        const Product = {
          $set: {
            name: updateProduct.name,
             image: updateProduct.image,
              brand: updateProduct.brand,
               type: updateProduct.type,
               price: updateProduct.price,
               description: updateProduct.description
          }
        }
  
        const result = await appleProductCollection.updateOne(filter, Product, options);
        res.send(result);
  
      })
  
      app.get('/apple/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await appleProductCollection.findOne(query)
        res.send(result);
      })

      // details
    app.get('/apple/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await appleProductCollection.findOne(query);
      res.json(result);
    })
    // for apple end 
    
    // for samsung
    const samsungProductCollection = client.db('productSamsungDB').collection('samsung')

    app.get('/samsung',async(req, res) =>{
        const cursor = samsungProductCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/samsung' , async(req, res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await samsungProductCollection.insertOne(newProduct)
        res.send(result);
    })

      //update

      app.put('/samsung/:id', async(req, res) =>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)}
        const options = {upsert: true};
        const updateProduct = req.body;
        const Product = {
          $set: {
            name: updateProduct.name,
             image: updateProduct.image,
              brand: updateProduct.brand,
               type: updateProduct.type,
               price: updateProduct.price,
               description: updateProduct.description
          }
        }
  
        const result = await samsungProductCollection.updateOne(filter, Product, options);
        res.send(result);
  
      })
  
      app.get('/samsung/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await samsungProductCollection.findOne(query)
        res.send(result);
      })

      // details
    app.get('/samsung/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await samsungProductCollection.findOne(query);
      res.json(result);
    })
    // for samsung end 
    
    // for asus
    const asusProductCollection = client.db('productAsusDB').collection('asus')

    app.get('/asus',async(req, res) =>{
        const cursor = asusProductCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/asus' , async(req, res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await asusProductCollection.insertOne(newProduct)
        res.send(result);
    })

      //update

      app.put('/asus/:id', async(req, res) =>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)}
        const options = {upsert: true};
        const updateProduct = req.body;
        const Product = {
          $set: {
            name: updateProduct.name,
             image: updateProduct.image,
              brand: updateProduct.brand,
               type: updateProduct.type,
               price: updateProduct.price,
               description: updateProduct.description
          }
        }
  
        const result = await asusProductCollection.updateOne(filter, Product, options);
        res.send(result);
  
      })
  
      app.get('/asus/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await asusProductCollection.findOne(query)
        res.send(result);
      })

       // details
    app.get('/asus/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await asusProductCollection.findOne(query);
      res.json(result);
    })
    // for asus end 
    
    // for sony
    const sonyProductCollection = client.db('productSonyDB').collection('sony')

    app.get('/sony',async(req, res) =>{
        const cursor = sonyProductCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/sony' , async(req, res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await sonyProductCollection.insertOne(newProduct)
        res.send(result);
    })

      //update

      app.put('/sony/:id', async(req, res) =>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)}
        const options = {upsert: true};
        const updateProduct = req.body;
        const Product = {
          $set: {
            name: updateProduct.name,
             image: updateProduct.image,
              brand: updateProduct.brand,
               type: updateProduct.type,
               price: updateProduct.price,
               description: updateProduct.description
          }
        }
  
        const result = await sonyProductCollection.updateOne(filter, Product, options);
        res.send(result);
  
      })
  
      app.get('/sony/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await sonyProductCollection.findOne(query)
        res.send(result);
      })
    // for sony end 
    
    // for intel
    const intelProductCollection = client.db('productIntelDB').collection('intel')

    app.get('/intel',async(req, res) =>{
        const cursor = intelProductCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/intel' , async(req, res)=>{
        const newProduct = req.body;
        console.log(newProduct);
        const result = await intelProductCollection.insertOne(newProduct)
        res.send(result);
    })

      //update

      app.put('/intel/:id', async(req, res) =>{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)}
        const options = {upsert: true};
        const updateProduct = req.body;
        const Product = {
          $set: {
            name: updateProduct.name,
             image: updateProduct.image,
              brand: updateProduct.brand,
               type: updateProduct.type,
               price: updateProduct.price,
               description: updateProduct.description
          }
        }
  
        const result = await intelProductCollection.updateOne(filter, Product, options);
        res.send(result);
  
      })
  
      app.get('/intel/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await intelProductCollection.findOne(query)
        res.send(result);
      })

      // details
    app.get('/intel/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await intelProductCollection.findOne(query);
      res.json(result);
    })
    // for intel end 
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req, res) =>{
    res.send('brand shop is comming')
})

app.listen(port, () =>{
    console.log(`brand server is running on port ${port}`)
})
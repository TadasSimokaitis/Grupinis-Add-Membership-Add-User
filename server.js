require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { ObjectId } = require('mongodb');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

// get
app.get('/memberships', (request, response) => {
  client.connect(async () => {
    const database = client.db('GrupinisProjektas');
    const collection = database.collection('Services');
    const result = await collection.find({}).toArray();
    response.json(result);
    client.close();
  });
});

/// post
app.post('/memberships', (request, response) => {
  client.connect(async () => {
    const database = client.db('GrupinisProjektas');
    const serviceCollection = database.collection('Services');
    const result = await serviceCollection.insertOne({
      name: request.body.serviceName,
      price: request.body.membershipPrice,
      description: request.body.serviceDescription,
    });
    response.json(result);
    client.close();
  });
});

// delete

app.delete('/memberships/:id', (request, response) => {
  client.connect(async () => {
    const database = client.db('GrupinisProjektas');
    const collection = database.collection('Services');
    const result = await collection.deleteOne({
      _id: ObjectId(request.params.id),
    });
    response.json(result);
    client.close();
  });
});

/// post users

app.post('/users', (request, response) => {
  client.connect(async () => {
    const database = client.db('GrupinisProjektas');
    const serviceCollection = database.collection('Users');
    const result = await serviceCollection.insertOne({
      name: request.body.usersName,
      surname: request.body.usersSurname,
      email: request.body.usersEmail,
      membershipId: request.body.membershipId
    });

    response.json(result);

    client.close();
  });
});



// get users
app.get('/users', (request, response) => {
  client.connect(async () => {
    const database = client.db('GrupinisProjektas');
    const collection = database.collection('Users');
    const users = await collection.find({}).toArray();
    const collectionMemberships = database.collection('Services');
    const resultMemberships = await collectionMemberships.find({}).toArray();
    const usersWhitMemberships = users.map(function (user) {
      const newUser = { ...user }
      const userMembership = resultMemberships.find(function (membership) {
        return membership._id.equals(user.membershipId)
      })
      newUser.membership = userMembership
      return newUser
    })
    response.json(usersWhitMemberships);
    client.close();
  });
});

app.delete('/users/:id', (request, response) => {
  client.connect(async () => {
    const database = client.db('GrupinisProjektas');
    const collection = database.collection('Users');
    const result = await collection.deleteOne({
      _id: ObjectId(request.params.id),
    });
    response.json(result);
    client.close();
  });
});
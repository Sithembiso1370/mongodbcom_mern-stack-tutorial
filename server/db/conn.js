// Create a mongodb module variable holder 
const { MongoClient } = require("mongodb");

// Access the atlas uri from the environment variables
const Db = process.env.ATLAS_URI;

// Create an instance of the connection to mongodb
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

var _db;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db)
        {
          _db = db.db("employees");
          console.log("Successfully connected to MongoDB."); 
        }
        return callback(err);
           });
    },
   
    getDb: function () {
      return _db;
    },
  };
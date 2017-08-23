const mongoose = require('mongoose');

/* A schema is a description of the format of documents within a
 * collection. In this case, each Bear is a document of the form:
 *
 * {
 *   species: "American Black Bear",
 *   latinName: "Ursus americanus",
 *   createdAt: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT)
 * }
 *
 * Make createdAt default to the current date.
 */
const BearSchema = new mongoose.Schema({
  species: {
    type: String,
  },
  latinName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bears', BearSchema);
/* 'Bears' is the arbitrary reference name we give to our BearSchema 
 * for it to be used in other files. If another model/schema wants to
 * reference the BearSchema, 'Bear' will be the ref used:
 * E.g., 
 * const ZooSchema = new mongoose.Schema({
 *  location: {
 *   type: String,
 *  },
 *  bear: { 
 *   type: Schema.ObjectId, // references a schema created in another file
 *   ref: 'Bears' // ref of 
 *  },
 *  });
 */

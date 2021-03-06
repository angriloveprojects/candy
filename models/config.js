module.exports = function(Schema) {
  return new Schema({
    name: String,
    desc: String,
    theme: {
      type: String,
      default: 'flat'
    },
    duoshuo: {
      short_name: String,
      secret: String
    },
    created: {
      type: Date,
      default: Date.now
    }
  });
}
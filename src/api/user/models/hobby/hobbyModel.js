const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const schema = new Schema({
    title: String,
    icon: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps: true, versionKey: false, collection: 'hobby'});

module.exports = mongoose.model('hobby', schema);
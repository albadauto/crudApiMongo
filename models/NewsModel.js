const mongoose = require('mongoose')
const Schema = mongoose.Schema

const News = new Schema({
    id:{
        type: Number,
    },
    titulo:{
        type:String
    },
    data:{
        type:Date,
        default: Date.now()
    },
    noticia:{
        type:String
    }
})

mongoose.model('News', News)

const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://kush:kush@cluster0.vzehn.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify:false
})




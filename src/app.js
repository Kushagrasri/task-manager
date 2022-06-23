const express = require('express')
const path = require('path')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// const pprof = require('pprof')
// pprof.heap.start(512 * 1024, 64);

const app=express()
const publicPath=path.join(__dirname,'../public')

app.use(express.static(publicPath))

app.use(express.json())

const Pyroscope = require('@pyroscope/nodejs');

Pyroscope.init({
    serverAddress: 'http://172.18.0.111:4040',
    appName: 'task-manager-api'
  });
  

app.use(Pyroscope.expressMiddleware())

// app.get('/debug/pprof/heap', (req, res) => {
//     const profile = pprof.heap.profile()
//     pprof.encode(profile)
//         .then((buf) => res.send(buf))
//         .catch((err) => res.send(err))
// });
// app.get('/debug/pprof/profile', async (req, res) => {
//     try {
//         const profile = await pprof.time.profile({
//             durationMillis: 1000,    // time in milliseconds for which to
//             // collect profile.
//         });
//         pprof.encode(profile)
//             .then((buf) => res.send(buf))
//             .catch((err) => res.send(err))
//     } catch (e) {
//         res.send('error profiling: ' + e)
//     }
// });


app.use(userRouter)
app.use(taskRouter)

module.exports=app
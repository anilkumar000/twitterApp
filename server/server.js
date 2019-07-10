
const express = require('express');
const Twitter = require('twit');
const app = express();
const logger = require('morgan');



const client = new Twitter({
  consumer_key: 'FcEOUOP33JLeYtOtcsRVjrmzT',
  consumer_secret: 'DOq64ZTq8YLoxLhpNIQ25tPXJAUgRDHvTiKAsag1zp6o4uydXF',
  access_token: '820301311161733120-iVdj0cefu4bS7fx9bk8lakdJVebojkE',
  access_token_secret: 'zElWEeK802CiYryXkBKf7RvoiWGGPV5GQfwYv5g6HKI3U'
});

app.use(logger('dev'))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/home_timeline', (req, res) => {
  console.log("??");
  res.send("???????")
  // client
  //   .get(`statuses/home_timeline`, params)
  //   .then(timeline => {
    //      console.log(timeline)
    //     res.send(timeline);
    //   })
    //   .catch(error => {
      //     console.log(error)
      //   res.send(error);
      // });
      
    });
    
    app.get('/tweets', (req, res) => {
      // console.log(req)
      const params = { tweet_mode: 'extended', count: 10 };
      client
      .get(`statuses/home_timeline`, params)
    .then(timeline => {
       console.log(timeline)
      res.send(timeline);
      res.send("This should get returned ??")
    })
    .catch(error => {
      console.log(error)
    res.send(error);
  });
})
 
app.listen(3000, () => console.log('Server running'))
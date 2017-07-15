const Twitter = require('node-tweet-stream')
const config = require('./config.js');

t = new Twitter({config})

t.on('tweet', function (tweet) {
  console.log('tweet received', tweet)
})

t.on('error', function (err) {
  console.log('Oh no')
})

t.track('nodejs')
// t.track('pizza')

// // 5 minutes later
// t.track('tacos')

// // 10 minutes later
// t.untrack('pizza')
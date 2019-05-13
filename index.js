var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var d = new Date();
fs.appendFile("out/vc_restaurants.txt", '\n\n' + d.getMinutes() + ':' + d.getHours() + ' ' + d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() +'\n', (err) => {
        if (err) console.log(err);
        console.log("Date written to file.");
      });

request('https://www.vouchercodes.co.uk/bellaitalia.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
})
.pipe(fs.createWriteStream('out/vctest.txt'));

request('https://www.vouchercodes.co.uk/pizzaexpress.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/jamieoliver.com-italian', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/lochfyne.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/askrestaurants.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/byronhamburgers.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/zizzi.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/prezzoplc.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/wagamama.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/frankieandbennys.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/caferouge.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});
request('https://www.vouchercodes.co.uk/bills-website.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/millerandcarter.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/pizzahut', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/dominos.uk.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});


request('https://www.vouchercodes.co.uk/harvester.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});

request('https://www.vouchercodes.co.uk/chiquito.co.uk', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.merch-offers article .offer__title').each(function(i, element){
      var a = $(this);
      fs.appendFile("out/vc_restaurants.txt", a.text().trim() + '\n', (err) => {
        if (err) console.log(err);
        console.log("Successfully written to file.");
      });
    });
  }
});
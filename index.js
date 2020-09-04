// Set package requirements
const fs = require('fs');
const request = require('request');
const  cheerio = require('cheerio');

// Set variables
const d= new Date();
const mth = parseFloat(d.getMonth()) + 1;
const brands = require('./brands.json');


// request('https://www.vouchercodes.co.uk/bellaitalia.co.uk', function (error, response, html) {
//   console.log('error', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', html);
// });

// Run requests
for (let i=0; i < brands.restaurants.length; i++) {
  request('https://www.vouchercodes.co.uk/' + brands.restaurants[i], function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var brand = $("meta[property='og:title']").attr('content');
      $('.merch-offers article .offer__title').each(function(i, element){
        var a = $(this);
        fs.appendFile("out/vc_rest.csv", '"' + brand + '","' + ('0'+d.getHours()).slice(-2) + ':' + ('0'+d.getMinutes()).slice(-2) + ' ' + d.getDate() + '/' + ('0'+mth).slice(-2) + '/' + d.getFullYear() +'","' + a.text().trim() + '"\n"', (err) => {
          if (err) console.log(err);
        });
      });
    }
  console.log("Successfully written resto brand " + brands.restaurants[i] + " to file.");
  })
};

for (let i=0; i < brands.womens_fashion.length; i++) {
  request('https://www.vouchercodes.co.uk/' + brands.womens_fashion[i], function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var brand = $("meta[property='og:title']").attr('content');
      $('.merch-offers article .offer__title').each(function(i, element){
        var a = $(this);
        fs.appendFile("out/vc_women.csv", '"' + brand + '","' + ('0'+d.getHours()).slice(-2) + ':' + ('0'+d.getMinutes()).slice(-2) + ' ' + d.getDate() + '/' + ('0'+mth).slice(-2) + '/' + d.getFullYear() +'","' + a.text().trim() + '"\n', (err) => {
          if (err) console.log(err);
        });
      });
    }
  console.log("Successfully written WF brand " + brands.womens_fashion[i] + " to file.");
  })
};

for (let i=0; i < brands.mens_fashion.length; i++) {
  request('https://www.vouchercodes.co.uk/' + brands.mens_fashion[i], function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var brand = $("meta[property='og:title']").attr('content');
      $('.merch-offers article .offer__title').each(function(i, element){
        var a = $(this);
        fs.appendFile("out/vc_men.csv", '"' + brand + '","' + ('0'+d.getHours()).slice(-2) + ':' + ('0'+d.getMinutes()).slice(-2) + ' ' + d.getDate() + '/' + ('0'+mth).slice(-2) + '/' + d.getFullYear() +'","' + a.text().trim() + '"\n', (err) => {
          if (err) console.log(err);
        });
      });
    }
  console.log("Successfully written MF brand " + brands.mens_fashion[i] + " to file.");
  })
};

for (let i=0; i < brands.sportswear.length; i++) {
  request('https://www.vouchercodes.co.uk/' + brands.sportswear[i], function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var brand = $("meta[property='og:title']").attr('content');
      $('.merch-offers article .offer__title').each(function(i, element){
        var a = $(this);
        fs.appendFile("out/vc_sportswear.csv", '"' + brand + '","' + ('0'+d.getHours()).slice(-2) + ':' + ('0'+d.getMinutes()).slice(-2) + ' ' + d.getDate() + '/' + ('0'+mth).slice(-2) + '/' + d.getFullYear() +'","' + a.text().trim() + '"\n', (err) => {
          if (err) console.log(err);
        });
      });
    }
  console.log("Successfully written sports brand " + brands.sportswear[i] + " to file.");
  })
};

console.log('All done.');

var request = require('request');
var cheerio = require('cheerio');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введи url сайта\n", function(url) {
    request('https://'+url, function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }
        var $ = cheerio.load(body);
        var title = $("title").text();
        console.log(title);
    });
});
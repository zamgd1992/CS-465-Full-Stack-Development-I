const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    console.log('Inside app_server, controllers, travel.js index function.');
    pageTitle = process.env.npm_package_description + ' - Travel'
    res.render('travel', { title: pageTitle, trips })
};
module.exports = {
    travel
};
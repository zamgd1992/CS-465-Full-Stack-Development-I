const travel = (req, res) => {
    console.log('Inside app_server, controllers, travel.js index function.');
    res.render('travel', { title: 'Travlr Getaways' })
};
module.exports = {
    travel
};
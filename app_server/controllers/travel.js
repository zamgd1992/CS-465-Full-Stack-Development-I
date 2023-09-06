const travel = (req, res) => {
    console.log('Inside app_server, controllers, travel.js index function.');
    pageTitle = process.env.npm_package_description + ' - Travel'
    res.render('travel', { title: pageTitle })
};
module.exports = {
    travel
};
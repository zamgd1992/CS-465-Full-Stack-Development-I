const meals = (req, res) => {
    console.log('Inside app_server, controllers, meals.js index function.');
    pageTitle = process.env.npm_package_description + ' - Meals'
    res.render('meals', { title: pageTitle })
};
module.exports = {
    meals
};
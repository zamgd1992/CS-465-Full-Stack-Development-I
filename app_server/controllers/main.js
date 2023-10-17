/* GET homepage */
const index = (req, res) => {
    console.log('Inside app_server, controllers, main.js index function.');
    pageTitle = process.env.npm_package_description
    res.render('index', { title: pageTitle })
};
module.exports = {
    index
};
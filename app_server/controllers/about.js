const about = (req, res) => {
    console.log('Inside app_server, controllers, about.js index function.');
    pageTitle = process.env.npm_package_description + ' - About'
    res.render('about', { title: pageTitle })
};
module.exports = {
    about
};
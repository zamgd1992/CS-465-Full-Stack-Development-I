const contact = (req, res) => {
    console.log('Inside app_server, controllers, contact.js index function.');
    pageTitle = process.env.npm_package_description + ' - Contact'
    res.render('contact', { title: pageTitle })
};
module.exports = {
    contact
};
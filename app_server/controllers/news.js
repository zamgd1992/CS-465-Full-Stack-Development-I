const news = (req, res) => {
    console.log('Inside app_server, controllers, news.js index function.');
    pageTitle = process.env.npm_package_description + ' - News'
    res.render('news', { title: pageTitle })
};
module.exports = {
    news
};
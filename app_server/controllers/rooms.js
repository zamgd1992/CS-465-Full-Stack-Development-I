const rooms = (req, res) => {
    console.log('Inside app_server, controllers, rooms.js index function.');
    pageTitle = process.env.npm_package_description + ' - Rooms'
    res.render('rooms', { title: pageTitle })
};
module.exports = {
    rooms
};
/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'dhruvan' });
};
module.exports = {
    index
};
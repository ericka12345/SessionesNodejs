const { Router } = require('express');
const router = Router();

router.get('/' , (req, res) => {
    res.render('index.ejs');
}) 

router.post('/register', (req, res) => {
console.log(req.body)
//req.flash('user', req.body);
req.flash('mensaje', 'Ahora esta registrado');
res.redirect('/products');

});

router.get('/profile', (req, res) => {
    //console.log(message);
res.render('profile');
});

router.get('/products', (req, res) => {
    res.render('products');

});

module.exports = router;
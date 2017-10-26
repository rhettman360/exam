let path = require('path');
let Users = require('../controllers/users');
let Polls = require('../controllers/polls');


module.exports = function(app){
    app.get('/polls', Polls.index)
    app.post('/polls', Polls.create)
    app.post('/users', Users.create);
    app.get('/users', Users.index);
    app.get('/polls/:id', Polls.show);
    // app.patch('/polls/:id', Polls.update);

    app.delete('/polls/:id', Polls.delete);



    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}

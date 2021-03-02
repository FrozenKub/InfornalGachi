const jwt = require('jsonwebtoken');
const router = require('express').Router()

    router.post('/user/login', (req, res, next) => {
        console.log("HI")
        const { body } = req;
        const { username } = body;
        const { password } = body;

        //checking to make sure the user entered the correct username/password combo
        if(username == "123" && password == "123") {
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign({ foo: 'bar' }, 'privatekey', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }
                res.send(token);
            });
        } else {
            console.log('ERROR: Could not log in');
        }
    })

    //This is a protected route
    router.get('/third', checkToken, (req, res) => {
        //verify the JWT token generated for the user
        console.log("HEY")
        jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });


//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

module.exports = router
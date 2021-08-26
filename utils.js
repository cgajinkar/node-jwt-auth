const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req, res, next) => {
        console.log('PRinting header');
        const authorizationHeader = req.headers.authorization;
        console.log('PRinting header');
        console.log(req.headers.authorization);
        let result;
        if(authorizationHeader){
            console.log(req.headers.authorization);
            const token = req.headers.authorization.split(' ')[1];
            const options = {
                expiresIn: '2d',
                issuer: 'https://scotch.io'
            };
            console.log(token);
            try{
                result = jwt.verify(token, process.env.JWT_SECRET, options);

                req.decoded= result;
                next();
            }catch (err){
                throw new Error(err);
            }
        }else{
            result = {
                error: 'Authentication Error. Token required',
                status: 401
            };
            res.status(401).send(result);
        }
    }
};
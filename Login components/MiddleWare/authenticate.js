const jwt = require('jsonwebtoken')
const authenticate = (req,res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'Hashed3.1423')

        req.user = decode
        next()
    } catch(error) {
        if(error.name == "TokenExpiredError") {
            res.status(301).json({
                message:"Expired Token"
            })
        }else {
        res.json({
            message: 'Authentication has failed'
        })
    }
    }
}
module.exports = authenticate
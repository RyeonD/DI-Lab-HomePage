import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    // read the token from header or url 
    console.log('jwt::',req.cookies.jwt)
    let token = req.cookies.jwt
    // token does not exist
    if(!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        })
    }
    // create a promise that decodes the token
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, 'dilab', (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    // if it has failed to verify, it will return an error message
    const onError = (error) => {
        if(error.message === 'jwt expired'){
            let user = jwt.decode(token);
            jwt.sign(
                {
                    id:        user.user_id,
                    name:      user.name,
                    authority: user.authority,
                },
                'dilab',
                (err, jwtoken) => {
                    if(err) {
                        res.status(403).json({
                            success: false,
                            message: err
                        })
                    }
                    token = jwtoken
                    res.cookie('jwt', jwtoken, { 
                        httpOnly: true, 
                        secure  : process.env.NODE_ENV ==='production'
                    })
                    req.decoded = user
                    next()
                }
            )
        }else{
            res.status(403).json({
                success: false,
                message: error.message
            })
        }
    }

    // process the promise
    p.then((decoded)=>{
        req.decoded = decoded
        next()
    }).catch(onError)
}
module.exports = authMiddleware
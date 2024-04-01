const jwt = require("jsonwebtoken");
const fs = require("fs");
const userModel = require("../model/concrete/userModel.js");
const publicKey = fs.readFileSync('./certs/public.pem');
const ErrorMessages = require("../constants/ErrorMessages.js");

const errorMessagesFunctions = new ErrorMessages();

const requireAuth = async function (req, res, next) {
    try {
        const token = req.cookies.jwt;
        if (token) {
            jwt.verify(token,publicKey, (error, decodedToken) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(decodedToken);
                    next();
                }
            });
        } else {
            console.log(ErrorMessages.loginFist);
        }
    } catch (error) {
        errorMessagesFunctions.catchErrorConsole(error);
        return errorMessagesFunctions.catchErrorResponse(res);
    }
}

export const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, publicKey, async (err, decodedToken) => {
            if (error) {
                console.log(error.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await userModel.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, checkUser };
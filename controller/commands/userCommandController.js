const userModel = require("../../model/concrete/userModel.js");
const ErrorMessagesFunctions = require("../../constants/ErrorMessagesFunctions.js");

const errorMessagesFunctions = new ErrorMessagesFunctions();

const createUser = async function (req, res) {
    try {
        
    } catch (error) {
        errorMessagesFunctions.catchErrorConsole(error);
        return errorMessagesFunctions.catchErrorResponse(res);
    }
}
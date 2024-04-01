class ErrorMessages {
    catchErrorConsole(error) {
        console.error("Caught an error", error);
    }
    
    catchErrorResponse(res) {
        res.status(500).json({ error: ErrorMessages.catchErrorResponse });
    }

    static loginFist = "Session not found please login up first.";
}

module.exports = ErrorMessages;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    userFilesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userFileModel"
    },
    firstName: {
        type: String,
        required: [true, "You must be fill in this field."]
    },
    lastName: {
        type: String,
        required: [true, "You must be fill in this field."]
    },
    password: {
        type: String,
        required: [true, "Ypu must be fill in this field."],
        minlength: [6, "Min password length 6 characters."]
    },
    userContactId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userContactModel"
    }
},{timestamps: true});

//fire a function before doc saved to db
userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("Incorrect email or passord.");
    }
    throw Error("Incorrect email or password");
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
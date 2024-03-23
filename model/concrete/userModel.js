const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const projectBaseSchema = require("../projectBaseSchema.js");
const Messages = require("../constant/messages.js");

const userSchema = new mongoose.Schema({
    userFilesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userFiles"
    },
    firstName: {
        type: String,
        required: [true, Messages.mustBeFill]
    },
    lastName: {
        type: String,
        required: [true, Messages.mustBeFill]
    },
    password: {
        type: String,
        required: [true, Messages.mustBeFill],
        minlength: [6, "Min password length 6 characters."]
    },
    userContactId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userContacts"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    ...projectBaseSchema.obj
});

//fire a function before doc saved to db
userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//static method to login user
userSchema.statics.login = async function(email, password) {
    const userContact = await mongoose.model('userContacts').findOne({email});

    if (userContact) {
        const user = await this.findOne({ userContactId: userContact._id });

        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                return user;
            }
            throw Error(Messages.inorrectEmailOrPassword);
        }
        throw Error(Messages.inorrectEmailOrPassword);
    }
};

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// before user is saved, wait for password to hash then save the hashed password
userSchema.pre('save', async function(next) {
    try {
        if(!this.isModified('password')) {
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});

// compare hashed password to user password
userSchema.methods.comparePassword = async function(candidatePassword, next) {
    try {
        let match = await bcrypt.compare(candidatePassword, this.password);
        return match;
    } catch (err) {
        return next(err);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
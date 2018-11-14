const mongoose = require('mongoose');
const User = require('./user');

const reviewSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
        minlength: 6
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

reviewSchema.pre('remove', async function(next){
    try {
        let user = await User.findById(this.user);
        user.reviews.remove(this.id);
        await user.save();
        return next();
    } catch (err) {
        return next(err);
    }
})
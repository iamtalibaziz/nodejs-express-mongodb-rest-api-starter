const User = require('../models/user.model');

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const findUserById = async (id) => {
    return await User.findById(id);
};

const updateUser = async (id, updates) => {
    return await User.findByIdAndUpdate(id, updates, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

const findAllUsers = async () => {
    return await User.find();
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUser,
    deleteUser,
    findAllUsers
};

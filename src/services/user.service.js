const userHelper = require('../helpers/user.helper');
const UserResponse = require('../dto/user.response');
const ApiError = require('../utils/ApiError');

const getUser = async (id) => {
    const user = await userHelper.findUserById(id);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    return new UserResponse(user);
};

const updateUser = async (id, updates) => {
    const user = await userHelper.updateUser(id, updates);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    return new UserResponse(user);
};

const deleteUser = async (id) => {
    const user = await userHelper.deleteUser(id);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    return new UserResponse(user);
};

const getAllUsers = async () => {
    const users = await userHelper.findAllUsers();
    return users.map(user => new UserResponse(user));
};

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
};

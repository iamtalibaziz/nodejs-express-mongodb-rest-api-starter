const userService = require('../services/user.service');
const sendResponse = require('../utils/apiResponse');
const ApiError = require('../utils/ApiError');

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        return sendResponse(res, 200, true, { user });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return sendResponse(res, 200, true, { user });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        return sendResponse(res, 200, true, { user });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return sendResponse(res, 200, true, { users });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
};

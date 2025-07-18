const blogService = require('../services/blog.service');
const sendResponse = require('../utils/apiResponse');
const ApiError = require('../utils/ApiError');

const createBlog = async (req, res) => {
    try {
        const blog = await blogService.createBlog({ ...req.body, author: req.user._id });
        return sendResponse(res, 201, true, { blog });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const getBlog = async (req, res) => {
    try {
        const blog = await blogService.getBlog(req.params.id);
        return sendResponse(res, 200, true, { blog });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        return sendResponse(res, 200, true, { blogs });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const updateBlog = async (req, res) => {
    try {
        const blog = await blogService.updateBlog(req.params.id, req.body);
        return sendResponse(res, 200, true, { blog });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await blogService.deleteBlog(req.params.id);
        return sendResponse(res, 200, true, { blog });
    } catch (e) {
        if (e instanceof ApiError) {
            return sendResponse(res, e.statusCode, false, null, e.messages);
        }
        return sendResponse(res, 500, false, null, 'Unable to process request');
    }
};

module.exports = {
    createBlog,
    getBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
};

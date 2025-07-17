const blogHelper = require('../helpers/blog.helper');
const BlogResponse = require('../dto/blog.response');
const ApiError = require('../utils/ApiError');

const createBlog = async (blogData) => {
    const blog = await blogHelper.createBlog(blogData);
    return new BlogResponse(blog);
};

const getBlog = async (id) => {
    const blog = await blogHelper.findBlogById(id);
    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }
    return new BlogResponse(blog);
};

const getAllBlogs = async () => {
    const blogs = await blogHelper.findAllBlogs();
    return blogs.map(blog => new BlogResponse(blog));
};

const updateBlog = async (id, updates) => {
    const blog = await blogHelper.updateBlog(id, updates);
    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }
    return new BlogResponse(blog);
};

const deleteBlog = async (id) => {
    const blog = await blogHelper.deleteBlog(id);
    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }
    return new BlogResponse(blog);
};

module.exports = {
    createBlog,
    getBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
};

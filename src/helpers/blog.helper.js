const Blog = require('../models/blog.model');

const createBlog = async (blogData) => {
    const blog = new Blog(blogData);
    await blog.save();
    return blog;
};

const findBlogById = async (id) => {
    return await Blog.findById(id);
};

const findAllBlogs = async () => {
    return await Blog.find();
};

const updateBlog = async (id, updates) => {
    return await Blog.findByIdAndUpdate(id, updates, { new: true });
};

const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id);
};

module.exports = {
    createBlog,
    findBlogById,
    findAllBlogs,
    updateBlog,
    deleteBlog
};

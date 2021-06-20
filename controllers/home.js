const Blog = require('./../models/blog');

exports.getHome = async (req, res) => {
  const blogs = await Blog.find({});
  res.render('home', { blogs });
};

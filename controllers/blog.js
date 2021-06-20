const Blog = require('./../models/blog');

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('blog', { blog });
};

exports.getCreate = (req, res) => {
  res.render('create');
};

exports.postCreate = async (req, res) => {
  const { title, content, author } = req.body;
  const blog = new Blog({
    title,
    content,
    author,
  });
  const saved = await blog.save();
  //   console.log(saved);
  res.redirect('/');
};

exports.getEditById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('edit', { blog });
};
exports.postEditById = async (req, res) => {
  const { title, content, author } = req.body;
  const blog = await Blog.findByIdAndUpdate(req.params.id, {
    $set: {
      title,
      content,
      author,
    },
  });
  //   console.log(blog);
  res.redirect('/blogs/' + req.params.id);
};

exports.deleteById = async (req, res) => {
  const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
  //   console.log(deleteBlog);
  res.redirect('/');
};

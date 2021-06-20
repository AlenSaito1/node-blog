const Blog = require('./../models/blog');

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://10.3.6.122:27017/raghav',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async () => {
    const blog = new Blog({
      title: 'Test3',
      content: 'Content3',
      author: 'test1 author3',
    });
    const saved = await blog.save();
    console.log(saved);
  }
);

const mongoose = require('mongoose');
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    sanitizedHtml: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);


blogSchema.pre('validate', function(next) {
  if (this.content) this.sanitizedHtml = dompurify.sanitize(marked(this.content))
  next()
})

module.exports = mongoose.model('Blog', blogSchema);

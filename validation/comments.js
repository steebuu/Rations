const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : '';

  // if (!Validator.isLength(data.body, { min: 5, max: 140 })) {
  //   errors.body = 'Tweet must be between 5 and 140 characters';
  // }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
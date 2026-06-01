const validate = (schema) => (req, res, next) => {
  try {
    // Parse req.body directly against the schema
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      errors: error.errors.map(err => ({
        path: err.path.join('.'),
        message: err.message
      }))
    });
  }
};

module.exports = validate;

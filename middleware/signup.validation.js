const { body } = require('express-validator');

module.exports = [
    body('fname').matches(/^[a-zA-Z ]{2,30}$/),
    body('lname').matches(/^[a-zA-Z ]{2,30}$/),
    body('uname').matches(/^[a-zA-Z ]{2,30}$/),
    body('email').isEmail(),
    body('password').matches("^(?=.*[0-9])"),
    body('cPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      }),
]
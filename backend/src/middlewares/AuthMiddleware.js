const { model } = require('mongoose');

const Dev = model('Dev');

module.exports = {
  authenticate({ headerProperty, requestProperty }) {
    return async (req, res, next) => {
      const { [headerProperty]: userId } = req.headers;
  
      if (!userId) {
        return res.status(401).json({
          error: 'Authentication credentials were not provided.'
        })
      }
      
      const user = await Dev.findById(userId);
  
      if (!user) {
        return res.status(401).json({
          error: 'User not found.'
        })
      }
  
      req[requestProperty] = user;
  
      return next();
    }
  } 
};
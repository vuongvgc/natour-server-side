const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverView = catchAsync(async (req, res) => {
  // 1 Get tour from DB
  const tours = await Tour.find();
  // 2 Build template
  // 3 Render template using date form step one

  return res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});
exports.getTour = (req, res) => {
  return res.status(200).render('tour', {
    title: 'The Forest Hiker'
  });
};

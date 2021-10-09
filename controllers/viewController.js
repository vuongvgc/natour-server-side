const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverView = catchAsync(async (req, res) => {
  // 1 Get tour from DB
  const tours = await Tour.find();
  // 2 Build template
  // 3 Render template using data form step one

  return res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});
exports.getTour = catchAsync(async (req, res) => {
  // 1 Find tour detail, review, guide
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });
  // 2 Build template
  console.log(tour);
  // 3 Reder template using data from step one
  return res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour
  });
});

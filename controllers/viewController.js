exports.getOverView = (req, res) => {
  return res.status(200).render('overview', {
    title: 'All Tours'
  });
};
exports.getTour = (req, res) => {
  return res.status(200).render('tour', {
    title: 'The Forest Hiker'
  });
};

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/equality-opt-in', function (req, res) {

  let equalityInformation = req.session.data['equality-information']

  if (equalityInformation == 'opt-in') {
    res.redirect('/ethnic-group')
  } else {
    res.redirect('/summary')
  }

})

router.post('/ethnic-group-choice', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('/licence-type')
  } else if (ethnicGroup == "White") {
    res.redirect('/ethnic-group/white')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/ethnic-group/mixed')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/ethnic-group/asian')
  } else if (ethnicGroup == "Black or Black British") {
    res.redirect('/ethnic-group/black')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/ethnic-group/other')
  } else {
    res.redirect('/ethnic-group/' + ethnicGroup)
  }

})

module.exports = router

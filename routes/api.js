const express = require("express")
const router = express.Router()
const user = require('./Users')
const property = require('./Property')
const blog = require('./Blogs')
const enquery = require('./Enquery')
const client = require('./Client')
const Enq_Form = require('./Enquiry_form')
const favourite = require('./favourites')
router.use('/user', user)
router.use('/property', property)
router.use('/blog', blog)
router.use('/enquery', enquery)
router.use('/client', client)
router.use('/order', Enq_Form)
router.use('/favourite',favourite)


module.exports = router
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const { requiresAuth } = require('express-openid-connect')
const router = express.Router()

router.get('/locked', requiresAuth, (req, res) => {
    res.send('Oh no! Route is not locked')
})

router.get('/unlocked', (req, res) => {
    res.send('Success! Route is not locked')
})

router.get('/login', (req, res) => res.oidc.login({ returnTo: '/profile' }))

module.exports = router

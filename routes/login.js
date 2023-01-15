const express = require('express');
const router = express.Router();

router.use('views/pages/login', async (req,res) => {
    try {
        res.status(200).render("/login")
    } catch (error) {
        res.status(500).render("/error", {error: "Página não encontrada"})
    }
})

module.exports = router;
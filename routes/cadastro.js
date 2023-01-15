const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        res.status(200).render("/cadastro")
    } catch (error) {
        res.status(500).render("/error", {error: "Página não encontrada"})
    }
})

module.exports = router;
const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /yesno - yes/no APIを呼び出し
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://yesno.wtf/api');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'API call failed' });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const feedback = new Feedback({ name, email, message });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
});

router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ timestamp: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch feedbacks' });
    }
});

module.exports = router;
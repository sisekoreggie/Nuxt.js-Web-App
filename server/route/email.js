const express = require('express');
const sgMail = require('@sendgrid/mail');
const router = express.Router();
sgMail.setApiKey('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');

router.post("/email", (req, res) => {
    const { to, from, subject, bodyHtml } = req.body;
    const msg = {
        to: to,
        from: from,
        subject: subject,
        html: bodyHtml,
    };

    sgMail.send(msg)
        .then(() => {
            res.send("Success!");
        })
        .catch((err) => {
            res.status(500).send("An error occured");
        });
});

module.exports = router;
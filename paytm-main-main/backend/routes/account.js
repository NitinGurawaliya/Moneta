// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();


router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});
router.post("/transfer",authMiddleware , async (req, res) => {
    const session = await Account.startSession();

    await session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userId
    }).session(session);
    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        console.log("Insufficient Balance");
        return;
    }
    if (!toAccount) {
        await session.abortTransaction();
        console.log("Invalid Account");
        return;
    }

    await Account.updateOne({
        userId: req.userId,
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session);

    await Account.updateOne({
        userId: to,
    }, {
        $inc: {
            balance: amount
        }
    }).session(session);

    await session.commitTransaction();
    await session.endSession();

    res.json({ msg: "Transaction was successful" });
});

module.exports = router;
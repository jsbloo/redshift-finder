const express = require("express");
const friendRoutes = express.Router();
const FriendsSchema = require("../db/schemas/friendsSchema");

//middleware
const getFriendsByPersonId = async (req, res, next) => {
    let friends;
    try {
        friends = await FriendsSchema.find({
            personId: req.params.id
        }).limit(20);

        if (!friends[0]) {
            return res.status(404).json({
                message: "Cannot find friends"
            });
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }

    res.friends = friends;
    next();
}

//getById
friendRoutes.get('/getById/:id', getFriendsByPersonId, (req, res) => {
    res.send(res.friends);
});

module.exports = {
    friendRoutes
};
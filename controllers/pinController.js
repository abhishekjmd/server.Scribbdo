// const Pin = require("../models/archieve");
const Pin = require("../models/pin");

exports.createPin = async (req, res) => {
    try {
        const createPin = await new Pin({
            Pin: []
        });

        await createPin.save();
        res.send(createPin);
        console.log(createPin);
        return;
    } catch (error) {
        res.send(error);
        console.log(error)
    }
}


exports.addToPin = async (req, res) => {
    try {
        const id = req.params.id;
        const addToPin = await Pin.findOneAndUpdate({ id }, { $push: req.body }, { new: true }).populate('Pin');
        res.send(addToPin);
        console.log(addToPin);
        return;
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}


exports.removeFromPin = async (req, res) => {
    try {
        const removeFromPin = await Pin.findOneAndUpdate({ _id: req.params.id }, { $pull: { Pin: { _id: req.params.id} } }, { new: true })
        console.log(removeFromPin)
        res.send(removeFromPin);
        return;
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.getPin = async (req, res) => {
    try {
        const getPin = await Pin.find().populate('Pin');
        res.send(getPin);
        console.log(getPin);
        return;
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}


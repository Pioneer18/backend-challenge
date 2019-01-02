//retrieve and list all the physicians from the db

const list = ({ Physicians }) => async (req, res, next) => {
    try {
        await Physicians.find({});
        return res.json(Physicians);

    } catch (error) {

        next(error);
    }
};

module.exports = { list };
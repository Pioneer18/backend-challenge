//fetch a specific physician(s) by name

const get = ({ Physicians }) => async (req, res, next) => {
    try {
        res.send("fetching a physician(s) by name");
    } catch (error) {
        next(error);
    }
};

module.exports = { get };
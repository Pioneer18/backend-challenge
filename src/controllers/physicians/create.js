//add a new physician to the db
const create = ({ Physicians }) => async (req, res, next) => {
    try {
        res.send("add a new physician to the db");
    } catch (error) {
        next(error);
    }
};

module.exports = { create };
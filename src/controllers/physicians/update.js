//update the info on a specific physician(s)
const update = ({ Physicians }) => async (req, res, next) => {
    try {
        res.send("updating a physician(s) info in the db");
    } catch (error) {
        next(error);
    }
};

module.exports = { update };
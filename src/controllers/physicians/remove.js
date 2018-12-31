//delete a specific physician(s) from the db
const remove = ({ Physicians }) => async (req, res, next) => {
    try {
        res.send("deleting a physician from the db");
    } catch (error) {
        next(error);
    }
};

module.exports = { remove };
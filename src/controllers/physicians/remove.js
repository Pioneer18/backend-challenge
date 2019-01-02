//delete a specific physician(s) from the db
const remove = ({ Physicians }) => async (req, res, next) => {
    try {

        let deleted = await Physicians.findOneAndRemove({ _id: req.params._id });
        return res.send(deleted)

    } catch (error) {

        next(error);
    }
};

module.exports = { remove };
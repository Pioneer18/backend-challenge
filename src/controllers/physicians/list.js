//retrieve and list all the physicians from the db

const list = ({ Physicians }) => async (req, res, next) => {
    try {
        let listed = await Physicians.find({firstName: req.body.firstName});
        return res.send(listed);

    } catch (error) {

        next(error);
    }
};

module.exports = { list };
//list all the physicians in the db
//the actual route will accept the Physicians model and config as parameters and then
//perform an query of the db for all physicians


const list = ({ Physicians }) => async (req, res, next) => {
    try {
        res.send(200).send("this is a controller function");
    } catch (error) {
        next(error);
    }
};

module.exports = { list };
//retrieve and list all the physicians from the db

const list = ({ Physicians }) => async (req, res, next) => {
    try {
        const allPhysicians = Physicians.find();
        return allPhysicians;

    } catch (error) {
        
        next(error);
    }
};

module.exports = { list };
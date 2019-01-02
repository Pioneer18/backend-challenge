//fetch a specific physician(s) by _id e.g. user clicks on a listed physician to view the document

const get = ({ Physicians }) => async (req, res, next) => {
    try {
        let physician = await Physicians.findOne(req.params.physiciansId);
        return res.send(physician);
    } catch (error) {
        next(error);
    }
};

module.exports = { get };
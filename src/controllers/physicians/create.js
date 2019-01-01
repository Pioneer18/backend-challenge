//add a new physician to the db
const create = ({ Physicians }) => async (req, res, next) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Please enter all physician data"
        });
    }

    
};

module.exports = { create };
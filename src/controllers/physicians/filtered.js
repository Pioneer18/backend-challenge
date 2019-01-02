//retrieve and list all the physicians from the db matching the users inputed filter requirements

const filtered = ({ Physicians }) => async (req, res, next) => {
    try {
        let filter = await Physicians.find({ 
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
        return res.send(filter);

    } catch (error) {

        next(error);
    }
};

module.exports = { filtered };
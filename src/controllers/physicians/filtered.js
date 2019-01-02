//retrieve and list all the physicians from the db matching the users inputed filter requirements

const filtered = ({ Physicians }) => async (req, res, next) => {
    try {
        let filter = await Physicians.aggregate([
            { "$match": { "firstName": req.body.firstName}}
        ]);
        return res.send(filter);

    } catch (error) {

        next(error);
    }
};

module.exports = { filtered };
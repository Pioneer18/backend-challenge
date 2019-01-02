//retrieve and list all the physicians from the db
/*
const list = ({ Physicians }) => async (req, res, next) => {
    try {
        await Physicians.find({});
        return res.json(Physicians);

    } catch (error) {

        next(error);
    }
};
*/
const list = ({ Physicians }) => (req, res, next) => {
    Physicians.find()
     .then( physicians => {
         res.send(physicians);
     })
     .catch(err => {
         res.send({
             message: err.message || "error error error"
         })
     })
}

module.exports = { list };
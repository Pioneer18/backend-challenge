//add a new physician to the db
const create = ({ Physicians }) => async (req, res, next) => {
    //validate the request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Please enter all physician data"
        });
    }

    //make a new instance of the Physicians model
    const physician = new Physicians({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        specialty: req.body.specialty,
        contractStatus: req.body.contractStatus,
        term: req.body.term,
        state: req.body.state,
        facility: req.body.facility
    });

    //save the Physician into the db now
    try {
        await physician.save();
        return res.send('Added a new Physician to the DB');

    } catch (err) {
        next(err)
    }


};

module.exports = { create };
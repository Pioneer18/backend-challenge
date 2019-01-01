//add a new physician to the db
const create = ({ Physicians }) => async (req, res, next) => {
    //validate the request
    if (!req.body) {
        return res.status(400).send({
            message: "Please enter all physician data"
        });
    }

    //make a new instance of the Physicians model
    const physician = new Physicians({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        specialty: [{specialty: req.body.specialty}],
        contractStatus: {
            employeed: req.body.contractStatus
        },
        term: {
            years: req.body.termYears,
            months: req.body.termMonths,
            start: req.body.termStart,
            end: req.body.termEnd
        },
        state: req.body.state,
        facility: [{
            name: req.body.facilityName,
            address: { street: req.body.facilityStreet, city: req.body.facilityCity, suite: req.body.facilitySuite },
            county: req.body.facilityCity
        }]
    });

    //save the Physician into the db now
    try {
        await physician.save();
        return res.send(physician);

    } catch (err) {
        next(err)
    }


};

module.exports = { create };
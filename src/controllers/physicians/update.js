//update the info on a specific physician(s)

const update = ({ Physicians }) => async (req, res, next) => {
    //validate the request
    if (!req.body) {
        return res.status(400).send({
            message: "Please select a physician"
        });
    }

    try {
        //find the physician document and update it with the req.body
        //use req.params.physicianId to select the correct physician document
        let newPhysician = await Physicians.findOneAndUpdate(req.params.physiciansId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            specialty: [{ specialty: req.body.specialty }],
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
        }, {new: true}); //true to return the modified document rather than the original. defaults to false

        //return the updated physician document
        return res.send(newPhysician);

    } catch (error) {

        next(error);
    }
};

module.exports = { update };
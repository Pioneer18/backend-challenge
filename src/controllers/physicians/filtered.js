//retrieve and list all the physicians from the db matching the users inputed filter requirements

const filtered = ({ Physicians }) => async (req, res, next) => {
    
    //ensure that there is data being passed into the db
    if (!req.body) {
        return res.status(400).send({
            message: "Please select a physician"
        });
    }

    try {
        let filter = await Physicians.find({
            $or: [
                { firstName: req.body.firstName },
                { lastName: req.body.lastName },
                { "specialty.specialty": req.body.specialty },
                { "contractStatus.employeed": req.body.contractStatus },
                { "term.years": req.body.termYears },
                { "term.months": req.body.termMonths },
                { "term.start": req.body.termStart },
                { "term.end": req.body.termEnd },
                { state: req.body.state },
                { "facility.name": req.body.facilityName },
                { "facility.address.street": req.body.facilityStreet },
                { "facility.address.city": req.body.facilityCity },
                { "facility.address.suite": req.body.facilitySuite },
                { "facility.county": req.body.facilityCounty }
            ]
        }, null, { limit: 50 })
        return res.send(filter);

    } catch (error) {

        next(error);
    }
};

module.exports = { filtered };
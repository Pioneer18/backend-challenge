//find physicians by not-strict filter and return selected path values
//e.g. find all physicians in Tampa General or specialty x-rays or term.years > 3 years, and select by name
// returns: all physicians with one or more of the listed conditions will have their name returned

const custom = ({ Physicians }) => async (req, res, next) => {
    try {
        let matches = await Physicians.find({
            //find all documents with one or more of the listed conditions
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
        }).
        select({
            //use the request parameters to grab from a second form or dropdown the paths the 
            //user would like to return from their search
            
                 firstName: 1,
                 lastName: 1
                /*{ "specialty.specialty": req.params.specialty },
                { "contractStatus.employeed": req.params.contractStatus },
                { "term.years": req.params.termYears },
                { "term.months": req.params.termMonths },
                { "term.start": req.params.termStart },
                { "term.end": req.params.termEnd },
                { state: req.params.state },
                { "facility.name": req.params.facilityName },
                { "facility.address.street": req.params.facilityStreet },
                { "facility.address.city": req.params.facilityCity },
                { "facility.address.suite": req.params.facilitySuite },
                { "facility.county": req.params.facilityCounty }
            ]*/
        })
        return res.send(matches);

    } catch (error) {

        next(error);
    }
};

module.exports = { custom };
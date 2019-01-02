//retrieve and list all the physicians from the db matching the users inputed filter requirements

const facilityByCounty = ({ Physicians }) => async (req, res, next) => {

    //ensure the user has entered a county to query
    if (!req.body) {
        return res.status(400).send({
            message: "Please select a physician"
        });
    }

    try {
        let facilities = await Physicians.find({ "facility.county": req.body.facilityCounty }).
            select('facility.name')
        return res.send(facilities);

    } catch (error) {

        next(error);
    }
};

module.exports = { facilityByCounty };
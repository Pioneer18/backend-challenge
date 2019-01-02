//update the info on a specific physician(s)

const update = ({ Physicians }) => async (req, res, next) => {
    //validate the request
    if(!req.body) {
        return res.status(400).send({
            message: "Please select a physician"
        });
    }    
    
    try {



    } catch (error) {
        next(error);
    }
};

module.exports = { update };
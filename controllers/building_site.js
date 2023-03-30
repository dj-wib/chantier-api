//Read functionality
const getBuildingSites = (req, res) => {

    BuildingSite.find()
    .then((buildingsites) => {
        res.json(buildingsites);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });

};

const BuildingSite = require("../Model/modelBuildingSite");

const createBuildingSite = (req, res) => {
    const buildingSite = new BuildingSite({

        name: req.body.name,
        description: req.body.description,
        adress: {
            number: req.body.adress.number,
            street: req.body.adress.street,
            zip_code: req.body.adress.zip_code,
            town: req.body.adress.town
        },
        completed: req.body.completed

    });

    buildingSite.save()
    .then((buildingSite) => {
        res.json(buildingSite);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};


const updateBuildingSite = (req, res) => {
    BuildingSite.findOneAndUpdate(
        { _id: req.params.buildingsiteID },
        {
            $set: {
                name: req.body.name,
                description: req.body.description,
                adress: {
                    number: req.body.adress.number,
                    street: req.body.adress.street,
                    zip_code: req.body.adress.zip_code,
                    town: req.body.adress.town
                },
                completed: req.body.completed
            },
        },
        { new: true })
    .then((buildingSite) => {
        res.json(buildingSite);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });

};

// create a new function
const deleteBuildingSite = (req, res) => {
    BuildingSite.deleteOne({ _id: req.params.buildingsiteID })
        .then(() => res.json({ message: "Building Site Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getBuildingSites,
    createBuildingSite,
    updateBuildingSite,
    deleteBuildingSite,

};
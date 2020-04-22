const express = require("express");
const router = express.Router();

//get a list of ningas from the database
router.get('/ningas', function (req,res) {
    res.send({type:"GET"})
})


//add a new ninga to the database
router.post("/ningas", function(req, res) {
	res.send({ type: "POST" });
});

//edit an existing client
router.put("/ningas/:id", function(req, res) {
	res.send({ type: "PUT" });
});

//delete a ninga from the db
router.delete("/ningas/:id", function(req, res) {
	res.send({ type: "DELETE" });
});

module.exports = router;
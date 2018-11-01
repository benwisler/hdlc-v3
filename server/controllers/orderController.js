const db = require("../database/models");
module.exports = {
    submitOrder: function (req, res) {
        console.log(req.body)
        db.WorkOrder.create({
            "username": req.body.username,
            "password": req.body.password,
            "location": req.body.location,
            "priority": req.body.priority,
            "address": req.body.address,
            "city": req.body.city,
            "zipCode": req.body.zipCode,
            "aptNumber": req.body.aptNumber,
            "typeSelect": req.body.typeSelect,
            "typeDescription": req.body.typeDescription
        }).then(function (doc) {
                res.send(doc);
            })
            .catch(function (err) {
                res.send(err)
            })
        
    
},
getOrders: function (req, res) {
    db.WorkOrder.find({}).then(function(orders) {
        res.send(orders)
    })
    .catch(function(err){
        res.send(err)
    })
}
} 
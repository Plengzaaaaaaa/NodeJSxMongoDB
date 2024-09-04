// Import Model
const Orders =require("../models/orders");


// Function add and export
exports.addOrders =async(req,res) =>{
    try{
        const{customer_name ,product ,quantity ,order_date ,status } = req.body;
        const orders = new product({customer_name ,product ,quantity ,order_date ,status});
        const newOrder = await orders.save();
        res.status(201).json(newOrder);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};


// Function update and export
exports.updateOrdersOne = async (req, res) => {
    try {
        const {customer_name} = req.query; 
        const orders = await Orders.findOne({customer_name });

        if (!orders) {
            return res.status(404).json({ message: 'Orders not found' });
        }

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Function delete and export
exports.deleteOrders =async(req,res) =>{
    try{
        const{customer_name}= req.params;
        const orders = await Orders.find(customer_name);
        if(!orders)return res.status(404).json({message:'orders not found'});
        await Orders.find(customer_name)();
        res.json({message:'Orders delete'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

// Function get all data and export
exports.getOrdersAll = async(req, res) => {
    try{
        const orders = await Orders.find();
        res.json(orders);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

// Function get data by genre and export
exports.getorders = async (req, res) => {
    try {
        const { product } = req.query; 
        const orders = await Student.findOne({ product });

        if (!orders) {
            return res.status(404).json({ message: 'product not found' });
        }

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};

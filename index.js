exports.helloworld = function helloworld(req,res){
	//example input: {"Hi"}
    if (req.body.message ===undefined){
    	res.status(400).send('Hello World');
     } else {
     	console.log(req.body.message);
     	res.status(200).send('Success:' + req.body.message);

     }
    
};
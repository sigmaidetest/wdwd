exports.handler = function(event, context, callback) {
    
    console.log("yeew");
    callback(null, {"message": "Hello executed"});
}
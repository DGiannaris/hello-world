var id="1"
var http=require('http');

//function to use from api data
function printMessage(id,name)
{
var message ="the user with id " +id + " has name: " +name;
console.log(message);

}

 
 //make the GET request
 var request=http.get("http://www.mocky.io/v2/58a03f0412000056227898e8/"+id+".json"
 ,function(response)
 {
	 
	console.log(response.statusCode);//the status of the api server //200 is good xD
	var body = ""; 
	response.on("data",function(chunk){ //gemizei the fckin body var with the fckin chunks from the fckin api
	
	
	body +=chunk;
	
	});
	 
	 response.on("end",function(){ //when data end
		/* console.log(body); */
		 var profile = JSON.parse(body);
		 printMessage(id,profile.name);
	 });
 });

 //for errors
 request.on("error", function(error)
 {

console.error(error.message); 
 });
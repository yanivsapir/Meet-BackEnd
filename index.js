require('./database');
require('./server');


//=================================================
/*mongoose.connection.once('open',function() {
  Restaurant.find({},function(err,restaurant) {
    if(err) throw err;
    
    Restaurants = restaurant;
    console.log(Restaurants);
    mongoose.disconnect();
  });
});*/

/*app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Restaurant app"}); 
}); 

app.get('/getAllRestaurants',restaurants.getAllRestaurants);
//example - http://localhost:3000/getAllExcellenceStudent 
app.get('/getAllRestaurants', function (req, res) { 
  var all_restaurant = restaurants.getAllRestaurants(Restaurants); 
  res.set('getAllRestaurants', 'ok'); 
  res.json({"Restaurants " :all_restaurant}); 
}); 
 
//example - http://localhost:3000/getStudGrade?id=3 
app.get('/getStudGrade', function (req, res) { 
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query; 
    //console.log(studentsGrades);
    var studentById = students.getStudGrade(query.id,studentsGrades); 
    res.set('getStudGrade', 'ok'); 
    res.json({Student:studentById, id:query.id}); 
}); 
 
//example - http://localhost:3000/getExcellenceByYear/2015 
app.get('/getExcellenceByYear/:years', function (req, res) {     
    var ExcellenceStudentsByYear = students.getExcellenceByYear(req.params.years,studentsGrades); 
    res.set('getExcellenceByYear', 'ok'); 
    res.json(ExcellenceStudentsByYear); 
}); 

//example - http://localhost:3000/error 
app.get('/error', function (req, res) { 
    res.status(500).json({status:false, message:"Internal Server Error"}); 
}); 
 

app.get('/', function(req,res){
  res.status(400).json({status:false , message:"Wrong path entered , Please check your url adrress"});
  });


app.all('*', function(req,res){
  res.status(400).json({status:false , message:"Wrong path entered , Please check your url adrress"});
});


console.log('Node app is running on port', process.env.PORT); */

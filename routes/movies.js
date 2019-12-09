var express = require('express');
var router = express.Router();
const movieModel = require('../models/movie');
const middlewares = require('../middlewares')

router.get('/:id', function(req, res, next) {
    movieModel.findOne({_id:req.params.id}, function(err, movie){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {movie: movie}});
      }
    });
    
  });
/* GET movies listing. */
router.post('/list', function(req, res, next) {
	console.log(req);
  movieModel.find({user:req.body.email}, function(err, movies){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {movies: movies}});
    }
  });
  
});


router.post('/', function(req, res, next) {
	console.log(req.body);
    try{
    movieModel.create({
       tittle: req.body.name, 
       author: req.body.author, 
       published_at: req.body.productionDate,
	   user: req.body.email,
	   calification: req.body.rating
       
     }, (err, result)=>{
      console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "Película agregada!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
	console.log(req.params.id);
  movieModel.findOneAndUpdate(req.params.id, {
        tittle: req.body.name, 
		author: req.body.author, 
		published_at: req.body.productionDate,
		user: req.body.email,
		calification: req.body.rating
    }, function(err, movieInfo){
		console.log(movieInfo);
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "movie updated successfully", data: movieInfo});
      }
  });
});


router.delete('/:id', function(req, res, next) {
  movieModel.findOneAndDelete(req.params.id, function(err, movieInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "movie deleted successfully", data: movieInfo});
    }
});
});

module.exports = router;

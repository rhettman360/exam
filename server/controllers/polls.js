let mongoose= require('mongoose');
let User=mongoose.model('User');
let Poll= mongoose.model('Poll');



class PollsController{
  index(req, res){
    Poll.find({}).populate('user').exec((err, polls)=> {
      if(err){ return res.json(err)}
    return res.json(polls);
  })
 }
 create(req,res){

   Poll.create(req.body, (err, poll)=>{
     if(err){return res.json(err)}
     User.findByIdAndUpdate(
       req.body.user,
       {$push: {polls: poll._id}},
       {new: true},
       (err, user)=>{
         if(err){return res.json(err)}
         return res.json(poll);
       })
   })
 }

 show(req, res){
   Poll.findById(req.params.id,(err, poll)=>{
   if(err){return res.json(err)}
    return res.json(poll);

   })
  }
  delete(req, res){
  Poll.findByIdAndRemove(req.params.poll_id, (err,poll) => {
          if(err) {
            return res.json(err);
          }
          return res.json(poll);
      });
  }
  vote1(req, res){
    Poll.findByIdAndUpdate(req.params.poll_id,
     {$inc:{'option1.votes':1}},
    {new:true},
      (err,poll)=>{
          if(err){return res.json(err)}
          return res.json(poll)
      })
  }
}
module.exports = new PollsController();

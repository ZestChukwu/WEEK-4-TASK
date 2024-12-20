var express = require('express')
var fs = require('fs')
var app=express()

/*Exercise 1*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res)
{
          res.send("Welcome to Express. This is my first server. I hope you like it.");
});
app.listen(5000,function(){console.log("Server started on port 5000")})


/*Exercise 2*/
app.get('/about',function(req,res)
{
   res.send("This is a basic application.");
});

app.get('/users/:userId/books/:bookId',function(req,res)
{
   res.send(req.params);
})


/*Exercise 3*/
app.get ('/GetStudents',function(req,res){studentdata={};
   fs.readFile(__dirname+'/student.json', 'utf8',
function(err,data){console.log(data);
   res.json({
               "status":true,
               "status_code":200,
               "requested at":req.localtime,
               "requrl":req.url,
               "request.Method":req.method,
               "studentdata":JSON.parse(data)
            });
          });
})

app.get('/GetStudentid/:id',(req, res) => {
   studentdata = {};
   fs.readFile(__dirname + "/" + "Student.json", "utf8",
   function (err, data) {
      
      var students= JSON.parse(data);
      var student=students["Student"+req.params.id];
      console.log("student", student)
      if (student)

         res.json(student)
         else
         res.json({
                   'status':true,
                   'status_code':200,
                   'requested at':req.localtime,
                   'requrl':req.url,
                   'request.Method':req.method,
                   'studentdata':JSON.parse(data)});
   });
})

/*Exercide 4*/
//Create a form
app.get('/studentinfo', function(req,res)
{
   res.sendFile('StudentInfo.html',{ root:  __dirname});
})

app.post('/submit-data', function(req,res)
{
   var name=req.body.FirstName + ' ' + req.body.LastName + ' ';

   var Age=req.body.myAge + ' Gender: '+ req.body.gender+ ' '
   
   Qual=' Qualification' + req.body.Qual
   console.log(req.body.Qual)
   res.send({
      status: true,
      message:'form Details', 
      data: {
         name: name, 
         age:Age, 
         Qualifications: Qual,
      }
   });
});
                    
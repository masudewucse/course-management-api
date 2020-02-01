Course Management API using NodeJS

MongoDB Database:
course_category: name					
courses:	     name	    category	    startdate	enddate	price	instock
users:	         name	    address	email	pass	    date	
booking:	     userobject	courseobject	time			


CATEGORY:
(Create) POST: http://localhost:3005/api/category  
{"name": "Nordic Walking Trainer"}
(View) GEY: http://localhost:3005/api/category  or http://localhost:3005/api/category/Cat_objectID
(Edit) PUT: http://localhost:3005/api/category/Cat_objectID
(Delete) DELETE: http://localhost:3005/api/category/Cat_objectID

COURSE:
(Create) POST: http://localhost:3005/api/courses  
{"name":"",
"categoryId":"",
"endDate":Date,
"price": 6,
"inStock":10}
(View) GEY: http://localhost:3005/api/courses  or http://localhost:3005/api/courses/Course_objectID
(Edit) PUT: http://localhost:3005/api/courses/Course_objectID
(Delete) DELETE: http://localhost:3005/api/courses/Course_objectID

USER:

(Create) POST: http://localhost:3005/api/users  
{"name":"",
	"address":"",
	"email":"",
	"password": ""}
(View) GET: http://localhost:3005/api/courses/User_objectID
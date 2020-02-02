Course Management API using NodeJS & MongoDB<br>

MongoDB Database:<br>
<pre>
course_category: name					
courses: name category startdate enddate price instock
users:  name address email pass date	
booking: userobject	courseobject time
</pre>

CATEGORY:<br>
(Create) POST: `http://localhost:3005/api/category` <br> 
<pre>
{"name": ""}
</pre>
(View) GET: `http://localhost:3005/api/category`  or `http://localhost:3005/api/category/Cat_objectID`<br>
(Edit) PUT: `http://localhost:3005/api/category/Cat_objectID`<br>
(Delete) DELETE: `http://localhost:3005/api/category/Cat_objectID`<br>

COURSE:<br>
(Create) POST: `http://localhost:3005/api/courses`  <br>
<pre>
{"name":"",
"categoryId":"",
"endDate":Date,
"price": 6,
"inStock":10}
</pre>
(View) GET: `http://localhost:3005/api/courses`  or `http://localhost:3005/api/courses/Course_objectID`<br>
(Edit) PUT: `http://localhost:3005/api/courses/Course_objectID`<br>
(Delete) DELETE: `http://localhost:3005/api/courses/Course_objectID`<br>

USER:<br>
(Create) POST: `http://localhost:3005/api/users`  <br>
<pre>
{"name":"",
"address":"",
"email":"",
"password": ""}
</pre>
(View) GET: `http://localhost:3005/api/courses/User_objectID`<br>

BOOKING:
(Create) POST: `http://localhost:3005/api/bookings`<br>
<pre>
{"userId":"",
"courseId":""}
</pre>
(view) GET: `http://localhost:3005/api/bookings/Booking_objectID`<br>     
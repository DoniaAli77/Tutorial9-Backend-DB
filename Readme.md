Before running the project 

1. you are required to download nodejs, postgres sql and visual studio code, postman.
2. open pgadmin4 then register server
3. enter db_server for Name field 
4. click on connection and type password in password field and enter localhost in host name field

Note that you need to use same password that you used during installing postgres sql.

5. click on save
6. go to db_server then Database then postgres then click on schemas
7. click on icon next to Browser (Top left)
8. create table Employee(
	ID serial primary key, 
	firstName text not null,
	middleName text not null,
	lastName text not null,
	country text not null,
	salary integer not null,
	birthDate date not null -- yyyy-mm-dd
);

9. open project through visual studio code
10. click on terminal then click new terminal
11. type command npm install express knex pg hjs in terminal
12. type command npm install nodemon --save-dev
13. go to file db.js
14. change password from 1234 to the same password that you used during installing postgres sql 
15. run code using command npm run server or node server.js from terminal

Also click on visual studio code extensions then search for thunder client then install it to test your backend
(clicking ctrl + c to stop runnning server code exit by clicking)
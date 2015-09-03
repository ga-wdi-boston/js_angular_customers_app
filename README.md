# Angular Customer Application (SPA)


## Objectives

* Create a complete Single Page Application (SPA) using Angular.


## Setup Front-End

#### Install Angular.  

```$ bower install```

#### Run a ruby HTTP server to serve up the front-end app.  

```$ ruby -run -e httpd . -p5000```

## Setup Back-End, Rails Customers API 

#### Start the Customers API, backend

In another directory, **NOT THE SAME DIRECTORY AS THE 
FRONT-END APP!!**

```$ git clone git@github.com:ga-wdi-boston/wdi_9_rails_customers_api.git```
```$ cd wdi_9_rails_customers_api```
```$ rake db:setup```
```$ rails server```

Now check that you have a couple of customers at http://localhost:3000/customers

*Should have JSON for a couple of customers*


## Demo

Go to http://localhost:5000/index_done.html. This should allow you to see the Customers and their Orders.

#### Create a new customer.

### Create your Application.

Work through the index_done.html and create you're own set of application. All the files will be in index.html, app/app.js, app/controllers/customersController.js, etc...


## Lab
Create a form to create orders for a Customer.

*May need to change the backend API Rails app to create Orders*

## Documentation

[Angular JS Form Validation with ngMessages](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages)

[Angular JS Forms](http://tutorials.jenkov.com/angularjs/forms.html)

[AngularJS](https://angularjs.org/)

[API Documentation](https://docs.angularjs.org/api)

This is like the $.ajax in JQuery.  
[Ajax HTTP Service](https://docs.angularjs.org/api/ng/service/$http) 
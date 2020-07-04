//  this is the entry point

// START IMPORTING CORE MODULE //

// END CORE MODULE IMPORTING //



//  START THIRD PARTY IMPORT //
const express = require('express');
// END THIRD PARTY IMPORT //



// START OF ROUTE IMPORT //
const HomeRoute = require('./routes/HomeRoute')
const SendInfoRoute = require('./routes/SendInfoRoutes')

// END OF ROUTE IMPORT //


// START OBJECT INSTANTIATION //
const app = express()
//END OF OBJECT INSTATTIATING //


// MIDDLEWARE SECTION BEGINS//
app.use(HomeRoute)
app.use(SendInfoRoute)

// MIDDLEWARE SECTION ENDS


app.listen(3000, console.log(" server started at 3000 port "))

//================================ PORT ======================================//
//==============================================================================//

process.env.PORT = process.env.PORT || 3000 ;



//================================ ENVIROMENT ======================================//
//==============================================================================//


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//================================ DATABASE ======================================//
//==============================================================================//

let urlDb;

if ( process.env.NODE_ENV ==='dev'){urlDb='mongodb://localhost:27017/cafe'}

else{urlDb=process.env.MONGO_URL}

process.env.URLDB = urlDb;
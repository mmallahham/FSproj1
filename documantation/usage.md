To run the app locally use git to clone the repository from github 

you need to set the connection string in the enviroment variable using powershell or just set it in the url variable in db.js, the save my account data on mLab I used this enviroment variable

to do that:

$ENV:PROD_MONGODB = "mongodb://<dbuser>:<dbpassword>@#######.mlab.com:43030/quiz"

or locally:

$ENV:PROD_MONGODB = "mongodb://localhost:<PORT>/quiz"


and you have to install node packages:

$ npm i


thin run start script using npm.


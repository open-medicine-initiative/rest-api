#Project setup

##Requirements

* iojs >= 1.8.1 (tip: use latest nvm to manage environments)
* phantomjs

##Installation

`sudo npm install -g gulpjs/gulp-cli#4.0 babel coffee-script pm2`
`npm install`

#Building



#Running

There is a startup script that registers the babel pre-processor for 
Single server: `node startup.js`
Clustered : `pm2 start server.js -i 0 --next-gen-js`


#Project layout





#Resources

http://es6-features.org
http://www.ociweb.com/resources/publications/sett/gulp-4/
http://demisx.github.io/gulp4/2015/01/15/install-gulp4.html
https://github.com/Unitech/pm2
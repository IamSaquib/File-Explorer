const http = require('http');
const fs = require('fs');
const list_dir = require('./routes/list_dir');

const port = process.env.PORT || 8080;

const readFileAsync = (path)=> {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(req.url.match('/get_file')) {
        list_dir.get_file(req,res);
    } else if(req.url.match('/list_dir')) {
        list_dir.list_route(req, res) 
    } else if(req.url === '/') {
        const index = await readFileAsync('./public/index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(index);
        res.end();
    } else if(req.url === '/main.js'){
        fs.readFile('./public/main.js', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {

                res.writeHead(200, {'Content-Type': 'text/js'});
                res.write(data);    
            }
            res.end();
        });
    } else if(req.url === '/runtime.js'){
        fs.readFile('./public/runtime.js', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {

                res.writeHead(200, {'Content-Type': 'text/js'});
                res.write(data);    
            }
            res.end();
        });
    } else if(req.url === '/vendor.js'){
        fs.readFile('./public/vendor.js', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {

                res.writeHead(200, {'Content-Type': 'text/js'});
                res.write(data);    
            }
            res.end();
        });
    } else if(req.url === '/polyfills.js'){
        fs.readFile('./public/polyfills.js', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.writeHead(200, {'Content-Type': 'text/js'});
                res.write(data);    
            }
            res.end();
        });
    }  else {
        fs.readFile('./public/styles.js', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {

                res.writeHead(200, {'Content-Type': 'text/js'});
                res.write(data);    
            }
            res.end();
        });
    }

});
try {
    server.listen(port, () => {
        console.log("Server is working on port " + port);
    });
} catch(err) {
    res.writeHead(500);
    res.write('Internal Server Error');
    res.end();
}


module.exports = server;
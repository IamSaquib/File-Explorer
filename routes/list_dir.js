const fs = require('fs');

const readDirAsync = (path) => {
    return new Promise((res, rej)=> {
        fs.readdir(path, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}

const statAsync = (path) => {
    return new Promise((res, rej) => {
        fs.stat(path, (err, data) => {
            if(err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}

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

const list_route = function (req, res) {
    // const reqUrl = url.parse(req.url, true);
    const url = req.url.split('?')[1].split('=')[1];
    const file = url.split('/');
    if (url) {
        path = url
    } else {
        path = '/';
    }
    path = decodeURI(path);
    fs.stat(path, async (err, data) => {
        const isDir = data.isDirectory();
        if(isDir) {
            try {
               var dir = await readDirAsync(path);
            } catch {
                res.writeHead(404)
                res.write('Url Not Found!')
                res.end();
            }
        
            let dirResp = [];
            for(let i=0;i<dir.length; i++) {
                const file = {};
                file.name = dir[i];
                try {
                    var stat = await statAsync(path+'/'+dir[i]);
                } catch {
                    res.writeHead(404)
                    res.write('Url Not Found!')
                    res.end();
                }
                file.size = stat.size;
                file.type = stat.isDirectory()?'folder':'file';
                dirResp.push(file);
            }
            res.writeHead(200,{'Context-Type':'application/json'});
            dirResp = JSON.stringify(dirResp, null, 3);
            res.end(dirResp);
        } else {
            const type = path.split('.');
            const file = JSON.stringify({ type:type[type.length-1]}, null, 3);
            res.end(file);           
        }
    });
};

const stream = (path, type, res) => {
    path = decodeURI(path);
    const readStream = fs.createReadStream(path);
    if(type === 'mp3'){
        res.writeHead(200, {
            'Content-Type': 'audio/mpeg'
        });
    } else if(type === 'jpg' || type === 'png' || type === 'jpeg') {
        type=(type === 'png')? 'png':'jpeg';
        res.writeHead(200, {
            'Content-Type': `image/${type}`
        });
    } else {
        res.writeHead(200, {
            'Content-Type': 'video/mp4'
        });
    }
    readStream.pipe(res);
}

const get_file = async (req, res) => {

    let path = req.url.split('?')[1].split('=')[1];
    path = decodeURI(path);
    const file = path.split('/');
    
    let pth = path.split('.');
    if(pth[1] === 'jpg' || pth[1] === 'png' || pth[1] === 'jpeg') {
        stream(path, pth[1], res);   
    } 
    else if(pth[1] === 'mp3') {
        stream(path, 'mp3', res);
    } else if(pth[1] === 'mp4') {
        stream(path, 'mp4', res);
        
    } else if(pth[1] === 'txt' || pth[1] === 'cpp') {
        try {
            var content = await readFileAsync(path);    
        } catch {
            res.writeHead(404)
            res.write('Url Not Found!')
            res.end();
        }
        res.writeHead(200,{'Content-Type':'text/plain'});
        content = content.toString('utf8');
        const con = {
            body: content
        }
        res.write(JSON.stringify(con, null, 3))
        res.end(); 
    } else {
        res.writeHead(200, {'content-disposition': 'attachment; filename=' + file[file.length-1]})
        res.end();
    }
}
module.exports = { 
    list_route,
    get_file
};
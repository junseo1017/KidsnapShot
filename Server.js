const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try{
        if(req.method==='GET'){
            console.log('get')
        }
    }
});

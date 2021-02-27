function engineerInfo(engineerInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
        <div class="card text-center">
            <div class="card-header">

        <h1>${engineerInfo.name}</h1>
        <h2>${engineerInfo.ID}</h2>
    </div>
    <div class="bg-dark card-body">
        <h3 class="card-title">Employee Info</h3>
        <h5 class="card-title">${engineerInfo.email}</h4>
        <h5 class="card-title">${engineerInfo.github}</h4>
    </div>
    <div class="card-footer text-muted">
    
    </div>
    </div>
    
    </body>
    </html>`
    };
   
    module.exports = engineerInfo;
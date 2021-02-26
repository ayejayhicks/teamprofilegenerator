function managerData (data) {
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

        <h1>${managerData.name}</h1>
        <h2>${managerData.ID}</h2>
    </div>
    <div class="bg-dark card-body">
        <h3 class="card-title">Employee Info</h3>
        <h5 class="card-tite">${managerData.email}</h5>
        <h5 class="card-title">${managerData.email}</h5>
    </div>
    <div class="card-footer text-muted">
    
    </div>
    </div>
    
    </body>
    </html>`
    };
    // htmlHelperInfo()
    module.exports = managerData;
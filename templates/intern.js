// goal: pass an array of employees to our fumction and loop through array

function internInfo (internInfo) {
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

        <h1>${internInfo.name}</h1>
        <h2>${internInfo.ID}</h2>
    </div>
    <div class="bg-dark card-body">
        <h3 class="card-title">Employee Info</h3>
        <h4 class="card-tite">${internInfo.email}</h4>
        <h4 class="card-title">${internInfo.school}</h4>
        <h4 class="card-title">${internInfo.newmember}</h4>
    </div>
    <div class="card-footer text-muted">
    
    </div>
    </div>
    
    </body>
    </html>`
    };
    // htmlHelperInfo()
    module.exports = internInfo;
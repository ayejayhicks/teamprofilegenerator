


// goal: pass an array of employees to our function and loop through an array

function htmlHelperInfo(data) {
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
    <h1>${data.name}</h1>
    <h2>${data.ID}</h2>
</div>
<div class="bg-dark card-body">
    <h3 class="card-title">Employee Info</h3>
    <h5 class="card-title">${data.email}</h5>
    <h5 class="card-title">${data.email}</h5>
    <h5 class="card-title">${data.}</h5>
    <p class="card-title">${data.}</p>
    <p class="card-title">${data.}</p>
    <p class="card-title">${data.}</p>
    <p class="card-title">${data.}</p>
    <p class="card-title">${data.}</p>
</div>
<div class="card-footer text-muted">

</div>
</div>

</body>
</html>`
};
// htmlHelperInfo()
module.exports = htmlHelperInfo;
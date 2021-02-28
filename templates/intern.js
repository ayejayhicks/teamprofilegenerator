// goal: pass an array of employees to our function and loop through array

function internInfo (internInfo) {
    return `
    <div class="card" style="width: 30rem;">
        <div class="card-body">
        <div class="card text-center">
            <div class="card-header">
        <h1>class="card-title">Intern</h1>
        <h1>${internInfo.name}</h1>
        <h2>${internInfo.ID}</h2>
    </div>
    <div class="bg-trans card-body">
        <h4 class="card-tite">${internInfo.email}</h4>
        <h4 class="card-title">${internInfo.school}</h4>
    </div>
    </div>
    </div>
    </div>`
    };
    
    module.exports = internInfo;
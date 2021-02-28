function internInfo (internInfo) {
    return `
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
            <div class="card-header">
        <h1>${internInfo.name}</h1>
        <h2>Intern</h2>
        <h2>${internInfo.ID}</h2>
    </div>
    <div class="bg-trans card-body">
        <h3 class="card-title">${internInfo.email}</h3>
        <h3 class="card-title">${internInfo.school}</h3>
    </div>
    </div>
    </div>
    </div>`
    };
    
    module.exports = internInfo;
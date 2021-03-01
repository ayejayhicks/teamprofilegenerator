function internInfo(internInfo) {
    return `
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
            <div class="card-header">
        <h2>${internInfo.name}</h2>
        <h3>Intern</h3>
        <h4>${internInfo.ID}</h4>
    </div>
    <div class="bg-trans card-body">
        <h4 class="card-title">${internInfo.email}</h4>
        <h4 class="card-title">${internInfo.school}</h4>
    </div>
    </div>
    </div>
    </div>`
    };
    
    module.exports = internInfo;
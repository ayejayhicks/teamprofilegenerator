function internInfo(internInfo) {
    return `
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
            <div class="card-header">
        <h3>${internInfo.name}</h3>
        <h4>Intern</h4>
        <h6>${internInfo.ID}</h6>
    </div>
    <div class="bg-trans card-body">
        <h6 class="card-title">${internInfo.email}</h6>
        <h6 class="card-title">${internInfo.school}</h6>
    </div>
    </div>
    </div>
    </div>`
    };
    
    module.exports = internInfo;
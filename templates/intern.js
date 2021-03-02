function intern(intern) {
    return `
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
            <div class="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
        <h6>${intern.ID}</h6>
    </div>
    <div class="bg-trans card-body">
        <h6 class="card-title">${intern.email}</h6>
        <h6 class="card-title">${intern.school}</h6>
    </div>
    </div>
    </div>
    </div>`
    };
    
    module.exports = intern;
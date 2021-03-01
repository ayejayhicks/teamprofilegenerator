function engineerInfo(engineerInfo) {
    return `
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
            <div class="card-header">
        <h2>${engineerInfo.name}</h2>
        <h3>Engineer</h3>
        <h4>${engineerInfo.ID}</h4>
    </div>
    <div class="bg-trans card-body">
        <h4 class="card-title">${engineerInfo.email}</h4>
        <h4 class="card-title">${engineerInfo.github}</h4>
    
    </div>
    </div>
    </div>`
    };

    module.exports = engineerInfo;
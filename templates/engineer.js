function engineerInfo(engineerInfo) {
    return `
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
            <div class="card-header">
        <h1>Engineer</h1>
        <h1>${engineerInfo.name}</h1>
        <h2>${engineerInfo.ID}</h2>
    </div>
    <div class="bg-trans card-body">
        <h5 class="card-title">${engineerInfo.email}</h5>
        <h4 class="card-title">${engineerInfo.github}</h4>
    
    </div>
    </div>
    </div>`
    };

    module.exports = engineerInfo;
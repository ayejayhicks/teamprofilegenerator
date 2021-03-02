function engineerInfo(engineerInfo) {
    return `
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
            <div class="card-header">
        <h3>${engineerInfo.name}</h3>
        <h4>Engineer</h4>
        <h6>${engineerInfo.ID}</h6>
    </div>
    <div class="bg-trans card-body">
        <h6 class="card-title">${engineerInfo.email}</h6>
        <h6 class="card-title">${engineerInfo.github}</h6>
    
    </div>
    </div>
    </div>`
    };

    module.exports = engineerInfo;
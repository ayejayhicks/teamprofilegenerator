function engineerInfo(engineerInfo) {
    return `
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
            <div class="card-header">
        <h2>${engineerInfo.name}</h2>
        <h2>Engineer</h2><i class="fas fa-mug-hot"></i>
        <h2>${engineerInfo.ID}</h2>
    </div>
    <div class="bg-trans card-body">
        <h3 class="card-title">${engineerInfo.email}</h3>
        <h3 class="card-title">${engineerInfo.github}</h3>
    
    </div>
    </div>
    </div>`
    };

    module.exports = engineerInfo;
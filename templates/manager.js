function managerInfo (data) {
    return `
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
        <div class="card-header">
        <h3>${managerInfo.name}</h3>
        <h4>Manager</h4>
        <h6>${managerInfo.ID}</h6>
    </div>
    <div class="bg-trans card-body">
        <h6 class="card-title">${managerInfo.email}</h6>
        <h6 class="card-title">${managerInfo.officenumber}</h6>
    </div>
    </div>
    </div>
    </div>`
    };

    module.exports = managerInfo;
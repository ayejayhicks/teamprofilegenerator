function managerInfo (data) {
    return `
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
        <div class="card-header">
        <h2>${managerInfo.name}</h2>
        <h3>Manager</h3>
        <h4>${managerInfo.ID}</h4>
    </div>
    <div class="bg-trans card-body">
        <h4 class="card-title">${managerInfo.email}</h4>
        <h4 class="card-title">${managerInfo.officenumber}</h4>
    </div>
    </div>
    </div>
    </div>`
    };

    module.exports = managerInfo;
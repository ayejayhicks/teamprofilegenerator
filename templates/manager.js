function managerInfo (data) {
    return `
    <div class="container-fluid">
    <div class="jumbotron">My Team</div>
    <div class="row">
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
        <div class="card-header">
        <h1>${managerInfo.name}</h1>
        <h2>Manager</h2>
        <h2>${managerInfo.ID}</h2>
    </div>
    <div class="bg-trans card-body">
        <h3 class="card-title">${managerInfo.email}</h3>
        <h3 class="card-title">${managerInfo.officenumber}</h3>
    </div>
    </div>
    </div>
    </div>`
    };
    module.exports = managerInfo;
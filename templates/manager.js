function managerData (data) {
    return `
    <div class="container-fluid">
    <div class="jumbotron">My Team</div>
    <div class="row">
    <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center">
        <div class="card-header">
        <h1>Manager Info</h1>
        <h1>${managerData.name}</h1>
        <h2>${managerData.ID}</h2>
    </div>
    <div class="bg-trans card-body">
        <h5 class="card-tite">${managerData.email}</h5>
        <h5 class="card-title">${managerData.email}</h5>
    </div>
    </div>
    </div>
    </div>`
    };
    module.exports = managerData;

const searchRecipes = function(ingredeint){
    let ingdnt = $('#ingdnt-input').val()
    $.get(`/recipes/${ingdnt}`, function(response){
        // render(response)
    })
}
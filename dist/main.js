
const searchRecipes = function(){
    let ingdnt = $('#ingdnt-input').val()
    $.get(`/recipes/${ingdnt}`, function(response){
        recipeRender.render(response)
        $('#ingdnt-input').val('')
    })
}
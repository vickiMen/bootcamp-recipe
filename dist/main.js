
const searchRecipes = function(){
    let ingdnt = $('#ingdnt-input').val()
    $.get(`/recipes/${ingdnt}`, function(response){
        /no/i.test(response) ? recipeRender.renderNoRslts(ingdnt) : recipeRender.render(response)
        $('#ingdnt-input').val('')
    })
}

$('#container').on('click', '.thumbnail', function(){
    debugger
    let box = $(this).parents()
    let list = box.children('.ingdnts')
    let firstIngdnt = list.children().first().html()
    console.log(firstIngdnt)
})
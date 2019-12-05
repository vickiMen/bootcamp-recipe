
class Renderer {
    
    constructor(dest, source){
        this.dest = dest,
        this.source = source
    }

    render(data){
        
        this.dest.empty()
        // $('#recipes-container').empty()
        // source
        // $('#recipe-temp').html()
        const template = Handlebars.compile(this.source.html())
        const newHTML = template({data})
        this.dest.append(newHTML)
        // $('#recipes-container').append(newHTML)
    }

    renderNoRslts(ingdnt){
        this.dest.append(`<div class='no-results'>Sorry, no results were found for ${ingdnt}</div>`)
    }

}

const rcpeDest = $('#recipes-container')
const rcpSource = $('#recipe-temp')

const recipeRender = new Renderer(rcpeDest,rcpSource)

main()

function main() {
    //lista de parametros de las tragetas
    const listParams = [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png', title: 'Hoja de Requerimiento', description: "FO-SI-003 Informe de Requerimientos Sistemas 2023 ", hoja:'hojaEncuesta.html' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png', title: 'Buscar equipos', description: "FO-SI-003 Hoja de Vida del Equipo Sistemas 2023 ", hoja:'buscarequipos.html' },
    ]

    //genera una lista con todaas las tragetas y las une 
    const rutaTargetas = listParams.reduce((accumulator, params) => {
        //funcion para devolver la targeta
        const targeta = generarCard(params)
        return accumulator + targeta + '<br>'

    }, '')

    //genera una lista con todaas las tragetas y las une 
    //const rutaTargetas1 = listParams.map(params => generarCard(params)).join('');

    //cogemos el elemento del html para escribir la lista  de las targetas en ella
    const div = document.getElementById('cards')
    div.innerHTML = rutaTargetas

}


function generarCard(params) {
    let ruta = `
    <div class="col-md-4 col-lg-4 mb-4" >
        <div class="card "  style="width: 18rem;">
          <img src="${params.url}" class="card-img-top" >
          <div class="card-body">
            <h5 class="card-title">${params.title}</h5>
            <p class="card-text">${params.description}</p>
            <a href="${params.hoja}" class="btn btn-primary">Entrar</a>
          </div>
        </div>
    </div>
    `

    return ruta
}
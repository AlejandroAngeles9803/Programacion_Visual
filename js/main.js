
document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        document.querySelector('#content').innerHTML = ""
        const block = document.createElement('div');
        block.insertAdjacentHTML(

            'beforeend',
            `
            <div class="block">
                <p class="text-main">
                La programación orientada a eventos (POE) es un paradigma de programación que se basa en la interacción y la respuesta a eventos que ocurren en un sistema. En lugar de seguir un flujo de ejecución lineal, en la programación orientada a eventos, el programa se estructura en torno a eventos y las acciones que se desencadenan cuando esos eventos ocurren.
                </p>
            </div>
            
            <div class="cont">	
            <button onclick="btnNext()" class="btn-change"><span>Siguiente..</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62"></button>
            </div>
            `
        )
        document.querySelector('#content').append(block);
    }, 5000)
});


const btnNext = () => {

    setTimeout(() => {
        document.querySelector('#sectionNav').innerHTML = "";

        const navBar = document.createElement('div');
        navBar.classList.add('nav-bar');

        navBar.insertAdjacentHTML(

            'beforeend',

            `
            <nav class="navbar navbar-expand-md bg-body-tertiary">
                <div class="container-fluid">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-2">
                        <li class="nav-item">
                            <a class="nav-link active" onclick="elementoUno()"   aria-current="page" href="#">Eventos de clic</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link active" onclick="elementCuarto()"  aria-current="page" href="#">Evento "mouseover"</a>
                        </li>
                    </ul>    

                    <div class="home">
                        <button type="button" class="btn-home" onclick="idHome()" ><i class="bi bi-house-fill"></i></button>
                    </div>

                </div>

            </nav>

           

            <br></br>
            <div id="content-second">
            
            </div>


            
            `

        )
        document.querySelector('#sectionNav').append(navBar);

    }, 1500)
}

const elementoUno = () => {
    document.querySelector('#content-second').innerHTML = ""

    const block = document.createElement('div');

    block.insertAdjacentHTML(
        
        'beforeend',
        `
        <div class="block">
            <p class="text-main">
                Eventos de clic (click): Se desencadenan cuando se hace clic en un elemento HTML, como un botón, un enlace o cualquier otro elemento interactivo.
            </p>
        </div>
    
        <div class="content-info">
            <!-- Button trigger modal -->
            <button type="button" onclick="cargarElement()" class="btn-general"
            data-bs-toggle="modal" data-bs-target="#exampleModal">
            Da Click Aqui!!!
            </button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div style="width:100%;height:0;padding-bottom:75%;position:relative;">
                        <iframe src="https://giphy.com/embed/l49JHLpRSLhecYEmI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        `
        
    )
    document.querySelector('#content-second').append(block);
};


const elementCuarto = () => {
    document.querySelector('#content-second').innerHTML = ""
    const block = document.createElement('div');

    block.insertAdjacentHTML(
      "beforeend",

      `
        <div class="block">
            <p class="text-main">
                El evento mouseover se dispara cuando el puntero del mouse se mueve sobre un elemento específico. Este evento proporciona una forma de detectar cuando el cursor del mouse entra en el área de un elemento en particular.
                <br>
                <br>
                Cuando se activa el evento "mouseover", puedes realizar diversas acciones, como mostrar información adicional, cambiar el estilo visual del elemento, crear efectos visuales, etc. Es común utilizar este evento para mejorar la interactividad de una página web o proporcionar retroalimentación al usuario.
            </p>
        </div>
        
        <div class="content-info">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-general ">
            Pasa tu mouse!!!
            </button>

            
        

        `
    );
    document.querySelector('#content-second').append(block);
    
}

const idHome = () =>{
    document.querySelector('#sectionNav').innerHTML = "";

    const block = document.createElement('div');

    block.insertAdjacentHTML(
        
        'beforeend',

        `
        <h1 >¿Qué es la Programación Orientada a Eventos?</h1>

       <div id="content">
            <div class="block">
                <p class="text-main">
                     La programación orientada a eventos (POE) es un paradigma de programación que se basa en la interacción y la respuesta a eventos que ocurren en un sistema. En lugar de seguir un flujo de ejecución lineal, en la programación orientada a eventos, el programa se estructura en torno a eventos y las acciones que se desencadenan cuando esos eventos ocurren.
                </p>
            </div>
   
            <div class="cont">	
                <button onclick="btnNext()" class="btn-change"><span>Siguiente..</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62"></button>
            </div>
            
       </div>
        
        `
    )

    document.querySelector('#sectionNav').append(block);
}
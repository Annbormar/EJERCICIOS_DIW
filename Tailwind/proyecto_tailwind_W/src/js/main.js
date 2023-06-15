// seleccionamos el icono hamburguesa y el menu
const iconMenu = document.querySelector('#icon');
const menu = document.querySelector('#menu');

//creamos un OBJETO que contendrá los dos estados del menú (las clases que indican si está abierto o no)
const menuStates = {
    open: "bg-menu-open",
    close: "bg-menu-close"
};

//añadimos un evento a iconMenu en el que llame a una función anónima 
iconMenu = addEventListener("click", function() {
    
    //cuando está abierto
    if(iconMenu.classList.contains(menuStates["open"])) {
        iconMenu.classList.remove(menuStates["open"]);

        iconMenu.classList.add(menuStates["close"]);
        menu.classList.remove('opacity-0', 'pointers-event-none');
    }

    //cuando está cerrado
    else {
        iconMenu.classList.remove( menuStates["close"] );
        iconMenu.classList.add( menuStates["open"] );

        menu.classList.add('opacity-0', 'pointers-event-none');
    }
}
);

// ¿Qué ocurre con el menú si se cambia la orientación, por ejemplo en una tablet?
window.addEventListener("resize", function() {
    iconMenu.classList.remove( menuStates["close"] );
    iconMenu.classList.add( menuStates["open"] );

    menu.classList.add('opacity-0', 'pointers-event-none');
});

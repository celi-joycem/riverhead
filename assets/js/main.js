// assets/js/main.js
// Riverhead Foods - Main JavaScript File
// Last Updated: May 21, 2025

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle (Bootstrap 5 handles this with data-bs-toggle="collapse") ---
    // No se necesita JS adicional para la funcionalidad básica del toggler si el HTML
    // del navbar y el collapse está bien configurado.
    // Puedes añadir listeners aquí si necesitas efectos adicionales al abrir/cerrar.
    const mainNavCollapsible = document.getElementById('mainNavContent'); // ID del div colapsable principal
    if (mainNavCollapsible) {
        // Ejemplo de cómo escuchar eventos del collapse de Bootstrap
        // mainNavCollapsible.addEventListener('show.bs.collapse', function (event) {
        //     console.log('Menú (desktop/mobile) abriéndose:', event.target.id);
        // });
        // mainNavCollapsible.addEventListener('shown.bs.collapse', function (event) {
        //     console.log('Menú (desktop/mobile) completamente abierto:', event.target.id);
        // });
    }
    
    // --- Update Copyright Year ---
    const currentYearFooterSpan = document.getElementById('currentYearFooter');
    if (currentYearFooterSpan) {
        currentYearFooterSpan.textContent = new Date().getFullYear();
    }

    // --- Search Form Redirection ---
    function handleSearchFormRedirect(formId) {
        const searchForm = document.getElementById(formId);
        if (searchForm) {
            searchForm.addEventListener('submit', function(event) {
                event.preventDefault(); 
                const queryInput = this.querySelector('input[name="query"]');
                if (queryInput && queryInput.value.trim() !== '') {
                    window.location.href = `search-results.html?query=${encodeURIComponent(queryInput.value.trim())}`;
                } else {
                    if(queryInput) queryInput.focus(); 
                }
            });
        }
    }

    handleSearchFormRedirect('headerSearchFormDesktop'); 
    // Para el formulario de búsqueda en el menú móvil del header
    // (Asumiendo que el HTML del header tiene un form con id="mobileHeaderSearchForm" dentro del colapsable)
    // Si tu HTML para el header móvil tiene un form como el siguiente:
    // <form class="d-flex d-lg-none mt-3" role="search" id="mobileHeaderSearchForm" action="search-results.html" method="GET">
    //     <input class="form-control form-control-sm me-2" name="query" placeholder="Search products..." aria-label="Search">
    //     <button class="btn btn-success btn-sm" type="submit">Search</button>
    // </form>
    // Entonces la siguiente línea funcionaría. Asegúrate de que ese form exista en el header.
    // En la última versión del index.html, el form móvil no estaba en el header colapsable global,
    // sino que se repetía en cada página si era necesario o se manejaba por el script de la página.
    // Si el header que te di para index.html (el que está dentro de <header>) tiene un form móvil con id="mobileSearchFormHeader", usa ese.
    // Vamos a asumir que el HTML del header tiene un form con id="mobileSearchInHeader"
    // Revisando el último HTML de index.html, el formulario de búsqueda móvil no estaba en el <header> global,
    // sino que se llamaba 'mobileSearchForm' y estaba justo debajo del nav principal,
    // y el que está DENTRO del menú colapsable de Bootstrap (que es #mainNavContent) no tenía un ID único.
    // Para que este main.js maneje el buscador del menú móvil, ese form necesita un ID.
    // Por ahora, esta línea buscará un ID que quizás no exista en el header global:
    handleSearchFormRedirect('mobileSearchInHeader'); // Cambia 'mobileSearchInHeader' al ID real si lo tienes.


    // --- Lógica del Carrusel Hero (Bootstrap lo maneja con atributos data-bs-*) ---
    // No se necesita JS adicional aquí para la funcionalidad básica del carrusel.
    // Si quisieras más control:
    // const heroCarouselElement = document.getElementById('heroCarousel');
    // if (heroCarouselElement) {
    //     const carousel = new bootstrap.Carousel(heroCarouselElement);
    // }

    console.log('Riverhead main.js initialized.');
});
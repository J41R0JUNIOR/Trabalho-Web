document.addEventListener("DOMContentLoaded", function() {
    const nightModeSwitch = document.getElementById('nightModeSwitch');
    const body = document.body;

    // Verifica o estado salvo no localStorage ao carregar a página
    if (localStorage.getItem('nightMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (nightModeSwitch) nightModeSwitch.checked = true;
    }

    if (nightModeSwitch) {
        nightModeSwitch.addEventListener('change', function () {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('nightMode', 'enabled'); // Salva o estado no localStorage
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('nightMode', 'disabled'); // Salva o estado no localStorage
            }
        });
    }
});
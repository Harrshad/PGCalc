document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.custom-dropdown');
    var selected = dropdown.querySelector('.custom-dropdown-selected');
    var items = dropdown.querySelector('.custom-dropdown-items');
    
    selected.addEventListener('click', function() {
        dropdown.classList.toggle('custom-dropdown-show');
    });

    items.addEventListener('click', function(e) {
        if (e.target.tagName === 'DIV') {
            selected.textContent = e.target.textContent;
            dropdown.classList.remove('custom-dropdown-show');
        }
    });

    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('custom-dropdown-show');
        }
    });
});
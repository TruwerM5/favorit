let navbar_nested_links = document.querySelectorAll('.navbar__link_nested');


navbar_nested_links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let submenu = e.target.nextElementSibling;
        link.classList.toggle('is-open');
        console.log(submenu);
    })
})
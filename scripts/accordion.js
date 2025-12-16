document.querySelectorAll('.accordion_header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
        } else {
            body.style.maxHeight = body.scrollHeight + 'px';
        }
    });
});



const toggleBtn = document.getElementsByClassName("toggle_btn")[0];
        const toggleBtnIcon = document.getElementsByClassName("fa-solid fa-bars")[0];
        const dropDownMenu = document.getElementsByClassName("dropdown_menu")[0];
        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open');
            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'

        }

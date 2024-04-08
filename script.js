function updateDraggability() {
    const alldraggables = document.querySelectorAll('.draggable');
    alldraggables.forEach(element => {
        const parent = element.parentNode;
        if (element === parent.firstElementChild) {
            element.setAttribute('draggable', 'true');
        } else {
            element.removeAttribute('draggable');
        }
    });
}

updateDraggability();

const containers = document.querySelectorAll('.container');

function handleDraggableEvents() {
    const alldraggables = document.querySelectorAll('.draggable');

    alldraggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });
}

handleDraggableEvents();

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        if (draggable) {
            if (container.childElementCount === 0 || parseInt(draggable.dataset.size) < parseInt(container.firstElementChild.dataset.size)) {
                container.insertBefore(draggable, container.firstElementChild);
                updateDraggability();
                handleDraggableEvents();
            }
        }
    });
});

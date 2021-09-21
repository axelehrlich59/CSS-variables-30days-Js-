const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // Target la valeur px stockée en data

    // On remplace le name par la value et on lui ajoute la valeur px via la variable suffix
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate));
inputs.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate));
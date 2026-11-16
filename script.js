// Filtrowanie galerii projektów.
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".image");
const filterStatus = document.querySelector("#filter-status");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selected = button.dataset.filter;
        let visibleCount = 0;

        projectCards.forEach((card) => {
            const show = selected === "all" || card.dataset.category === selected;
            card.hidden = !show;
            if (show) visibleCount++;
        });

        filterButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        if (filterStatus) {
            filterStatus.textContent = `Wyświetlono ${visibleCount} z ${projectCards.length} plików.`;
        }
    });
});

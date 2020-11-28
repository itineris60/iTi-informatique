function buildMenuItem(href, label) {
  if (href === "/") {
    if (window.location.pathname === href) {
      return `<span Class="active-menu">${label}</span>`;
    } else {
      return `<a href="${href}">${label}</a>`;
    }
  } else {
    if (window.location.pathname+'.html'=== href) {
      return `<span Class="active-menu">${label}</span>`;
    } else {
      return `<a href="${href}">${label}</a>`;
    }
  }
}

function buildMenu() {
  const nav = document.querySelector("nav.main-menu");
  if (!nav) {
    return;
  }
  const isMenuInfoActive = window.location.pathname.indexOf('/informatique/')>-1;
  nav.innerHTML = `<ul>
    <li class="menu-informatique link ${isMenuInfoActive? 'active-menu':''}">Informatique
        <ul class="sub-menu-informatique">
            <li>${buildMenuItem("/informatique/prestation.html", "Nos Prestations")}</li>
            <li>${buildMenuItem("/informatique/montage.html", "Montage sur mesure")}</li>
            <li>${buildMenuItem("/informatique/reseau.html", "Réseaux d'entreprise")}</li>
            <li>${buildMenuItem("/informatique/vente.html", "Vente de Matériel")}</li>
        </ul>
    </li>
    <li>${buildMenuItem("/smartphone.html", "Smartphone")}</li>
    <li>${buildMenuItem("/affaire.html", "Les bonnes Affaires!")}</li>
    <li>${buildMenuItem("/qsn.html", "Qui Sommes Nous")}</li>
    <li>${buildMenuItem("/contact.html", "Nous contacter")}</li>
</ul>`;
}

buildMenu();

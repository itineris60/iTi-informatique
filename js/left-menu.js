function buildLeftMenu() {
  const aside = document.querySelector("aside.left-menu");
  if (!aside) {
    return;
  }
  aside.innerHTML = ` <ul>
    <li><img class="pub-img" src="/img/test.jpg" /></li>
    
</ul>`;
}

buildLeftMenu();

function buildLeftMenu() {
  const aside = document.querySelector("aside.left-menu");
  if (!aside) {
    return;
  }
  aside.innerHTML = ` <ul>
    <li><img class="pub-img" src="/img/pub-page1.png" /></li>
    <li><img class="pub-img" src="/img/pub-page2.png" /></li>
    <li><img class="pub-img" src="/img/pub-page3.png" /></li>
</ul>`;
}

buildLeftMenu();

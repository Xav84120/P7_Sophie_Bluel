async function gallery() {
  // Récupération de la ressource "works" sur le serveur
  const response = await fetch("http://localhost:5678/api/works");
  const works = await response.json();

  const gallery = document.querySelector(".gallery");

  //   Suppression des éléments déjà existant dans la galerie depuis le HTML.
  gallery.innerHTML = "";

  //   Ajout à <div class="gallery"> des élements du tableau "works"
  for (let i = 0; i < works.length; i++) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    gallery.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    img.src = works[i].imageUrl;
    img.alt = works[i].title;
    figcaption.innerText = `${works[i].title}`;

    // console.log(gallery);
  }
}

gallery();

// Fonction pour le Filtre
async function categories() {
  const response = await fetch("http://localhost:5678/api/categories");
  const categories = await response.json();
  console.log(categories);

  // Ciblage de ma balise <h2> dans <section id="portfolio">
  const portfolio = document.getElementById("portfolio");
  console.log(portfolio);
  //   Creation de ma <div> qui contiendra mes boutons filtres et rattachement à portfolio
  const filter = document.createElement("div");
  const gallery = document.querySelector(".gallery");

  filter.classList.add("filter");
  portfolio.insertBefore(filter, gallery);

  //   Creation de mon bouton "Tous" rattaché à ma <div class=filter>
  const filterTous = document.createElement("button");
  filterTous.innerText = "Tous";
  filter.appendChild(filterTous);

  //   Creation d'une boucle FOR pour chq élt de mon tableau categories
  for (let i = 0; i < categories.length; i++) {
    const btn = document.createElement("button");
    filter.appendChild(btn);
    btn.innerText = categories[i].name;
  }
}

categories();

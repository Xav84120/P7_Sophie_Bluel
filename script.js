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

    console.log(gallery);
  }
}

gallery();

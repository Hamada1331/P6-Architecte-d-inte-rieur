let imageGallery = [];

const fetchGalery = async () => {
    await fetch("http://localhost:5678/api/works")
        .then((res) => res.json())
        .then((promise) => {

            imageGallery = promise;
            console.log(imageGallery);
        })
};

const imageDisplay = async () => {

    await fetchGalery();
    document.querySelector("#portfolio > div").innerHTML = imageGallery.map((image) =>
        `
    <div class="gallery${image.id}" >
    <img class="galery img" src="${image.imageUrl}" alt = "${image.title}" =>
    <figcaption>${image.title}</figcaption>
    </div>
    `
    ).join("");

};

imageDisplay();

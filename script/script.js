function ssh() {
  function onload() {
    const petList = [
      {
        id: 1,
        name: "dog",
        url: "./pets/bat.gif",
        width: 100,
        height: 100
      },
      {
        id: 2,
        name: "croc",
        url: "./pets/crocs.gif",
        width: 100,
        height: 100
      }
    ];

    document.getElementById("pet_row").innerHTML = petList
      .map(
        (pet) => `
        <center>
        <div style="margin-top:-50px;margin-left:30px">
        <table>
          <tr>
            <td>
              <p style="font-weight:bold;">${pet.name.toUpperCase()}</p>
            </td>
            <td align="center">
              <img src="${pet.url}" width="${pet.width}" height="${
          pet.height
        }" class="img_style" />
            </td>
            <td>
              <button onclick="chooseMe('${
                pet.url
              }')" class="button_primary">Choose Me</button>
            </td>
          </tr>
        </table>
        </div>
        </center>`
      )
      .join("");
  }

  function chooseMe(petUrl) {
    let headerHide = document.getElementById("header");
    let pet = document.getElementById("pet_row");
    pet.style.display = "none";
    headerHide.style.display = "none";
    let petImage = document.createElement("img");
    petImage.src = petUrl;
    petImage.width = "150";
    petImage.height = "150";
    document.body.appendChild(petImage);
  }
  window.addEventListener("load", onload);
}

let script = document.createElement("script");
script.type = "text/javascript";
script.text = `(${ssh.toString()})()`;
script.onload = function () {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(script);

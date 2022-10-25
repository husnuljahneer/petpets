function onload() {
  const petList = [
    {
      id: 1,
      name: "dog",
      url: "./pets/animation_500_l9ny6hk3.gif",
      width: 150,
      height: 150
    },
    {
      id: 2,
      name: "cat",
      url: "./pets/animation_500_l9ny6hk3.gif",
      width: 150,
      height: 150
    }
  ];

  document.getElementById("pet_row").innerHTML = petList
    .map(
      (pet) => `
        <center>
        <div style="margin-top:-100px">
        <table>
          <tr>
            <td>
              <p style="font-weight:bold;">${pet.name.toUpperCase()}</p>
            </td>
            <td>
              <img src="${pet.url}" width="${pet.width}" height="${
        pet.height
      }" style="margin-bottom:80px" />
            </td>
            <td>
              <button onclick="chooseMe('${
                pet.name
              }')" class="button_primary">Choose Me</button>
            </td>
          </tr>
        </table>
        </div>
        </center>`
    )
    .join("");
}

function chooseMe(petName) {
  let headerHide = document.getElementById("header");
  let pet = document.getElementById("pet_row");
  pet.style.display = "none";
  headerHide.style.display = "none";
  let petImage = document.createElement("img");
  petImage.src = "./pets/animation_500_l9ny6hk3.gif";
  petImage.width = "150";
  petImage.height = "150";
  document.body.appendChild(petImage);
}

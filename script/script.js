function onLoadRun() {
  let petList = [
    {
      name: "dog",
      url: "./pets/animation_500_l9ny6hk3.gif",
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      speed: 1,
      direction: "right"
    },
    {
      name: "cat",
      url: "./pets/animation_500_l9ny6hk3.gif",
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      speed: 1,
      direction: "right"
    }
  ];

  function chooseMe() {
    let pet = document.getElementById("pet_row");
    pet.style.display = "none";
    let petImage = document.createElement("img");
    petImage.src = "./pets/animation_500_l9ny6hk3.gif";
    petImage.width = "100";
    petImage.height = "100";
    document.body.appendChild(petImage);
    updatePosition(100, 100);
    // test();
  }

  document.getElementById("pet_row").innerHTML = petList
    .map(
      (pet) => `
            <center>
            <table>
              <tr>
                <td>
                      <p>${pet.name}</p>
                </td>
                <td>
                      <img src="${pet.url}" width="${pet.width}" height="${pet.height}" style="margin-bottom:55px" />
                </td>
                <td>
                      <button onclick="chooseMe('${pet.name}')" style="background-color: #4CAF50; /* Green */ border: none; color: white; padding: 5px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">Choose Me</button>
                </td>
              </tr>
            </table>
            </center>
                    `
    )
    .join("");

  var petImage = document.createElement("img");

  function test() {
    console.log("test");
    let petImage = document.createElement("img");
    let petLeft = 0;
    let petTop = 0;
    let petSpeed = 10;
    let petDirection = "right";
    let petWidth = 1;
    petLeft += petSpeed;
    petImage.style.marginTop = petLeft + "px";
    // setInterval(test, 100);
  }
  const position = {
    x: 0,
    y: 0
  };
  function updatePosition(x, y) {
    petImage.style.left = (position.x = x) + "px";
    petImage.style.top = (position.y = y) + "px";
  }
}

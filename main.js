const loginAnimation = document.querySelector(".login-animation");
const body = document.querySelector("body");
const homePage = document.querySelector(".homepage");
const oldDesignButton = document.querySelector(".homepage .buttons button:nth-child(1)");
const newDesignButton = document.querySelector(".homepage .buttons button:nth-child(2)");
const oldDesign = document.querySelector(".old-design");
const newDesign = document.querySelector(".new-design");
function startApp() {
          oldDesignButton.addEventListener("click", () => {
                    homePage.style.display = "none";
                    oldDesign.style.display = "block";
          })
          newDesignButton.addEventListener("click", () => {
                    homePage.style.display = "none";
                    newDesign.style.display = "block";
                    body.style.display = "flex";
                    body.style.alignItems = "center";
                    body.style.justifyContent = "center";
          })
          setTimeout(() => {
                    loginAnimation.style.animation = "destroyLoginAnimation 2s linear";
                    setTimeout(() => {
                              homePage.style.display = "flex";
                              loginAnimation.style.display = "none";
                    },2000)
          }, 1500);
}
startApp();
const searchBoxContainer = document.querySelector(".search-box-container")
const searchBoxContainerInput = document.querySelector(".search-box-container input")
let boxShadow = false;
searchBoxContainerInput.addEventListener("click", () => {
          console.log("ali osman")
          console.log(boxShadow);
          if (boxShadow === false) {
                    searchBoxContainer.style.boxShadow = "0 4px 4px 0 rgba(0, 0, 0, 0.2), 046px 4px 0 rgba(0, 0, 0, 0.19)";
                    boxShadow = true;
                    console.log(boxShadow);
          }
          else {
                    searchBoxContainer.style.boxShadow = "none";
                    boxShadow = false;
          }
})
console.log(searchBoxContainer.className)
document.addEventListener("click", (e) => {
          if (boxShadow === true && e.target.className != searchBoxContainerInput.className) {
                    searchBoxContainer.style.boxShadow = "none";
                    boxShadow = false;
                    console.log("ibne")
          }
})
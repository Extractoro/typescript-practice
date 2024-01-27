const button = document.querySelector("button")! as HTMLButtonElement | null;

if (button) {
  button.addEventListener("click", () => {
    console.log("Click");
  });
}

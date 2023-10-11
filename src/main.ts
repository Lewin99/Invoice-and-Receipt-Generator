import { invoice } from "./classes/invoice.js";
import { listTemp } from "./classes/listTemp.js";
import { receipt } from "./classes/receipt.js";
import { added } from "./interfaces/added.js";

const form = document.getElementById("form") as HTMLFormElement;
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("toFrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amt") as HTMLInputElement;
const ul = document.getElementById("ul") as HTMLUListElement;
const title = document.getElementById("title");

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: added;

  if (type.value === "Invoice") {
    doc = new invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new receipt(toFrom.value, details.value, amount.valueAsNumber);
  }
  const list = new listTemp(ul);
  title.style.display = "block";
  list.render(doc, type.value, "end");
});

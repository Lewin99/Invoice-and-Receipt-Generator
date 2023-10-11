import { invoice } from "./classes/invoice.js";
import { listTemp } from "./classes/listTemp.js";
import { receipt } from "./classes/receipt.js";
const form = document.getElementById("form");
const type = document.getElementById("type");
const toFrom = document.getElementById("toFrom");
const details = document.getElementById("details");
const amount = document.getElementById("amt");
const ul = document.getElementById("ul");
const title = document.getElementById("title");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new receipt(toFrom.value, details.value, amount.valueAsNumber);
    }
    const list = new listTemp(ul);
    title.style.display = "block";
    list.render(doc, type.value, "end");
});

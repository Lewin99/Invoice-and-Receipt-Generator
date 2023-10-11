import { added } from "../interfaces/added.js";
export class listTemp {
  constructor(private container: HTMLUListElement) {}
  render(obj: added, heading: string, pos: "end" | "start") {
    const h4 = document.createElement("h4");
    const li = document.createElement("li");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = obj.add();
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

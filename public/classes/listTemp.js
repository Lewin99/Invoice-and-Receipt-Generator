export class listTemp {
    constructor(container) {
        this.container = container;
    }
    render(obj, heading, pos) {
        const h4 = document.createElement("h4");
        const li = document.createElement("li");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = obj.add();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}

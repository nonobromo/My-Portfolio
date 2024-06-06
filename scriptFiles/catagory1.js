let boxItems;
export let boxArr = [];

export function createHtmlCards() {
    const HTML_ITEMS = document.querySelector(".portfolio-items");
    fetch("./scriptFiles/htmlCssProjects.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(d => {
                const boxDiv = document.createElement("div");
                boxDiv.classList.add("box");

                const itemContent = document.createElement("div");
                itemContent.classList.add("item-content");

                const itemImg = document.createElement("img");
                itemImg.src = d.imgSrc
                itemImg.classList.add("item-img")

                const projTitle = document.createElement("h3");
                const projDesciption = document.createElement("p")
                const link = document.createElement("a");

                projTitle.innerHTML = d.projectTitle;
                projTitle.classList.add("item-title")
                itemContent.appendChild(projTitle);

                projDesciption.innerHTML = d.description
                projDesciption.classList.add("item-para");
                itemContent.appendChild(projDesciption);

                link.href = d.link;
                link.innerHTML = d.btnText;
                link.className = "btn btn-outline-dark";
                itemContent.appendChild(link)

                boxDiv.appendChild(itemImg);
                boxDiv.appendChild(itemContent);

                HTML_ITEMS.classList.add("fade-in");
                HTML_ITEMS.appendChild(boxDiv)
            })
            boxItems = document.querySelectorAll(".box");
            boxArr = [...boxItems];
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error);
        });

}


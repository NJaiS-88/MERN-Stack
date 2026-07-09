function addBox(title, creator, duration, url){
    const box = document.createElement("div");
    const imgbox = document.createElement("div");
    const img = document.createElement("img");
    img.src = url;
    img.alt = `thumbnail of video ${title}`;
    const infobox = document.createElement("div");
    const titlebox = document.createElement("div");
    const creatorbox = document.createElement("div");
    const timebox = document.createElement("div");
    img.classList.add("imgx");          // matches .imgx in CSS
    titlebox.classList.add("titlebox"); // matches .titlebox in CSS
    creatorbox.classList.add("creatorbox");
    infobox.classList.add("infobox");
    timebox.classList.add("timebox");
    imgbox.classList.add("imgbox");
    box.classList.add("box");
    titlebox.textContent = title;
    creatorbox.textContent = creator;
    timebox.textContent = duration;
    infobox.append(titlebox, creatorbox);
    imgbox.append(img, timebox);
    box.append(imgbox, infobox);
    const container = document.querySelector(".container");

    container.append(box);
}

const myform = document.getElementById("myForm");
myform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const creator = formData.get("creator");
    const duration = formData.get("time");
    const url = formData.get("url");
    addBox(title, creator, duration, url);
    myform.reset();
})
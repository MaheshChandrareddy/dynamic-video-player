let i=1;
let filterdata = async () => {
    let data = await window.fetch("./data.json");
    let value = await data.json();
    value.map(m => {
      let card = document.getElementById("card-img");
      let divChild = document.createElement("li");
      divChild.className = "card";
      divChild.innerHTML += `<div class="card" id="card-id">
                <img src="${m.video_image}"id="img">
                <div class="right-des">
                <h4>${m.video_description}</h4>
                <h6>${m.video_views}</h6>
                </div>
                </div>`;
      divChild.addEventListener("click", (e)=> {
        console.log("hi");
        i = 1;
        console.log(`${m.video_url}`);
        let videos = document.getElementById("video");
        videos.innerHTML = `<video src="${m.video_url}" id="video" class="video-con" controls autoplay "></video>`;
        let description = document.getElementsByClassName("description-con")[0];
        description.innerHTML = `<b>${m.video_name}</b><br>${m.video_description}<br>${m.video_views}<br>category :${m.category}<br>Hero :${m.hero}`;
        // !Comments container start
        let cmtSec = document.getElementsByClassName("comment-con")[0];
        cmtSec.innerHTML = `
      <nav class="user-input">
            <input id="user-input" class="" type="text">
            <button id="post-button">post</button>
          </nav>
           <nav id="user-comments" class="user-comments">
           <h3>COMMENTS : </h3>
          </nav> `;
        let inputs = document.getElementById("user-input");
        inputs.addEventListener("keyup", e => {
          if (e.key === "Enter" && inputs.value !== "") {
            let cmt1 = document.getElementById("user-comments");
            let val = document.getElementById("user-input").value;
            cmt1.innerHTML += `comment : ${i} <br> ${val}<br>`;
            i++;
            document.getElementById("user-input").value = null;
          }
        });
        let cmt = document.getElementById("user-comments");
        let btn = document.getElementById("post-button");
        btn.addEventListener("click", e => {
          if (inputs.value !== "") {
            let val = document.getElementById("user-input").value;
            cmt.innerHTML += `comment : ${i} <br> ${val}<br>`;
            document.getElementById("user-input").value = null;
            i++;
          }
        });
      })
      card.appendChild(divChild);
    });
};
filterdata();



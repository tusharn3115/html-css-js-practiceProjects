let arr = [
    {
        name: "Roses",
        img: "https://images.pexels.com/photos/109813/pexels-photo-109813.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "car",
        img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "mountains",
        img: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "dog",
        img: "https://images.pexels.com/photos/26793646/pexels-photo-26793646/free-photo-of-a-corgi-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        name: "bikers",
        img: "https://images.pexels.com/photos/27957826/pexels-photo-27957826/free-photo-of-two-people-riding-motorcycles-down-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "bike",
        img: "https://images.pexels.com/photos/1191109/pexels-photo-1191109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "forest",
        img: "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "snow",
        img: "https://images.pexels.com/photos/954710/pexels-photo-954710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "flowers",
        img: "https://images.pexels.com/photos/4402672/pexels-photo-4402672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
]


function showCards() {
    let clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.img}" >
        <div class="caption"></div>
        </div>`;
    });

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearch(){
    document.querySelector("#searchinput")
    .addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block"
    })

    document.querySelector("#searchinput")
    .addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none"
    })
}

showCards();
handleSearch();
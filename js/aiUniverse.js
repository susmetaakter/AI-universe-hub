// console.log('showing')

const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAllData(data.data.tools.slice(0, 6)));
};

const showAllData = (aiUniverses) => {
    const aiContainer = document.getElementById('ai-info');
    aiContainer.innerHTML = "";
    aiUniverses.forEach((aiUniverse) => {
        console.log(aiUniverse);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full h-full bg-base-100 shadow-2xl">
          <figure class="px-10 pt-10">
           <img src="${aiUniverse.image}" alt="Shoes" class="rounded-xl" />
          </figure>
        <div class="card-body">
        <div class="ml-7">
          <h1 class="card-title font-semibold text-xl mb-4">Features</h1>
          <p class="tex-darker">1 ${aiUniverse.features[0]}</p>
          <p class="tex-darker">2 ${aiUniverse.features[1]}</p>
          <p class="tex-darker">3 ${aiUniverse.features[2]}</p>
          </div>
          <div class="px-[25px]">
          <hr>
          </div>
          <div class="flex justify-between items-center">
          <div class="ml-7">
          <div>
          <h3 class="card-title font-semibold text-xl mb-3">${aiUniverse.name}</h3>
          </div>
          <div class="flex gap-3">
            <div>
            <img class="h-5 w-5" src="images/date.png" alt="">
            </div>
            <div>
            <p class="tex-darker">${aiUniverse.published_in}</p>
            </div>
          </div>
          </div>
          <div>
           <label for="my-model" class="btn bg-white hover:bg-white border-none"><img class="h-10 w-10 mr-4" src="images/arrow.png" alt=""></label>
          </div>
          </div>
         </div>
       </div>
      </div>
        `;
        aiContainer.appendChild(div);
    });
};

loadAllData();

const seeMore = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAllData(data.data.tools));
}
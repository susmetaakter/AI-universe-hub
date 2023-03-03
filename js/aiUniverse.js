// console.log('showing')

const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAllData(data));
};

const showAllData = (aiUniverses) => {
    const aiContainer = document.getElementById('ai-info');
    aiUniverses.data.tools.slice(0, 6).forEach((aiUniverse) => {
        console.log(aiUniverse);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full bg-base-100 shadow-2xl">
          <figure class="px-10 pt-10">
           <img src="${aiUniverse.image}" alt="Shoes" class="rounded-xl" />
          </figure>
        <div class="card-body">
        <div class="ml-7">
          <h1 class="card-title font-semibold text-[25px] mb-4">Features</h1>
          <p class="tex-darker">1 ${aiUniverse.features[0]}</p>
          <p class="tex-darker">2 ${aiUniverse.features[1]}</p>
          <p class="tex-darker">3 ${aiUniverse.features[2]}</p>
          </div>
          <div class="px-[25px]">
          <hr>
          </div>
       </div>
      </div>
        `;
        aiContainer.appendChild(div);
    });
};

loadAllData();
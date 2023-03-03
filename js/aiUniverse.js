// console.log('showing')

const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAllData(data));
};

const showAllData = (aiUniverses) => {
    const aiContainer = document.getElementById('ai-info');
    aiUniverses.data.tools.slice(0, 6).forEach((aiUniverse) => {
        console.log(aiUniverse.image);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
           <img src="${aiUniverse.image}" alt="Shoes" class="rounded-xl" />
          </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions">
       <button class="btn btn-primary">Buy Now</button>
        </div>
       </div>
      </div>
        `;
        aiContainer.appendChild(div);
    });
};

loadAllData();
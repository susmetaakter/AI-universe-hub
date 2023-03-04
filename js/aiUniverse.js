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
        // console.log(aiUniverse);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full h-full bg-base-100 shadow-2xl">
          <figure class="px-10 pt-10">
           <img src="${aiUniverse.image}" alt="Shoes" class="rounded-xl" />
          </figure>
        <div class="card-body">
        <div class="ml-7">
          <h1 class="card-title font-bold text-xl mb-4">Features</h1>
          <p class="tex-darker">1 ${aiUniverse.features[0] ? aiUniverse.features[0] : 'Not Found' }</p>
          <p class="tex-darker">2 ${aiUniverse.features[1] ? aiUniverse.features[1] : 'Not Found'}</p>
          <p class="tex-darker">3 ${aiUniverse.features[2] ? aiUniverse.features[2] : 'Not Found'}</p>
          </div>
          <div class="px-[25px]">
          <hr>
          </div>
          <div class="flex justify-between items-center">
          <div class="ml-7">
          <div>
          <h3 class="card-title font-bold text-xl mb-3">${aiUniverse.name}</h3>
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
           <label for="my-modal-3" class="btn bg-white hover:bg-white border-none">
                <img onClick="showDetails('${aiUniverse.id}')" class="h-10 w-10 mr-4" src="images/arrow.png" alt="">
           </label>
          </div>
          </div>
         </div>
       </div>
      </div>
        `;
        aiContainer.appendChild(div);
    });
};

const showDetails = (id) =>{
   const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
   fetch(URL)
   .then(res => res.json())
   .then(data =>  showAiModal(data.data))
}

const showAiModal = (value) => {
    console.log(value);
    const container = document.getElementById('modal-info');
    const modals = container.getElementsByClassName('modal');
    let i = 0;
    while(modals.length > 0){
        modals[i].parentNode.removeChild(modals[i]);
        i++;
    }
    const div = document.createElement('div');
    div.classList.add('modal');
    div.innerHTML = `
    <div class="modal-box relative flex gap-5 max-w-5xl max-h-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div class="border p-5 border-red-400 rounded-lg bg-red-50 ">
      <h3 class="text-lg font-bold">${value.description}</h3>
      <div class="flex gap-2 mb-2">
      <div class="bg-white rounded-lg p-3 text-green-600 font-bold text-sm">
      <p>${value.pricing[0].price ? value.pricing[0].price : 'Not Found'}</p>
      <p>${value.pricing[0].plan ? value.pricing[0].plan : 'Not Found'}</p>
      </div>
      <div class="bg-white rounded-lg text-orange-500 font-bold p-3 text-sm">
      <p>${value.pricing[1].price ? value.pricing[1].price : 'Not Found'}</p>
      <p>${value.pricing[1].plan ? value.pricing[1].plan : 'Not Found'}</p>
      </div>
      <div class="text-sm font-bold bg-white rounded-lg p-3 text-red-600">
      <p>${value.pricing[2].price ? value.pricing[2].price : 'Not Found'}</p>
      <p>${value.pricing[2].plan ? value.pricing[2].plan : 'Not Found'}</p>
      </div>
      </div>
      <div class="flex">
      <div>
      <h1 class="font-bold text-xl mb-2">Features</h1>
      <p class="ml-2 text-sm">.${value.features[1].feature_name ? value.features[1].feature_name : 'Not Found'}</p>
      <p class="ml-2 text-sm">.${value.features[2].feature_name ? value.features[2].feature_name : 'Not Found'}</p>
      <p class="ml-2 text-sm">.${value.features[3].feature_name ? value.features[3].feature_name : 'Not Found'}</p>
      </div>
      <div class="ml-10">
      <h1 class="font-bold text-xl mb-2">Integrations</h1>
      <p class="ml-2 text-sm">.${value.integrations[0] ? value.integrations[0] : 'Not Found'}</p>
      <p class="ml-2 text-sm">.${value.integrations[1] ? value.integrations[1] : 'Not Found'}</p>
      <p class="ml-2 text-sm">.${value.integrations[2] ? value.integrations[2] : 'Not Found'}</p>
      </div>
      </div>
      </div>
      <div class="border p-5 rounded-lg">
      <img src="${value.image_link[0]}" alt="">
      <p>${value.accuracy.score ? value.accuracy.score : 'Not Found'}</p>
      <h1 class="py-4 text-lg font-bold mt-5">${value.input_output_examples[0].input ? value.input_output_examples[0].input : 'Not Found'}</h1>
      <p class="py-4 text-xs">${value.input_output_examples[0].output ? value.input_output_examples[0].output : 'Not Found'}</p>
      </div>
   </div>
    `;
    container.appendChild(div);
}

loadAllData();
const seeMore = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAllData(data.data.tools));
}
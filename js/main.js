const heroItem = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
  const contents = data.data;
  displayContent(contents);
};
heroItem();

const displayContent = (contents) => {
  const mainContainer = document.getElementById("main-content");

  contents.forEach((content) => {
    const contentCard = document.createElement("div");
    contentCard.classList = `p-2 bg-gray-100 shadow-xl rounded `;
    contentCard.innerHTML = `
             <figure>
              <img class="w-full h-[200px] "
                src="${content.thumbnail}"
                alt=""
              />
              </figure>
    
              <div  class="mt-3 flex items-center gap-3">
                <img class="w-10 h-10 rounded-full "
                src="${content.authors[0].profile_picture}"
                alt=""
              />
              
              <div>
              <p class="text-lg font-semibold">${content.authors[0].profile_name}</p>
              <h1 class="text-sm">${content.others.views}</h1>
              </div>
            
              </div>
    `;

    mainContainer.append(contentCard);
  });
};

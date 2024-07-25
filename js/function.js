function createCard(data) {
  return `
    <div class="card" data-id ='${data.id}'>
    <img src="${data.attributes.image}" alt="">
      <h3>${data.attributes.title}</h3>
      <p>${data.attributes.price}</p>
    </div>
    
    
    
    
    `;
}

export { createCard };

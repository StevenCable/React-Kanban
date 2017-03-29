module.exports = function updateCardReq(card){

   return new Promise( (resolve, reject ) => {
    function reqListener(){
      let data = JSON.parse(this.responseText);
      console.log('you can\'t change me!: ', data);
      resolve(data);
    }
    // const editCard = `_key=${card._key}&status=${card.status}&priority=${card.priority}`;

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener); 
    oReq.open('PUT', '/api/kanban/editCard', true);
    oReq.setRequestHeader("Content-type", "application/json");
    console.log('xhr card: ', card);
    oReq.send(JSON.stringify(card));
    // oReq.resolve(editCard);

  });
};
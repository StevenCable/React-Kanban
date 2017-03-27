module.exports = function getCardsReq(cards) {
  return new Promise( (resolve, reject ) => {
    function reqListener(){
      let data = JSON.parse(this.responseText);
      console.log('daaaata: ', data);
      resolve(data);
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener); 
    oReq.open('GET', '/api/kanban/allcards', true);
    oReq.send(cards);
  });
};

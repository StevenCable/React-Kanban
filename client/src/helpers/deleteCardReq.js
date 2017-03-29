import getCardsReq from './getCardsReq.js';

module.exports = function deleteCardReq(card) {
  return new Promise( (resolve, reject ) => {
    function reqListener(){
      getCardsReq();
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener); 
    oReq.open('DELETE', '/api/kanban/:id', true);
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send();
  });
};

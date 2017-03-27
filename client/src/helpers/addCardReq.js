module.exports = function addCardReq(card) {
  return new Promise( (resolve, reject ) => {
    function reqListener(){
      let data = JSON.parse(this.responseText);
      resolve(data);
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener); 
    oReq.open('POST', '/api/kanban/allcards', true);
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(card));
  });
};

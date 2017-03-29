module.exports = function updateCardReq(card){

   return new Promise( (resolve, reject ) => {
    function reqListener(){
      let data = JSON.parse(this.responseText);
      resolve(data);
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener); 
    oReq.open('PUT', '/api/kanban/editCard', true);
    oReq.setRequestHeader("Content-type", "application/json");
    console.log('xhr card: ', card);
    oReq.send(JSON.stringify(card));

  });
};
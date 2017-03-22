import React from 'react';
import Card from '../Components/Card.js';

export default class Board extends React.Component {
  constructor(){
    super();

    this.state = {
      queueCards: [],
      currentCards: [],
      completedCards: []
    };

    ['queue', 'current', 'completed'].map((cards) =>{
      return (() =>{
        let oReq = new XMLHttpRequest();
        const reqListener = () =>{
          console.log('oreq: ', oReq.response);
          this.setState(
            {[`${cards}Cards`]: JSON.parse(oReq.response)}
          );
        };
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", `/api/kanban/${cards}`);
        oReq.send();
      })();
    });
  }

 

 // getQueue = () => {
 //        let oReq = new XMLHttpRequest();
 //        oReq.addEventListener('load', (event) => {
 //            this.setState({
 //                queueCards: JSON.parse(oReq.response)
 //            });
 //        });
 //        oReq.open('GET', '/api/kanban/queue');
 //        oReq.send();
 //    }
 //    getCurrent = () => {
 //        let oReq = new XMLHttpRequest();
 //        oReq.addEventListener('load', (event) => {
 //            this.setState({
 //                currentCards: JSON.parse(oReq.response)
 //            });
 //        });
 //        oReq.open('GET', '/api/kanban/current');
 //        oReq.send();
 //    }
 //    getCompleted = () => {
 //        let oReq = new XMLHttpRequest();
 //        oReq.addEventListener('load', (event) => {
 //            this.setState({
 //                completedCards: JSON.parse(oReq.response)
 //            });
 //        });
 //        oReq.open('GET', '/api/kanban/completed');
 //        oReq.send();
 //    }


  // getCurrent(){
  //   var oReq = new XMLHttpRequest();
  //   oReq.addEventListener("load", function(event){
  //     this.setState({currentCards: JSON.parse(oReq.response)});
  //   });
  //   oReq.open("GET", "/api/kanban/current");
  //   oReq.send();    
  // }
  // getComplete(){
  //   var oReq = new XMLHttpRequest();
  //   oReq.addEventListener("load", function(event){
  //     this.setState({completedCards: JSON.parse(oReq.response)});
  //   });
  //   oReq.open("GET", "/api/kanban/completed");
  //   oReq.send();    
  // }

  render(){
    return(
      <div className="board">
        {['queue', 'current', 'completed'].map((group) => {
          return(
          <div className={group}>
            <div className="status">
              {group.toUpperCase()}
            </div>
              {
                this.state[`${group}Cards`].map((card) => {
                  const {id, priority, status, title} = card;
                  return(<Card 
                      _key={id}
                      title={title}
                      status={status}
                      priority={priority}
                  />)
                })
              }
          </div>
          )
        })}
      </div>
    )
  }

}
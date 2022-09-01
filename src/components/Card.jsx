import React from 'react';

function Card(props) {

  return (
    <div style={{margin:"0 auto", width: "500px", height:"200px", border:"red 5px solid"}} >
    <h2>Asal mı Değil mi ?</h2>
    <p> {props.sonuc}  </p>
 
    </div>
  )
}

export default Card
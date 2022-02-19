export default function ViewList(props){
  console.log(props.data);
return(

    props.data.map(element =>{
      return(
      <div key={element.ID}>
<h2>name {element.name} </h2>

<img src={element.image} alt="ok" />

<h2>rank {element.rank}</h2>

<h2>topText {element.topText}</h2>
</div>)
    })
)
  }

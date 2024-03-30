import './card.css'


const card = (props) => {
  return (
    <>
      <div className="card-object">
      <div className="centered-text">{props.top}</div>
      <h2>{props.bottom}</h2>
      </div>
    </>
  )
}
  
export default card
  
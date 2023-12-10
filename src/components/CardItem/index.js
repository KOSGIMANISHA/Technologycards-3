// Write your code here.
const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="card-heading">{title}</h1>
        <p className="card-des">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="card-img" alt={title} />
        </div>
      </div>
    </li>
  )
}
export default CardItem

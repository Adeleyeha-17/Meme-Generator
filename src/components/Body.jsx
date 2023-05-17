
export default function Body (props){
  return (
      <div className="body">
        <div>
          <img src={props.item.imageUrl} alt="" className="body--img"/>
        </div>
        <div>
            <div className="location--top">
              <img src="./location.png" alt="" className="location--icon" />
              <h2 className="location--heading">{props.item.location}</h2>
              <a className="location--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="location--bottom">
              <h2 className="location--title">{props.item.title}</h2>
              <h2 className="location--date">{props.item.startDate} - {props.item.endDate}</h2>
              <h2 className="location--description">{props.item.description}</h2>
            </div>
            <div className="line--breaker"></div>
        </div>
        
      </div>
      
  )
}
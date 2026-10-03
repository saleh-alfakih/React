// import PropTypes from "prop-types";
import defaultImg from "./assets/i.jpg";

// using default Props and NO need to use the props Object anymore
export default function Card({
  img = defaultImg,
  title = "Default Title",
  description = "kfoawremfgkq wrefglwkmrfnqlwkrefl",
}) {
  return (
    <div className="card">
      {/* we will replace props.img with img etc. */}
      <img src={img} className="card-img" />
      <h2 className="card-titel">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

// React 19 removed PropTypes validation entirely
// Even if you install the prop-types package and assign types 
// via MyComponent.propTypes = { ... }, React 19 will silently ignore
//  them during development renders.

// propType: properties type
// Card.propTypes = {
//   img: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

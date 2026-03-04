import { Link } from "react-router-dom";
export default function FeatureCard({ image, title, description }) {
  return (
    <div className=" item-card h-100 w-100">
      <div className="img-wrapper">
        <img src={image} alt={title} className="mb-3 img-fluid rounded" />
      </div>
      <div className="entry-content">
        <h5 className="text-primary">{title}</h5>
        <hr className="w-25 text-primary  opacity-100" />
        <p>{description}</p>
      </div>
    </div>
  );
}

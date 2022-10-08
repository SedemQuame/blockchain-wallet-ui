import Suitcase from "../../Assets/images/suitcase.png";

function JobDetailSection(props) {
  return (
    <>
      <div className="my-4">
        <div className="d-flex gap-3">
          <img
            style={{ height: "250px", width: "250px" }}
            src={props.image ? props.image : Suitcase}
            className="img-fluid rounded-start d-flex align-items-center"
            alt="company-logo"
          />
          <div className="py-3 d-flex flex-column">
            <h2 className="job-detail-section-title display-4">{props.name}</h2>
            <small className="">{props.company}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetailSection;

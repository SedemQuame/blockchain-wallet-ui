function OverviewComponent(props) {
    return (<>
        <div>
            <h5 className="mb-1">{props.title}</h5>
            <div className="card border-0 bg-light">
                <div className="card-body d-grid gap-3">
                    <div style={{height: "40px"}} className="flex justify-start gap-2">
                        <button style={{height: "40px", width: "40px"}} className="btn-success text-center rounded-1">
                            <i className="fas fa-map-marker"></i>
                        </button>
                        <div className={"flex flex-col"}>
                            <strong>Location</strong>
                            <small className="overview-muted-text">{props.location || "London, Uk"}</small>
                        </div>
                    </div>

                    <div style={{height: "40px"}} className="flex justify-start gap-2">
                        <button style={{height: "40px", width: "40px"}} className="btn-success text-center rounded-1">
                            <i className="fas fa-users"></i>
                        </button>
                        <div className={"flex flex-col"}>
                            <strong>Company Size:</strong>
                            <small className="overview-muted-text">{props.size || "1-5"}</small>
                        </div>
                    </div>

                    <div style={{height: "40px"}} className="flex justify-start gap-2">
                        <button style={{height: "40px", width: "40px"}} className="btn-success text-center rounded-1">
                            <i className="fas fa-building"></i>
                        </button>
                        <div className={"flex flex-col"}>
                            <strong>Industry</strong>
                            <small className="overview-muted-text">{props.category || "Technology"}</small>
                        </div>
                    </div>

                    <div style={{height: "40px"}} className="flex justify-start gap-2">
                        <button style={{height: "40px", width: "40px"}} className="btn-success text-center rounded-1">
                            <i className="far fa-money-bill-alt"></i>
                        </button>
                        <div className={"flex flex-col"}>
                            <strong>Avg. Salary</strong>
                            <small className="overview-muted-text">{props.salary || "$15-$20k"}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default OverviewComponent;
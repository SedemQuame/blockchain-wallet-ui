function TagsBar(props) {
    let jobTags = [
        {
            icon: <i className="fas fa-map-marker"></i>,
            tagName: "Location",
        },
        {
            icon: <i className="far fa-money-bill-alt"></i>,
            tagName: "Salary",
        }
    ];
    return (
        <>
            <ul className={props.isVertical ? "d-flex gap-1" : "d-grid gap-1"}>
                {jobTags.map((job, index) => (
                    job !== "" ? <li className={"text-muted"}><small>{job.icon} {props.tags[index]}</small></li> : null
                ))}
            </ul>
        </>
    );
}

export default TagsBar;

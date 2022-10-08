import React from "react";

const Breadcrumbs = (props) => {
  return (
    <div>
        <div className="d-grid gap-2 my-4">
            <h3>{props.title}</h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
        </div>
    </div>
  );
};

export default Breadcrumbs;

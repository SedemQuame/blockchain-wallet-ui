function ResetPasswordPage() {
    return (
        <>
            <div className="row bg-light d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                <div className="col-12 col-md-6 ">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Password Reset Information</h5>
                            <p className="card-text">Fill the form to change your password.</p>
                            <form action="">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Old Password</label>
                                        <input type="password"
                                               className="form-control"
                                               name="password"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">New Password</label>
                                        <input type="password"
                                               className="form-control"
                                               name="confirm_password"
                                        />
                                    </div>
                                </div>
                                <div className="d-grid gap-3">
                                    <input type="submit" className="btn btn-success" value="Reset"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordPage;
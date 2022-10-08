function SocialAuth() {
  return (
    <>
      <div className="d-flex justify-content-around">
        <button className="btn btn-danger" type="button">
          Google
        </button>
        <button className="btn btn-primary" type="button">
          Facebook
        </button>
        <button className="btn btn-info" type="button">
          LinkedIn
        </button>
      </div>
    </>
  );
}

export default SocialAuth;

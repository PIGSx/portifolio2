import "./error.css";

const Error = () => {
  return (
    <div>
      <div className="container container-star">
        {[...Array(32)].map((_, index) => (
          <div key={index} className={`star-${index < 16 ? 1 : 2}`}></div>
        ))}
      </div>
      <div className="container container-bird">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bird bird-anim">
            <div className="bird-container">
              <div className="wing wing-left">
                <div className="wing-left-top"></div>
              </div>
              <div className="wing wing-right">
                <div className="wing-right-top"></div>
              </div>
            </div>
          </div>
        ))}
        <div className="txt">
          <h1>404</h1>
          <h3>Oops. page not found :´(</h3>
          <a href="index.php" className="btn">
            Go back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;

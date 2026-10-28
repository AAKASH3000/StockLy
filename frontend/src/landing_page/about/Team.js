import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 bt-5 border-top">
        <h1 className=" text-center  ">People</h1>
        <div className="row  p-5">
          <div className="col p-5 mt-5 text-center">
            <img
              src="media\images\aakash.png "
              className=""
              style={{ width: "65%", borderRadius: "100%" }}
            />
            <h4 className="mt-4 text-muted">Aakash Bairagi</h4>
          </div>
          <div className="col p-5">
            <p className="text-muted lh-lg p-5">
              Aakash bootstrapped his journey in the field of learning, driven
              by the challenges he faced as a student while building his skills
              and understanding of technology. Today, he is focused on growing
              his knowledge and shaping his future through continuous learning
              and practice.
              <br></br>
              <br></br>
              He is a dedicated student with a strong interest in web
              development and modern technologies.
              <br></br>
              <br></br>
              Learning and coding are his zen.
              <br></br>
              <br></br>
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>
              /
              <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>
              /
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

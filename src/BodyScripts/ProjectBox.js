import React from "react";
import { connect } from "react-redux";

var objIndex = null,
  commentLen = {};

function ProjectBox({ Tech, Details, ProjectElment }) {

  const Technologies = () => {
    console.log(Tech == "undefined");
    return <></>;

    // Tech.map(tech => <span key={Math.random()}>{tech}</span>)
  };

  let backSRC = { backgroundImage: "url(" + Details.IMG + ")" },
    feedID = (Details.Header + Details.indexNum)
      .toLocaleLowerCase()
      .replace(/\s/g, "");

  let comment = commentLen[feedID] ? commentLen[feedID] : 0;

  return (
    <div
      className="Box col-md-6 col-sm-12"
      onClick={event => ProjectElment(event, Details.indexNum)}
    >
      <div className="Description">
        <span className="imgBox" style={backSRC} />
        <div>
          <p>{Details.Description}</p>

          <span className="projectDetails">
            {/* <span> */}
            <a href={Details.Source} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
              Source
            </a>

            <a
              href={Details.Launch}
              target="_blank"
              rel="noopener noreferrer"
              className="Launch"
            >
              <i className="fas fa-rocket" />
              Launch
            </a>

            <a href="##" className="Feedback">
              <i className="fas fa-comment-alt" />
              <small id="fedCnt">{comment}</small>
              Feedback
            </a>
          </span>
        </div>
      </div>
      <div className="Details">
        <h2>{Details.Header}</h2>
        {/* <Technologies /> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  if (state) {
    commentLen = state.FeedLength;
  }
  return {};
};

export default connect(mapStateToProps)(ProjectBox);

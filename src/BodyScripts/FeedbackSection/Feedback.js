import React, { Component } from "react";
import "../../css/Feedback.css";
import anonymousIMG from "../../IMG/person.jpg";
import fire from "./configKey";
import { connect } from "react-redux";
import TimeHandler from "./TimeHandler";

const db = fire.firestore();

class Feedback extends Component {
  state = {
    textLength: 500,
    feedBack: {}
  };
  componentDidMount() {
    document.querySelector("#commentBTN").setAttribute("disabled", "disabled");
    this.handlesPropsFeedLength();

    // Loads all feed back to comment sections
    this.getsFirebaseData();
  }

  // Handles typing feedback
  handleTextarea = () => {
    var wordLngth = document.querySelector("textarea").value.length;
    if (wordLngth >= 1) {
      document
        .querySelector("#commentBTN")
        .removeAttribute("disabled", "disabled");
    } else {
      document
        .querySelector("#commentBTN")
        .setAttribute("disabled", "disabled");
    }
    this.setState({
      textLength: 500 - wordLngth
    });
  };

  // Handles Publishing a comment
  handlePublicComment = () => {
    let textValue = document.querySelector("textarea"),
      feedID = this.props.feedID,
      commentInfo = { comment: textValue.value, time: new Date().getTime() },
      comment = this.state.feedBack[feedID]
        ? [...this.state.feedBack[feedID], commentInfo]
        : [commentInfo];

    this.cancelComment();
    this.handleTextarea();

    this.setState(
      {
        feedBack: {
          ...this.state.feedBack,
          [feedID]: comment
        }
      },
      () => {
        this.handlesPropsFeedLength();

        // Sets up and triggers a post request to firebase
        this.postDataToFirebase({ [feedID]: commentInfo });
      }
    );
  };

  getsFirebaseData = () => {
    console.log("Getting");

    let feedbacks = {};

    db.collection("MyFeedBack")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          feedbacks[doc.id] = Object.keys(doc.data()).map(data => {
            return { comment: doc.data()[data], time: data };
          });
        });

        // Sets firebase data to state
        this.setState(
          {
            feedBack: {
              ...feedbacks
            }
          },
          () => this.handlesPropsFeedLength()
        );
      })
      .catch(err => console.log(err));
  };

  postDataToFirebase = data => {
    let objKey = Object.keys(data)[0];
    db.collection("MyFeedBack")
      .doc(objKey)
      .set({ [data[objKey].time]: data[objKey].comment }, { merge: true })
      .then(err => {
        if (err) console.log("Something Went Wrong ----> ", err);
      });
  };

  // Clear the comment Section
  cancelComment = () => {
    document.querySelector("textarea").value = "";
    this.handleTextarea();
  };

  handlesPropsFeedLength = () => {
    var tempFeed = {},
      localFeed = this.state.feedBack;

    Object.keys(localFeed).forEach(feed => {
      tempFeed[feed] = this.state.feedBack[feed].length;
    });

    this.props.feedLength(tempFeed);
  };

  render() {
    let feedID = this.props.feedID,
      commentLen = this.state.feedBack[feedID]
        ? this.state.feedBack[feedID].length
        : 0;

    //   People Comments
    const PeopleComments = () => {
      if (this.state.feedBack[feedID]) {
        return this.state.feedBack[feedID].map(data => {
          return (
            <section className="peopleFeedback" key={Math.random()}>
              <div className="vote">
                <i className="fas fa-arrow-up" />
                <small>{0}</small>
                <i className="fas fa-arrow-down" />
              </div>
              <img src={anonymousIMG} alt="Anonymous User" />
              <div className="personComment">
                <p>{data.comment}</p>
                <small>Posted {TimeHandler(data.time)}</small>
              </div>
            </section>
          );
        });
      } else {
        return <></>;
      }
    };

    return (
      <div
        className="FeedBackClass"
        onClick={event => {
          if (event.target.classList[0] === "FeedBackClass") {
            this.props.FeedBack("Remove");
          }
        }}
      >
        <div className="feedContainer">
          <div className="innerContainer">
            <section className="filter">
              <span>{commentLen} Comments</span>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Newest
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Oldest
                </label>
              </div>

              <i
                className="fas fa-times"
                onClick={() => this.props.FeedBack("Remove")}
              />
            </section>

            <section className="comment">
              <textarea
                placeholder="Add Public FeedBack"
                onInput={event => this.handleTextarea(event)}
                maxLength="500"
              />
              <div className="wordCnt">
                <span>{this.state.textLength} words left</span>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.cancelComment}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="commentBTN"
                    onClick={this.handlePublicComment}
                  >
                    Comment
                  </button>
                </div>
              </div>
            </section>
            <div className="peopleCommentBox">
              <PeopleComments />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    feedLength: data => {
      dispatch({ type: "FEEDLENGTH", data: data });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Feedback);

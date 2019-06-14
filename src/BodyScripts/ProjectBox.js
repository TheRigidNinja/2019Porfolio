import React from "react";

export default function ProjectBox({ Tech, Header, Details, FilterCommands }) {
  Details = Details[0];

  // Rules to filter projects
  const filterState = () => {
    let filterValue = false;

    FilterCommands.split("/").forEach(element => {
      if (Tech.filter(filt => filt.match(element)).length !== 0) {
        filterValue = true;
      } else if (element === "Website") {
        if (Details.Header.includes("Site")) {
          filterValue = true;
        }
      }
    });

    return filterValue;
  };

  if (FilterCommands === "All" || filterState()) {
    const Technologies = () => {
      const Technologies = Tech.map(tech => (
        <span key={Math.random()}>{tech}</span>
      ));
      return <>{Technologies}</>;
    };

    var backSRC = { backgroundImage: "url(" + Details.IMG + ")" };

    return (
      <div className="Box col-md-6 col-sm-12">
        <div className="Description">
          <span className="imgBox" style={backSRC} />
          {/* <img src={Details.IMG} alt="Project"/> */}
          <div>
            <p>{Details.Description}</p>
            <span>
              <a
                href={Details.Source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
              <a
                href={Details.Launch}
                target="_blank"
                rel="noopener noreferrer"
                className="Launch"
              >
                Launch
              </a>
            </span>
          </div>
        </div>
        <div className="Details">
          <h2>{Details.Header}</h2>
          <Technologies />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

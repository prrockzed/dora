const Experience = ({ userData }) => {
  const exp = userData.data.skills;
  exp.sort((a, b) => {
    // Compare sequence numbers first
    if (a.sequence !== b.sequence) {
      return a.sequence - b.sequence;
    } else {
      // If sequence numbers are equal, compare percentages
      return b.percentage - a.percentage; // Sorting in descending order of percentage
    }
  });

  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {[...Array(exp.length)].map((_, index) =>
            exp[index].enabled ? (
              <div className="experience-item" key={exp[index]._id}>
                <div className="experience-info">
                  <p>
                    {exp[index].name}{" "}
                    <img
                      src={exp[index].image.url}
                      alt="image"
                      style={{ height: "0.8em", marginLeft: "0.5em" }}
                      key={exp[index].image._id}
                    />
                  </p>
                  <p>{exp[index].percentage}%</p>
                </div>
                <div
                  className="progress-line"
                  data-percent={`${exp[index].percentage}%`}
                >
                  <span />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};
export default Experience;

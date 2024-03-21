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
          {[...Array(exp.length)].map((_, index) => (
            <div className="experience-item" key={exp[index]._id}>
              <div className="experience-info">
                <p>{exp[index].name}</p>
                <p>{exp[index].percentage}%</p>
              </div>
              <div
                className="progress-line"
                data-percent={`${exp[index].percentage}%`}
              >
                <span />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;

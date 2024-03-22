import dynamic from "next/dynamic";
const PortfolioTimeline = dynamic(() => import("./PortfolioTimeline"), {
  ssr: false,
});
const Works = ({ userData }) => {
  return (
    <section className="works-section" id="works">
      <div className="container">
        {/* Work Title */}
        <div className="section_title wow fadeInUp center">
          <p>Portfolio</p>
          <h2>My Timeline</h2>
        </div>
        {/* Work Isotope */}
        <PortfolioTimeline userData={userData} />
      </div>
    </section>
  );
};
export default Works;

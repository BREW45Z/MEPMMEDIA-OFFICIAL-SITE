import { markdownify } from "@lib/utils/textConverter";

function About({ data }) {
  const { frontmatter } = data;
  const { title, About, team } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center text-primary font-normal")}
        <div className="section-content mt-6">
          {About.map((section, index) => (
            <div key={index} className="mb-8">
              <div className="section-head">
                {markdownify(section.title, "h3", "text-primary mb-4")}
              </div>
              <div className="section-body">
                {markdownify(section.answer, "p", "leading-relaxed")}
              </div>
            </div>
          ))}
        </div>
          
        <div>
        <div className="text-base">
     <h4 className="text-primary gap-1"> Major Achievements</h4>
  <h5>Over the years, we have reached several milestones:</h5>
  <ul className="h6 gap-4 mt-2">
  <li> - Achieved a major corporate event, establishing a strong reputation in 2007. [First Major Project]</li>
  <li> - Expanded portfolio to include comprehensive logistics management in 2009. [Expansion of Services]</li>
  <li> - Expanded operations within multiple regions in Nigeria in 2012. [Geographic Expansion]</li>
  <li> - Celebrated 10 years of growth and innovation in 2016. [10th Anniversary]</li>
  <li> - Recruited top professionals, enhancing capabilities in 2018. [Growth in Team]</li>
  <li> - Formed partnerships with leading suppliers and technology providers in 2022. [Strategic Partnerships]</li>
  <li> - Recognized as a market leader in corporate events management in 2023. [Market Leadership]</li>
  </ul>
</div>

        </div>
        <div className=" team-section mt-12">
          {markdownify("Our Team", "h2", "text-center text-primary font-normal mb-8")}
          <div className="team-members  justify-center row">
            {team.map((member, index) => (
              <div key={index} className=" col-12 md:col-4 lg:col-3 mb-8">
                <div className=" team-member p-6 justify-center items-center shadow text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                  />
                  {markdownify(member.name, "h4", "text-primary", "font-semibold")}
                  {markdownify(member.position, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default About;

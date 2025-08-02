import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';

const AboutSection = () => {
 const teamMembers = [
  {
    name: "Anitha Reddy",
    role: "Executive Director",
    image: teamMember1,
    description: "Brings over 15 years of leadership experience in community development and rural upliftment across South India."
  },
  {
    name: "Karthik Rajan",
    role: "Program Manager",
    image: teamMember2,
    description: "Leads mission-driven programs with a focus on education, women empowerment, and sustainable livelihoods."
  },
  {
    name: "Deepika Narayanan",
    role: "Community Coordinator",
    image: teamMember3,
    description: "Works closely with local volunteers to strengthen ties with tribal and rural communities, ensuring inclusive participation."
  }
];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About HopeForward
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2015, HopeForward began as a small community initiative with a simple belief: 
              every person deserves access to opportunity, dignity, and hope. What started as a local food 
              drive has grown into a global movement that touches lives across multiple continents.
            </p>
            
            <p>
              Our organization is built on the foundation of three core values: <strong className="text-primary">Compassion</strong>, 
              <strong className="text-secondary"> Community</strong>, and <strong className="text-primary">Commitment</strong>. 
              We believe that sustainable change happens when communities are empowered to create their own solutions, 
              supported by resources, knowledge, and unwavering partnership.
            </p>
            
            <p>
              Today, HopeForward operates programs in education, healthcare, environmental sustainability, 
              and economic empowerment. Our approach is always community-led, ensuring that the voices 
              and needs of those we serve guide every decision we make.
            </p>
          </div>

          <div className="mt-12">
            <button className="btn-hero">
              Learn More About Our Work
            </button>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet Our Team
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate leaders dedicated to creating positive change and empowering communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h4>
                
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Values
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Compassion</h4>
              <p className="text-muted-foreground">Leading with empathy and understanding in everything we do.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Community</h4>
              <p className="text-muted-foreground">Building stronger communities through collaboration and partnership.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Commitment</h4>
              <p className="text-muted-foreground">Dedicated to creating lasting, sustainable positive change.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

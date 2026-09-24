import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Users, Award, Calendar, ExternalLink } from 'lucide-react';
import LeafletMap from '@/components/ui/leaflet';
import soeBuilding from '@/assets/SOE_building.jpg';
import jnuPhoto from '@/assets/JNU_photo.jpg';

const AboutSection: React.FC = () => {
  const getPublicUrl = (filename: string) => {
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${filename}`;
  };

 
  const invitedSpeakers = [
    {
      name: 'Muhaged A. Al-Antari',
      affiliation: 'Sejong University, South Korea'
    },
    {
      name: 'Krishna Kumar',
      affiliation: 'University of Auckland, New Zealand'
    },
    {
      name: 'R.S. Aziz',
      affiliation: 'South Metropolitan TAFE, Perth, Australia'
    },
    {
      name: 'Ramesh Bansal',
      affiliation: 'University of Sharjah, UAE'
    }
  ];

  const organizers = [
    {
      name: 'Ashwini Kumar Arya',
      affiliation: 'SoE, JNU, New Delhi'
    },
    {
      name: 'B. Lakshmi Priya',
      affiliation: 'SoE, JNU, New Delhi'
    },
    {
      name: 'Benay Ray',
      affiliation: 'JNU, SoE, New Delhi'
    },
    {
      name: 'Kethavath Kranthi Kumar',
      affiliation: 'SoE, JNU, New Delhi'
    },
    {
      name: 'Lavish Kumar Singh',
      affiliation: 'SoE, JNU, New Delhi'
    }
  ];

  const technicalAdvisoryCommittee = [
    {
      name: 'Aishwari Talhan',
      affiliation: 'University at Albany, New York, USA'
    },
    {
      name: 'Arjun Kumar',
      affiliation: "Xi'an Jiaotong-Liverpool University, China"
    },
    {
      name: 'Fatima Kakepoto',
      affiliation: 'Zhejiang Normal University, China'
    },
    {
      name: 'Krishna Kumar',
      affiliation: 'University of Auckland, New Zealand'
    },
    {
      name: 'Mugahed A. Al-Antari',
      affiliation: 'Sejong University, South Korea'
    },
    {
      name: 'R. Sahid Aziz',
      affiliation: 'South Metropolitan TAFE, Australia'
    },
    {
      name: 'Shyam Narayan Singh Yadav',
      affiliation: 'imec, Belgium'
    },
    {
      name: 'S. Purushothaman',
      affiliation: 'ISRO, India'
    },
    {
      name: 'Rohit Srivastava',
      affiliation: 'NCPOR, Goa, India'
    },
    {
      name: 'Deepak Joshi',
      affiliation: 'IIT Delhi, India'
    },
    {
      name: 'Jagannath Malik',
      affiliation: 'IIT Patna, India'
    },
    {
      name: 'Ramesh Patel',
      affiliation: 'IIT Tirupati, India'
    },
    {
      name: 'Ravi Panwar',
      affiliation: 'IIT BHU, India'
    },
    {
      name: 'Sukvinder Singh',
      affiliation: 'NIT Jalandhar, India'
    },
    {
      name: 'Balvinder Raj',
      affiliation: 'NIT Jalandhar, India'
    },
    {
      name: 'Anuraj Singh',
      affiliation: 'IIITM Gwalior, India'
    },
    {
      name: 'R. Prasanth',
      affiliation: 'Pondicherry University, India'
    },
    {
      name: 'Kavinder Singh',
      affiliation: 'Delhi Technical University, India'
    },
    {
      name: 'Annu Jaiswal',
      affiliation: 'JSS University, Noida, India'
    },
    {
      name: 'Pushpendra Singh',
      affiliation: 'JNU, New Delhi, India'
    },
    {
      name: 'G. Renuka Devi',
      affiliation: 'JNU, New Delhi, India'
    },
    {
      name: 'Krishnan Rajkumar',
      affiliation: 'JNU, New Delhi, India'
    },
    {
      name: 'Prerana Mukherjee',
      affiliation: 'JNU, New Delhi, India'
    },
    {
      name: 'Ankit Kumar Jaiswal',
      affiliation: 'JNU, New Delhi, India'
    },
    {
      name: 'Shashank Vadlamani',
      affiliation: 'JNU, New Delhi, India'
    }
  ];

  const jnuStats = [
    { label: 'Years of Excellence', value: '55+', icon: Calendar },
    { label: 'Schools & Centers', value: '20+', icon: Users },
    { label: 'International Rankings', value: 'Top 500', icon: Award },
    { label: 'Research Publications', value: '10,000+', icon: Award }
  ];

  const engineeringStats = [
    { label: 'Established', value: '2018', icon: Calendar },
    { label: 'Academic Programs', value: '9', icon: Users },
    { label: 'Engineering Domains', value: '3', icon: Award },
    { label: 'Research Areas', value: '15+', icon: Award }
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* About the Symposium */}
      <section className="animate-fade-in">
        <div className="text-center mb-12">
          <div className="relative">
            <h2 className="text-4xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About ISoE 2026
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-background via-secondary/30 to-background">
              <CardContent className="p-8 md:p-12">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The International Symposium on Engineering (ISoE 2026), organized by the School of Engineering,
                  Jawaharlal Nehru University (JNU), New Delhi, India, is a premier forum designed to bring together
                  academicians, researchers, industry professionals, and students from diverse engineering domains.
                  With a focus on <span className="text-accent font-semibold">"Integration of AI, IoT and Green Technologies for a Sustainable Future,"</span> ISoE 2026 aims
                  to foster interdisciplinary dialogue, showcase cutting-edge research, and explore technological
                  solutions to global challenges. Through keynote lectures, technical sessions, poster presentations,
                  and panel discussions, the symposium will provide participants with opportunities to exchange ideas,
                  build collaborations, and contribute to shaping the future of engineering and technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About School of Engineering */}
      <section className="animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">School of Engineering, JNU</h2>
          <div className="relative max-w-4xl mx-auto mb-8">
            <img
              src={soeBuilding}
              alt="School of Engineering Building"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl hover-scale transition-all duration-500 border-4 border-accent/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-2xl hover-scale transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                <CardTitle className="text-primary text-xl group-hover:text-accent transition-colors duration-300">About the School</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                The School of Engineering, Jawaharlal Nehru University (JNU), New Delhi, established in 2018,
                is a rapidly growing center of excellence dedicated to cutting-edge research and innovation in
                engineering and technology. With academic programs spanning Computer Science and Engineering,
                Electronics and Communication Engineering, and Mechanical Engineering, the School offers B.Tech,
                M.Tech, and Ph.D. programs that blend strong theoretical foundations with practical applications.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-2xl hover-scale transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 group" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <CardTitle className="text-primary text-xl group-hover:text-accent transition-colors duration-300">Our Approach</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                Backed by JNU's rich legacy of academic excellence, the School of Engineering emphasizes
                interdisciplinary learning, industry collaboration, and research-driven education, preparing
                students to meet global challenges in science, technology, and innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Engineering School Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {engineeringStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-2xl text-center hover-scale transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-secondary/20 to-background group"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-accent animate-glow" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* About JNU */}
      <section className="animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Jawaharlal Nehru University</h2>
          <div className="relative max-w-4xl mx-auto mb-8">
            <img
              src={jnuPhoto}
              alt="Jawaharlal Nehru University Campus"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl hover-scale transition-all duration-500 border-4 border-accent/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="mb-8">
          <Card className="shadow-2xl hover-scale transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-primary/5 to-background">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
                <p className="text-muted-foreground leading-relaxed text-center text-lg relative z-10">
                  Jawaharlal Nehru University (JNU), New Delhi, established in 1969, is one of India's leading universities,
                  globally recognized for its academic excellence, cutting-edge research, and vibrant intellectual culture.
                  The University is home to renowned schools of sciences, engineering, social sciences, and humanities,
                  fostering a strong culture of interdisciplinary research and innovation. JNU has made significant
                  contributions in areas such as computational sciences, advanced materials, biotechnology, communication
                  technologies, and sustainable development, and continues to expand its research footprint through the
                  School of Engineering and allied science disciplines. With world-class faculty, modern infrastructure,
                  and an active research community, JNU remains at the forefront of knowledge creation and technological
                  advancement, addressing both national priorities and global challenges.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* JNU Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {jnuStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-2xl text-center hover-scale transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-accent/5 to-background group"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary animate-glow" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

  

      {/* Invited Speakers Section */}
      <section className="animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-2">
            Invited Speakers
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mx-auto">
            Distinguished experts who will be sharing their insights at ISoE 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {invitedSpeakers.map((speaker, idx) => (
            <Card key={idx} className="shadow-card border border-border/80 bg-card rounded-2xl overflow-hidden text-center hover-scale transition-smooth flex flex-col items-center">
              <div className="w-full pt-6 pb-2 px-6 flex justify-center items-center">
                <img
                  src={getPublicUrl('user.png')}
                  alt={speaker.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain opacity-75"
                />
              </div>
              <CardContent className="p-4 pt-2 pb-6 flex-grow flex flex-col justify-end w-full">
                <h3 className="font-bold text-primary text-sm sm:text-base">
                  {speaker.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {speaker.affiliation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Organizing & Advisory Teams */}
      <section className="animate-fade-in space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-2">
            Organizing &amp; Advisory Teams
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mx-auto">
            The people responsible for ISoE 2026 across advisory, organizing, and volunteer roles.
          </p>
        </div>

        {/* Chairperson Subsection */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">Chairperson</h3>
          <p className="text-muted-foreground text-sm mb-6">Academic leadership and overall guidance for ISoE 2026.</p>

          <div className="max-w-xl mx-auto">
            <Card className="shadow-card border border-border/80 bg-card rounded-2xl overflow-hidden hover-scale transition-smooth text-center">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary text-base sm:text-lg">
                  Prof. Pawan Kumar Kulriya
                </h4>
                <p className="text-xs sm:text-sm font-medium text-accent mt-1">
                  Dean, School of Engineering
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Advisory Committee */}
        <div className="mt-8 mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-1">Technical Advisory Committee</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-3xl">Experts who provide technical guidance and review standards for the symposium.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalAdvisoryCommittee.map((member, idx) => (
              <Card key={idx} className="shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-secondary/20 to-background group hover-scale h-full flex flex-col justify-center" style={{ animationDelay: `${(idx % 6) * 0.05}s` }}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg text-primary">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-accent mt-1">{member.affiliation}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Organising Committee */}
        <div className="mt-8 mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-1">Organising Committee</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-3xl">Core organizing committee handling symposium coordination and communication.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizers.map((organizer, index) => (
              <Card key={index} className="shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-secondary/20 to-background group hover-scale h-full flex flex-col justify-center" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg text-primary">{organizer.name}</CardTitle>
                  <p className="text-sm font-medium text-accent mt-1">{organizer.affiliation}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteers */}
        <div className="mt-8 mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">Volunteers</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl">Student and staff volunteers supporting symposium logistics and onsite coordination.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-start">
            {[
              'Ann Mary Abyson', 'Ann Mary Deljo', 'Sneha Cherian', 'Sourav Kumar', 'Sarvesh'
            ].map((name, idx) => (
              <Card key={idx} className="shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-secondary/10 to-background group text-center" style={{ animationDelay: `${idx * 0.03}s` }}>
                <CardContent className="py-6">
                  <div className="text-sm font-medium text-primary">{name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Here */}
      <section className="animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Find Us Here</h2>
          <p className="text-muted-foreground">
            Located at Jawaharlal Nehru University, New Delhi - a prestigious academic institution in India's capital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            {/* Map Container */}
            <Card className="shadow-2xl hover-scale transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-background via-secondary/20 to-background">
              <CardContent className="p-0">
                <div className="h-96 flex flex-col items-center justify-center bg-gradient-to-br from-secondary/30 to-background relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent animate-glow" />
                        <span className="text-sm font-medium text-primary">JNU Campus Map</span>
                      </div>
                    </div>
                  </div>
                  <LeafletMap className="w-full h-full" />
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/50">
                  <Button
                    onClick={() => window.open('https://www.google.com/maps/place/School+of+Engineering+new+building/@28.5363179,77.1592421,17.62z/data=!4m12!1m5!3m4!2zMjjCsDMyJzEwLjEiTiA3N8KwMDknMzkuMSJF!8m2!3d28.5361491!4d77.1608593!3m5!1s0x390d1dc2c260026f:0x4409c9d6cbc2f434!8m2!3d28.5361181!4d77.161053!16s%2Fg%2F11pzx54675?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                    className="w-full bg-primary hover:bg-primary/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Us card placed below the map (left column) */}
            <div className="mt-6 max-w-md mx-auto">
              <Card className="shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                    <CardTitle className="text-2xl font-semibold text-primary">Contact Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-left py-4 px-6">
                  <div className="text-sm">
                    <div className="flex items-center gap-6">
                      <div className="text-primary font-semibold text-lg">Mail</div>
                      <div className="text-sm text-muted-foreground break-all"><a href="mailto:isoe.jnu@gmail.com" className="underline">isoe.jnu@gmail.com</a></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                  <CardTitle className="text-primary text-xl transition-colors duration-300">Campus Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-accent animate-glow" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-primary mb-2">School of Engineering</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Jawaharlal Nehru University<br />
                      New Mehrauli Road<br />
                      New Delhi - 110067, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-2xl transition-all duration-500 animate-fade-in border-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  <CardTitle className="text-primary text-xl transition-colors duration-300">Getting Here</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full">
                  <div className="divide-y border-t border-b">
                    <div className="grid grid-cols-3 gap-4 items-start p-4">
                      <div className="font-semibold text-primary">Nearest Metro Station</div>
                      <div className="col-span-2 text-sm text-muted-foreground">
                        Munirka (Magenta Line)<br />
                        R.K. Puram (Magenta Line)<br />
                        Vasant Vihar (Magenta Line)
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-start bg-gray-50 p-4">
                      <div className="font-semibold text-primary">Nearest Bus Stop</div>
                      <div className="col-span-2 text-sm text-muted-foreground">
                        JNU Campus, Munirka (Drops at JNU North Gate)<br />
                        JNU Administrative Block (Drops near JNU Administrative Block) (Bus No. 615)<br />
                        Central School, JNU Campus Road, Saraswatipuram
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-start p-4">
                      <div className="font-semibold text-primary">Distance from Airport</div>
                      <div className="col-span-2 text-sm text-muted-foreground">
                        8.3 km (via Rao Tularam Marg) <a href="https://www.google.com/maps/place/School+of+Engineering+new+building/@28.5363179,77.1592421,17.62z/data=!4m12!1m5!3m4!2zMjjCsDMyJzEwLjEiTiA3N8KwMDknMzkuMSJF!8m2!3d28.5361491!4d77.1608593!3m5!1s0x390d1dc2c260026f:0x4409c9d6cbc2f434!8m2!3d28.5361181!4d77.161053!16s%2Fg%2F11pzx54675?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="text-primary underline ml-1">View on map</a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </section>

    </div>
  );
};

export default AboutSection;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, TrendingUp, Heart } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const projects = {
    1: {
      title: "From Street to School",
      subtitle: "Transforming Young Lives Through Education",
      beneficiary: "Street Children Program",
      age: "8-15 years old",
      location: "Urban Communities",
      date: "Started: March 2022",
      category: "Education",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.46.41 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.43 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg"
      ],
      story: `When we first launched our Street to School program in March 2022, we encountered many children between the ages of 8 and 15 spending their days on bustling city streets, selling water sachets and small goods to help their families survive. Despite their young ages, most had never set foot in a classroom.

Many of these children were being raised by grandparents or guardians who had lost family members in tragic circumstances. With no formal income and limited resources, education seemed like an impossible dream for these bright young minds who had taught themselves basic arithmetic and literacy from street signs and market transactions.

Everything changed when our community outreach teams began regular visits to busy market areas. Despite the challenges these children faced, their curiosity and eagerness to learn were immediately apparent. They would ask endless questions about everything around them and showed remarkable intelligence in managing their small businesses.

Our team worked closely with guardians and families to develop comprehensive support plans. We enrolled the children in local primary schools, provided them with uniforms, books, and school supplies, and arranged for after-school tutoring to help them catch up with their peers.

The transformation has been remarkable. Within the first year, children who couldn't write their names were reading simple sentences. Teachers consistently praise their dedication and enthusiasm for learning. Many excel in mathematics - skills they developed counting money in the markets have served them well!

Today, participants in our program are thriving in their studies, with many consistently ranking among the top students in their classes. They dream of becoming doctors, teachers, and engineers to help other children in their communities. Their guardians beam with pride as they talk about these remarkable achievements.

But the story doesn't end with personal success. These students have become role models in their communities, encouraging other children to prioritize education. Several have started study groups in their neighborhoods where older children help younger ones with their homework.

Through our continued support, including regular check-ins, nutritional assistance, and mentorship, these children are on track to complete their primary education with honors. We're already planning for their transition to secondary school, where we hope to continue supporting their educational journeys.

This transformation from street vendors to top students demonstrates the incredible potential that lies within every child, waiting for the right opportunity to shine. Your support makes stories like these possible.`,
      impact: {
        direct: "50+ children's lives transformed",
        educational: "4 years of quality education provided",
        community: "100+ children inspired to prioritize education",
        economic: "Families supported with income assistance programs"
      },
      metrics: [
        { label: "Academic Performance", value: "Top performers", icon: TrendingUp },
        { label: "Children Enrolled", value: "50+", icon: Users },
        { label: "Attendance Rate", value: "96%", icon: Calendar },
        { label: "Community Impact", value: "100+ children", icon: Heart }
      ],
      testimonial: {
        text: "We want to become doctors and teachers so we can help other children like us. School has given us hope for a better future.",
        author: "Program Participants",
        role: "Street to School Students"
      },
      nextSteps: "Continue supporting students through secondary school and provide career guidance as they work toward their dreams of becoming professionals."
    },
    2: {
      title: "Community Support, Big Impact",
      subtitle: "Women's Market Empowerment Program",
      beneficiary: "Women Market Traders",
      age: "25-45 years old",
      location: "Urban Markets",
      date: "Started: June 2023",
      category: "Business",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.32 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.35 AM.jpeg"
      ],
      story: `The journey of our Women's Market Empowerment Program began in June 2023 with a vision to transform struggling mothers and breadwinners into successful entrepreneurs through comprehensive business training.

Many women in our program were working as domestic helpers or small-scale vendors, earning barely enough to feed their families. Despite working long hours, they could barely afford school fees and often had to choose between buying food or keeping their children in school.

These determined women had always dreamed of starting their own businesses. Many noticed market opportunities but lacked the knowledge and resources to act on them. Having grown up in farming or trading families, they understood commerce but needed formal business education to succeed.

When they heard about our business training program through community meetings, they were eager to learn. They attended our three-month entrepreneurship workshop where they learned financial literacy, business planning, marketing, and customer relationship management.

With their newfound knowledge and small amounts of savings they had carefully set aside, participants started small businesses - purchasing goods directly from producers and selling them at local markets. They focused on quality and fair prices, quickly building reputations for offering value in their sections of the market.

The businesses grew steadily. Women reinvested their profits, expanded their product varieties, and some even began supplying to local restaurants and shops. Their secret weapon was relationship-building - they treated both suppliers and customers like family, creating loyalty on both sides of their businesses.

Within six months, businesses had grown significantly. Many women rented permanent stalls in markets and began employing part-time helpers during peak seasons. Our team continued providing mentorship and guidance as they navigated the challenges of scaling their businesses.

Today, just over a year later, these women's businesses generate three times their previous incomes. They are now saving money for their children's university education. Their eldest children dream of becoming teachers, nurses, and entrepreneurs, excelling in school thanks to their mothers' ability to pay fees on time.

But the success has rippled beyond individual families. These businesswomen now support numerous farmers and suppliers, providing them with reliable income sources. Many have also mentored other women in their communities to start their own small businesses, sharing the knowledge they gained from our program.

This transformation demonstrates how proper training, determination, and ongoing mentorship can create lasting change not just for families, but for entire community networks.

During our annual beneficiary celebration, program participants stood to speak. With tears in their eyes, they shared: "This training didn't just teach us business - it gave us back our dignity and our children their future."`,
      impact: {
        direct: "75+ families lifted out of poverty",
        economic: "300% average income increase",
        community: "200+ suppliers supported with reliable income",
        generational: "250+ children now have educational opportunities"
      },
      metrics: [
        { label: "Income Growth", value: "300%", icon: TrendingUp },
        { label: "Women Empowered", value: "75+", icon: Users },
        { label: "Training Months", value: "3", icon: Calendar },
        { label: "Businesses Started", value: "68", icon: Heart }
      ],
      testimonial: {
        text: "This training didn't just teach us business - it gave us back our dignity and our children their future. Now we can dream bigger for all our families.",
        author: "Program Participants",
        role: "Women Business Owners"
      },
      nextSteps: "Continue mentorship support as women expand their businesses and help them develop savings programs for their children's higher education."
    },
    3: {
      title: "Building Tomorrow's Leaders",
      subtitle: "Youth Leadership Program",
      beneficiary: "Youth Cohort 2024",
      age: "16-24 years old",
      location: "Multiple Communities",
      date: "Started: January 2024",
      category: "Leadership",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.18 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.43 AM.jpeg"
      ],
      story: `In January 2024, we launched our Youth Leadership Program with 50 young people aged 16-24 who showed potential but lacked direction and opportunities to develop their leadership skills.

These young people came from various backgrounds - some were high school graduates unsure of their next steps, others were community volunteers wanting to make bigger impacts, and many were simply passionate about creating change but didn't know where to start.

The six-month program combined practical leadership training with real-world community projects. Participants learned public speaking, project management, conflict resolution, and how to mobilize resources for community initiatives.

What made the program special was its hands-on approach. Each participant had to design and implement a community project. Some organized reading clubs for younger children, others started neighborhood clean-up campaigns, and several created peer mentorship programs in their schools.

The results exceeded our expectations. Within months, these young leaders were running programs that reached hundreds of people in their communities. They showed creativity in solving local problems and determination in seeing their projects through.

Today, 80% of program graduates have launched their own community initiatives. Some have gone on to start youth-focused NGOs, others mentor younger students, and several have been elected to student leadership positions in universities.

The ripple effect has been remarkable - these 50 young leaders have now directly impacted over 1,000 people in their communities through various initiatives.`,
      impact: {
        direct: "50 youth leaders trained",
        community: "1,000+ people impacted by their initiatives",
        sustainability: "40 ongoing community projects",
        empowerment: "80% launched their own initiatives"
      },
      metrics: [
        { label: "Leaders Trained", value: "50", icon: Users },
        { label: "Projects Launched", value: "40+", icon: TrendingUp },
        { label: "Program Duration", value: "6 months", icon: Calendar },
        { label: "Community Reach", value: "1,000+", icon: Heart }
      ],
      testimonial: {
        text: "This program showed us that we don't have to wait to make a difference. We learned that leadership is about serving our communities, not just having a title.",
        author: "Youth Leadership Participants",
        role: "2024 Cohort"
      },
      nextSteps: "Expand the program to reach more young people and create an alumni network for continued collaboration and support."
    },
    4: {
      title: "Clean Water Changes Everything",
      subtitle: "Village Water System Transformation",
      beneficiary: "Rural Village Communities",
      age: "500+ residents per village",
      location: "Rural Areas",
      date: "Started: 2022",
      category: "Health",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
        "/images/WASH10.JPG",
        "/images/wash3.jpg"
      ],
      story: `Before our water systems arrived, villagers - mostly women and children - walked 4-5 hours daily to fetch water from distant sources. The water was often contaminated, causing frequent illness, and the time spent meant children missed school and adults couldn't focus on productive work.

We partnered with rural communities to install clean water systems directly in their villages. The transformation was immediate and profound.

Waterborne diseases dropped by 90% within the first year. Children who previously spent mornings fetching water now arrive at school on time. Women who carried heavy water containers for hours now use that time for farming, trading, or caring for their families.

The economic impact surprised even us. With reliable water access, families started small vegetable gardens. Some women began soap-making businesses. The time saved translated into increased income and better quality of life.

School attendance in communities with new water systems increased by 85%. Teachers report that students are more alert and ready to learn. Parents say their children are healthier and miss fewer school days due to illness.

But perhaps the most powerful change is in community morale. Villages with clean water systems report increased community cooperation, more active participation in local development, and renewed hope for the future.`,
      impact: {
        direct: "5,000+ residents with clean water access",
        health: "90% reduction in waterborne diseases",
        education: "85% increase in school attendance",
        economic: "4 hours daily saved for productive activities"
      },
      metrics: [
        { label: "Disease Reduction", value: "90%", icon: TrendingUp },
        { label: "People Served", value: "5,000+", icon: Users },
        { label: "Time Saved Daily", value: "4 hours", icon: Calendar },
        { label: "Villages Reached", value: "10+", icon: Heart }
      ],
      testimonial: {
        text: "Clean water gave us back our time, our health, and our children's future. We can now dream of things beyond just survival.",
        author: "Village Community Members",
        role: "Water System Beneficiaries"
      },
      nextSteps: "Install water systems in 15 additional villages and provide ongoing maintenance training for community members."
    },
    5: {
      title: "Mother's Support Circle",
      subtitle: "Empowering Women Together",
      beneficiary: "Mothers' Circle",
      age: "25-45 years old",
      location: "Urban Communities",
      date: "Started: February 2024",
      category: "Community",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
        "/images/H&S.JPG",
        "/images/Jesus Film.JPG"
      ],
      story: `Twenty-five mothers in a local community were each struggling in isolation - juggling childcare, household responsibilities, and trying to earn income, often feeling overwhelmed and alone.

We facilitated the formation of a Mothers' Support Circle where these women could meet regularly, share challenges, pool resources, and support each other. What started as simple meetings transformed into a powerful network of mutual support.

The mothers organized rotating childcare, allowing each woman time to attend to business or personal needs. They created a savings group where each member contributes weekly, with rotating access to larger sums for emergencies or business investments.

Several mothers pooled resources to start joint businesses - a group catering service, a shared market stall, and a collective farming project. These ventures generate income while allowing flexible schedules for childcare.

The circle also became an advocacy group. Together, they successfully lobbied for a community playground and convinced local schools to offer more flexible parent-teacher meeting times.

The impact extends to their children. Kids in the circle have better nutrition, higher school attendance, and benefit from the extended "aunties" who provide additional care and supervision. The mothers report reduced stress, increased confidence, and a sense of belonging.`,
      impact: {
        direct: "25 families empowered",
        economic: "3 successful joint businesses",
        community: "50+ children benefiting from collective care",
        social: "Strong support network established"
      },
      metrics: [
        { label: "Mothers Empowered", value: "25", icon: Users },
        { label: "Businesses Created", value: "3", icon: TrendingUp },
        { label: "Meeting Frequency", value: "Weekly", icon: Calendar },
        { label: "Children Impacted", value: "50+", icon: Heart }
      ],
      testimonial: {
        text: "We realized that together we are stronger. This circle gave us friendship, business partners, and a support system we never had before.",
        author: "Mothers' Circle Members",
        role: "Support Circle Participants"
      },
      nextSteps: "Replicate the model in 5 additional communities and create an inter-circle network for resource sharing and collaboration."
    },
    6: {
      title: "Technology for Tomorrow",
      subtitle: "Digital Skills Training",
      beneficiary: "Tech Training Graduates",
      age: "18-30 years old",
      location: "Urban Training Centers",
      date: "Started: September 2023",
      category: "Technology",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.46.42 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.46.42 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.39 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.41 AM.jpeg"
      ],
      story: `In September 2023, we enrolled 100 young adults in a four-month intensive digital skills program. Most had basic computer knowledge but lacked marketable tech skills. Many were unemployed graduates or underemployed youth seeking better opportunities.

The curriculum covered web design, digital marketing, data entry, basic programming, and social media management - skills in high demand in Ghana's growing digital economy. Classes combined theory with practical projects, and each student built a portfolio of work.

We partnered with local businesses to provide real-world projects. Students designed websites for small companies, managed social media for NGOs, and created digital marketing campaigns for local shops. This gave them practical experience and professional references.

The job placement support was crucial. We organized job fairs, connected students with potential employers, and provided interview coaching. Some students chose entrepreneurship, using their skills to start freelance businesses or digital agencies.

Within six months of graduation, 85% of participants had secured employment or started their own tech businesses. Their average income increased by 250% compared to their pre-training earnings.

The multiplier effect is significant - graduates are now teaching digital skills to family members, helping local businesses go online, and some have returned as volunteer instructors in our program.`,
      impact: {
        direct: "100 young adults trained",
        employment: "85% job placement rate",
        economic: "250% average income increase",
        community: "50+ local businesses supported with digital services"
      },
      metrics: [
        { label: "Graduates", value: "100", icon: Users },
        { label: "Employment Rate", value: "85%", icon: TrendingUp },
        { label: "Training Duration", value: "4 months", icon: Calendar },
        { label: "Income Increase", value: "250%", icon: Heart }
      ],
      testimonial: {
        text: "This training opened doors we didn't know existed. Now we have careers in technology and are helping our communities embrace the digital age.",
        author: "Tech Training Graduates",
        role: "Class of 2024"
      },
      nextSteps: "Expand program capacity to train 300 more young people and add advanced courses in app development and data analytics."
    }
  };

  const project = projects[id as unknown as keyof typeof projects];

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link to="/impact" className="text-brand-gold hover:text-yellow-600">
            Return to Impact Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 min-h-[60vh] bg-brand-gold">
        <div className="absolute inset-0">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/impact"
            className="inline-flex items-center text-white hover:text-yellow-200 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Impact Stories
          </Link>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl sm:text-2xl text-yellow-100 mb-8">{project.subtitle}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-300" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-yellow-300" />
                <span>{project.beneficiary}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Complete Story</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  {project.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Impact Metrics */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-50 p-6 rounded-xl mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Impact Metrics</h3>
                <div className="space-y-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center">
                      <metric.icon className="h-5 w-5 text-brand-gold mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Impact Areas */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Impact Areas</h3>
                <div className="space-y-3">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm font-semibold text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </div>
                      <div className="text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
                <p className="text-gray-700">{project.nextSteps}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">Visual journey of transformation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow transition-shadow"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-12 rounded-xl"
          >
            <div className="text-6xl text-brand-gold mb-6">"</div>
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              {project.testimonial.text}
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
              <div className="text-brand-gold">{project.testimonial.role}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Help Us Create More Success Stories</h2>
            <p className="text-xl mb-8 text-yellow-100">
              Stories like {project.beneficiary.split(' ')[0]}'s are possible because of supporters like you. 
              Your donation can transform another life today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-white text-brand-gold hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                to="/impact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-gold px-6 py-3 rounded-full font-semibold text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Read More Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
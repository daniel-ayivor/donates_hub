import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Target, Award, Camera } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const events = {
    1: {
      title: "Back-to-School Drive 2024",
      date: "August 15, 2024",
      location: "Multiple Schools, Accra",
      participants: "500+ Children",
      duration: "Full Day Event (8 AM - 5 PM)",
      status: "Completed",
      category: "Education",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.07 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.17 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.43.19 AM.jpeg"
      ],
      description: "Our largest annual back-to-school initiative, providing essential supplies and support to children across Accra.",
      story: `The morning of August 15th, 2024, dawned bright and full of promise as our team prepared for what would become our most successful Back-to-School Drive to date. After months of planning, fundraising, and coordination with local schools, we were ready to make a significant impact in the lives of hundreds of children across Accra.

The event began at 8 AM at the Accra Sports Stadium, which had been transformed into a distribution center filled with thousands of school supplies, uniforms, backpacks, and educational materials. Our 50 volunteers, including local teachers, community leaders, and international supporters, worked together to create an organized and joyful experience for every child and family who attended.

What made this year's drive particularly special was the level of community involvement. Local businesses donated supplies, parents volunteered their time, and older students helped younger ones try on uniforms and organize their new supplies. The atmosphere was electric with excitement as children received not just materials, but encouragement and hope for the upcoming school year.

The impact was immediate and visible. We watched as 8-year-old Akua's face lit up when she received her first brand-new backpack, complete with pencils, notebooks, and a calculator. Her mother, tears in her eyes, explained that she had been worried about affording school supplies this year. Now, Akua was ready and excited to start fourth grade.

Our mobile team visited 15 different schools throughout the day, ensuring that children who couldn't make it to the main event still received support. This included reaching remote areas where transportation is a challenge, demonstrating our commitment to leaving no child behind.

Beyond the material support, the day included educational activities, health screenings, and career talks from local professionals. Children learned about different career paths, the importance of education, and had the opportunity to ask questions about their futures. Many expressed dreams of becoming doctors, teachers, engineers, and entrepreneurs.

The event also served as a platform to strengthen our relationships with school administrators and teachers. We conducted brief meetings to assess ongoing needs and plan future support programs. Several schools requested assistance with infrastructure improvements and teacher training, which we're now incorporating into our 2025 planning.

One of the most moving moments came when 12-year-old Kwesi, a beneficiary from our previous programs, returned as a volunteer to help distribute supplies to younger children. He spoke passionately about how educational support had changed his life and his desire to give back to his community. This perfectly embodied our goal of creating cycles of positive change.

The day concluded with a celebration featuring local music, dance, and speeches from community leaders. Children proudly showed off their new supplies, and parents expressed gratitude for the support. Many families stayed late, reluctant to end such a positive and hopeful day.

The ripple effects of this single day extend far beyond the immediate distribution of supplies. Teachers report that children who receive support through our programs show improved attendance, better academic performance, and increased confidence in the classroom. Parents gain peace of mind knowing their children have what they need to succeed.

The success of this event was made possible by our incredible donors, volunteers, and community partners. From the local businesses that provided supplies at cost, to the volunteers who spent their Saturday making magic happen, to the donors whose contributions funded this initiative - every contribution mattered.

This event reinforced our belief that when a community comes together with a shared vision, remarkable things happen. The 500+ children who received support that day are now equipped not just with school supplies, but with the knowledge that their community believes in their potential and is invested in their success.`,
      objectives: [
        "Provide school supplies to 500+ children",
        "Distribute uniforms to children in need",
        "Connect families with educational resources",
        "Build stronger community networks",
        "Inspire children about their educational futures"
      ],
      achievements: [
        "530 children received complete school supply kits",
        "320 uniforms distributed",
        "15 schools visited",
        "50 volunteers engaged",
        "100% positive feedback from participants"
      ],
      impact: {
        immediate: "530 children fully equipped for school",
        educational: "Improved attendance and performance reported",
        community: "Stronger partnerships with 15 schools",
        longterm: "Increased community engagement in education"
      },
      metrics: [
        { label: "Children Served", value: "530", icon: Users },
        { label: "Schools Reached", value: "15", icon: Target },
        { label: "Volunteers", value: "50", icon: Award },
        { label: "Event Duration", value: "9 hours", icon: Clock }
      ],
      testimonials: [
        {
          text: "My daughter came home so excited about school. This support means everything to our family.",
          author: "Mary Asante",
          role: "Parent"
        },
        {
          text: "The children's enthusiasm was contagious. This is why I volunteer - to see hope in action.",
          author: "Dr. James Osei",
          role: "Volunteer"
        }
      ],
      partners: ["Accra Metropolitan Assembly", "Local School District", "Sunshine Stationery", "Community Leaders Network"],
      nextEvent: "Winter Clothing Drive - December 2024"
    },
    2: {
      title: "Women's Entrepreneurship Workshop",
      date: "September 22, 2024",
      location: "Kumasi Community Center",
      participants: "75 Women",
      duration: "3 Days (9 AM - 4 PM daily)",
      status: "Completed",
      category: "Business",
      mainImage: "/images/WhatsApp Image 2026-01-04 at 12.43.30 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-04 at 12.43.30 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.32 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.35 AM.jpeg",
        "/images/WhatsApp Image 2026-01-04 at 12.46.38 AM.jpeg"
      ],
      description: "An intensive three-day program empowering women with entrepreneurial skills and business knowledge.",
      story: `The September 2024 Women's Entrepreneurship Workshop in Kumasi marked a pivotal moment in our commitment to economic empowerment. Over three transformative days, 75 women from diverse backgrounds came together to learn, share, and build the foundations for their entrepreneurial dreams.

The workshop opened on a Monday morning with an energy that was immediately palpable. Women aged 19 to 65 filled the Kumasi Community Center, each bringing their unique stories, challenges, and aspirations. Some were already running small ventures, while others were taking their first steps toward business ownership. What united them all was determination and hope for a better future.

Day one focused on business fundamentals and mindset development. Our lead facilitator, successful entrepreneur Akosua Mensah, shared her journey from street vendor to regional business owner. Her story resonated deeply with participants who saw their own possibilities reflected in her success. Interactive sessions covered market analysis, customer identification, and the importance of financial planning.

The second day delved into practical skills: budgeting, record-keeping, and marketing strategies. Participants learned to use smartphones for business promotion and were introduced to digital payment systems. Many had never considered social media as a business tool, and by day's end, several had created their first business social media accounts.

What made this workshop particularly powerful was the peer learning component. Participants were grouped into diverse teams, mixing experiences and skills. Established business owners mentored newcomers, while younger participants shared digital skills with older ones. These connections continued beyond the workshop, creating a supportive network that persists today.

The final day culminated in business plan presentations. Each participant pitched their business idea to a panel of local successful entrepreneurs. The quality and creativity of the presentations exceeded all expectations - from innovative farming techniques to unique handicraft businesses to digital service offerings.

The immediate impact was remarkable. Within one month of the workshop, 45 women had taken concrete steps toward starting or expanding their businesses. Six secured microloans through our partner program, and 12 formed business cooperatives to share resources and support each other.

One standout success story is Comfort Adjei, who attended with just an idea for a catering business. Three months post-workshop, she now employs four people and caters events across Kumasi. She credits the workshop with giving her the confidence and skills to formalize her business plan and seek funding.`,
      objectives: [
        "Train 75 women in business fundamentals",
        "Develop comprehensive business plans",
        "Create peer support networks",
        "Connect participants with funding opportunities",
        "Foster entrepreneurial mindset"
      ],
      achievements: [
        "75 women completed the full program",
        "68 business plans developed",
        "45 businesses launched within 60 days",
        "6 microloans secured",
        "12 business cooperatives formed"
      ],
      impact: {
        immediate: "75 women equipped with business skills",
        economic: "45 new businesses created",
        community: "12 cooperatives formed",
        longterm: "Sustainable income generation for families"
      },
      metrics: [
        { label: "Participants", value: "75", icon: Users },
        { label: "Business Plans", value: "68", icon: Target },
        { label: "New Businesses", value: "45", icon: Award },
        { label: "Program Days", value: "3", icon: Calendar }
      ],
      testimonials: [
        {
          text: "This workshop changed my life. I now have a clear plan and the confidence to pursue my business dreams.",
          author: "Comfort Adjei",
          role: "Workshop Participant"
        }
      ],
      partners: ["Kumasi Business Association", "Women's Development Network", "Microfinance Partners"],
      nextEvent: "Youth Entrepreneurship Program - January 2025"
    }
  };

  const event = events[id as keyof typeof events];

  if (!event) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h1>
          <Link to="/activities" className="text-orange-500 hover:text-orange-600">
            Return to Activities
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    Completed: 'bg-green-100 text-green-800',
    Ongoing: 'bg-blue-100 text-blue-800',
    Upcoming: 'bg-orange-100 text-orange-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-teal-600">
        <div className="absolute inset-0">
          <img
            src={event.mainImage}
            alt={event.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/activities"
            className="inline-flex items-center text-white hover:text-teal-200 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Activities
          </Link>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {event.category}
              </span>
              <span className={`${statusColors[event.status]} px-4 py-2 rounded-full text-sm font-semibold`}>
                {event.status}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl sm:text-2xl text-teal-100 mb-8">{event.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-300" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-300" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-teal-300" />
                <span>{event.participants}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-300" />
                <span>{event.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {event.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-teal-50 rounded-xl"
              >
                <metric.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Story & Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Overview</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  {event.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Objectives */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Objectives</h3>
                <ul className="space-y-2">
                  {event.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="h-4 w-4 text-teal-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
                <ul className="space-y-2">
                  {event.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Partners */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partners</h3>
                <ul className="space-y-1">
                  {event.partners.map((partner, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      • {partner}
                    </li>
                  ))}
                </ul>
                {event.nextEvent && (
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <div className="text-sm font-semibold text-gray-700">Next Event:</div>
                    <div className="text-purple-600 font-medium">{event.nextEvent}</div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Gallery</h2>
            <p className="text-xl text-gray-600 flex items-center justify-center">
              <Camera className="h-5 w-5 mr-2" />
              Capturing moments of impact and joy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={image}
                  alt={`${event.title} - Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {event.testimonials && event.testimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Said</h2>
              <p className="text-xl text-gray-600">Feedback from participants and volunteers</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="text-4xl text-teal-500 mb-4">"</div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    {testimonial.text}
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-teal-600 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Next Event</h2>
            <p className="text-xl mb-8 text-teal-100">
              Be part of creating positive change in communities. Your participation makes these transformative events possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Volunteer With Us
              </Link>
              <Link
                to="/donate"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Support Our Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default EventDetail;
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectSection {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  supportGlance: string[];
  image: string;
}

const projectSections: ProjectSection[] = [
  {
    id: 'education',
    title: 'Education',
    paragraphs: [
      'Every child deserves the chance to go to school and build a better future.',
      'In Ghana, sending a child to school comes with significant financial demands. Many families are unable to afford school fees, books, and required uniforms. As a result, many children are left without access to education.',
      'Africa Assistance Plan responds to this need by supporting children to stay in school, knowing that education, grounded in Christ, lays a strong foundation for a transformed life.',
      'AAP also runs Rose Life School, where children receive daily meals, school supplies, and are nurtured in a Christ-centered environment that shapes both their minds and their hearts.',
      'Many schools also lack basic classroom furniture. Desks, tables, and chairs are often unavailable, forcing children to sit on the floor or stones and write on the ground. This directly affects their learning and performance.',
      'With your support, we are working to equip classrooms with proper furniture and create a better learning environment. All furniture is produced locally, reducing costs while supporting local artisans and creating income within the community.',
      'You can also take part by organizing a donation drive for a school or kindergarten. Contact us to get connected to a specific project.',
    ],
    supportGlance: [
      '$45 provides a school desk',
      '$100 provides a table and chair set for a kindergarten child',
      'Improves access to quality education',
      'Supports local production and livelihoods',
    ],
    image: '/images/Picture2.jpg',
  },
  {
    id: 'school-feeding',
    title: 'School Feeding Program',
    subtitle: 'A hot, nutritious meal for a child to stay in school',
    paragraphs: [
      'Jesus cared for both the spiritual and physical needs of people, and through our School Feeding Program, we reflect His love by ensuring that children are nourished and able to learn.',
      'Many children come to school hungry, making it difficult to concentrate, learn, and fully participate in class. In some cases, the promise of a daily meal is the main reason a child attends school.',
      'Through this program, Africa Assistance Plan provides nutritious meals to children, helping improve attendance, concentration, and overall well-being. Beyond meeting physical needs, the program creates an environment where children feel cared for, valued, and supported.',
      'The School Feeding Program also complements our education and discipleship efforts, ensuring that children are not only fed physically but are also nurtured spiritually.',
    ],
    supportGlance: [
      '$50 can provide one good meal for a child for a month',
      'Provides daily nutritious meals for children',
      'Improves school attendance and participation',
      'Supports children’s health and development',
      'Creates a caring and supportive learning environment',
    ],    image: '/images/Picture1.jpg',  },
  {
    id: 'wash',
    title: 'WaSH',
    paragraphs: [
      'Jesus is the living water that quenches the thirst of men. Access to clean water and proper hygiene is essential to life, health, and dignity, yet many rural communities and schools in Ghana rely on rivers, streams, hand-dug wells, and contaminated water sources, exposing families, especially children, to unsafe water and preventable diseases.',
      'Diseases caused by contaminated water and poor hygiene remain a major challenge in many communities. Through our WASH initiatives, we respond to this need while contributing to SDG 6 (Clean Water and Sanitation) by providing safe water and sanitation facilities, SDG 3 (Good Health and Well-being) by reducing waterborne diseases, SDG 4 (Quality Education) by enabling children, especially girls, to stay in school, and SDG 5 (Gender Equality) by empowering women to lead, manage, and sustain water systems within their communities.',
      'Our WASH approach is built on three key pillars: providing access to clean water, providing sanitation facilities, and promoting hygiene education, community participation, and capacity building.',
      'Before any project begins, we engage closely with the community and their leaders. Together, we select borehole sites and establish local committees responsible for maintenance. Women, who traditionally manage water in the community, play a central role in this process.',
      'Women are trained and involved at every stage, enabling them to maintain and repair water systems and even support other communities.',
    ],
    supportGlance: [
      'Provides clean and safe water for communities',
      'Improves sanitation and hygiene practices',
      'Prevents disease and promotes healthier lives',
      'Empowers women and strengthens local leadership',
      'Supports children, especially girls, to stay in school',
    ],
    image: '/images/Picture3.jpg',
  },
  {
    id: 'jesus-film',
    title: 'Jesus Film',
    subtitle: 'Gospel Proclamation',
    paragraphs: [
      'Jesus Christ is the hope of the world, and we are committed to taking His message to those who have not yet heard. Through the Jesus Film, we bring the Gospel to remote and hard-to-reach communities, many of which have little or no access to the Good News.',
      'In many of these communities, people have never encountered the message of Christ in a language or format they can easily understand. The Jesus Film presents the life, death, and resurrection of Jesus in a simple and powerful way, allowing individuals and families to experience the Gospel firsthand.',
      'Our outreach teams travel to villages, often in challenging conditions, to organize screenings in open spaces. These gatherings create opportunities for entire communities to come together, hear the message of salvation, and respond to the love of Christ.',
      'Through these outreaches, many give their lives to Christ, and new fellowships are formed. We work closely with local churches and leaders to ensure follow-up, discipleship, and the planting of sustainable, Christ-centered communities of faith.',
    ],
    supportGlance: [
      'Takes the Gospel to remote and unreached communities',
      'Supports Jesus Film screenings and outreach missions',
      'Leads souls to Christ and strengthens discipleship',
      'Helps plant and grow new churches',
      'Advances the Great Commission',
      'Flexible giving options available',
    ],
    image: '/images/Picture4.png',
  },
  {
    id: 'flourish',
    title: 'Flourish',
    subtitle: 'Equipping rural church leaders for integral mission',
    paragraphs: [
      'The Church is God’s instrument for transformation in the world. Through Flourish, we equip local church leaders to live out the Gospel in both word and deed, embracing God’s call to holistic ministry.',
      'Many church leaders serve faithfully but lack access to training, tools, and support to effectively address the spiritual and practical needs of their communities. Flourish responds to this need by strengthening leaders with biblical teaching, practical skills, and a clear vision of integral mission, where the Gospel transforms every area of life.',
      'Through trainings, bible storying workshops, and mentorship, leaders are empowered to disciple believers, engage their communities, and respond to issues such as WaSH, poverty, health, and social challenges with Christ-centered solutions.',
      'Flourish also fosters unity among churches, encouraging collaboration and shared responsibility in advancing God’s Kingdom at the community level.',
    ],
    supportGlance: [
      'Equips church leaders for effective bible storying and facilitation',
      'Strengthens discipleship and community engagement',
      'Builds the capacity of local church leaders to lead holistic transformation',
      'Encourages unity and collaboration among churches',
      'Builds sustainable, locally-led impact',
    ],
    image: '/images/Picture5.jpg',
  },
  {
    id: 'jlife-radio',
    title: 'JLife Radio',
    subtitle: 'Voice of Hope and Climate Stewardship',
    paragraphs: [
      'Faith comes by hearing, and through JLife Radio we are sharing the message of Christ to bring hope, healing, and transformation to lives across communities.',
      'JLife Radio serves as a voice of hope, broadcasting Christ-centered teachings, encouragement, and practical messages that speak to the spiritual, social, and emotional needs of individuals. Through this platform, many are reached daily with the Gospel, especially those who may not have access to a local church.',
      'Beyond Gospel proclamation, JLife Radio also champions climate change awareness and advocacy. We educate communities on caring for God’s creation, promoting responsible environmental practices, and encouraging sustainable living as stewards of the earth.',
      'Through engaging programs, discussions, and outreach, the station inspires listeners to live out their faith while taking action to protect the environment and support their communities.',
    ],
    supportGlance: [
      'Broadcasts the Gospel to a wide and diverse audience',
      'Provides hope, encouragement, and Christ-centered teaching',
      'Promotes climate change awareness and environmental stewardship',
      'Reaches remote and underserved communities',
      'Supports community education and transformation',
      'Flexible giving options available',
    ],
    image: '/images/Picture6.jpg',
  },
  {
    id: 'child-discipleship',
    title: 'Child Discipleship',
    subtitle: 'Catch Them Young',
    paragraphs: [
      'Jesus said, “Let the little children come to me.” Through our Child Discipleship program, we are intentional about nurturing children early in life to know Christ, grow in faith, and live out God’s purpose.',
      'Many children grow up without a strong spiritual foundation, leaving them vulnerable to negative influences. This one-year discipleship program is designed to guide children in understanding God’s Word, building godly character, and developing a personal relationship with Jesus Christ.',
      'Through structured lessons, mentorship, and interactive activities, children are taught biblical truths, prayer, and values that shape their lives. The program creates a safe and supportive environment where children can grow spiritually while being guided by committed leaders.',
      'By catching them young, we are raising a generation that is rooted in Christ, grounded in truth, and prepared to be future leaders in their communities and the Church.',
    ],
    supportGlance: [
      'Supports a one-year discipleship program for children',
      'Builds a strong spiritual foundation in Christ',
      'Provides teaching materials and mentorship',
      'Shapes character, values, and purpose',
      'Raises future Christ-centered leaders',
    ],
    image: '/images/Picture7.jpg',
  },
];

const MIN_PARAGRAPHS_VISIBLE = 2;

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const sectionCardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const OurProject = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Projects</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore our Christ-centered programs creating lasting impact across communities in Ghana.
          </p>
        </motion.div>

        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-10"
        >
          {projectSections.map((section, index) => {
            const isExpanded = !!expandedSections[section.id];
            const introParagraphs = section.paragraphs.slice(0, MIN_PARAGRAPHS_VISIBLE);
            const extraParagraphs = section.paragraphs.slice(MIN_PARAGRAPHS_VISIBLE);
            const shouldShowToggle = section.paragraphs.length > MIN_PARAGRAPHS_VISIBLE;

            return (
              <motion.article
                key={section.id}
                variants={sectionCardVariants}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 mb-4">
                      Project {index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue">{section.title}</h2>
                    {section.subtitle && (
                      <p className="text-brand-gold font-semibold mt-1 text-lg">{section.subtitle}</p>
                    )}

                    <motion.div layout className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                      {introParagraphs.map((paragraph, paragraphIndex) => (
                        <motion.p
                          layout
                          key={`${section.id}-paragraph-${paragraphIndex}`}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: paragraphIndex * 0.03 }}
                          viewport={{ once: true }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key={`${section.id}-extra`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="space-y-4 overflow-hidden"
                          >
                            {extraParagraphs.map((paragraph, paragraphIndex) => (
                              <p key={`${section.id}-extra-paragraph-${paragraphIndex}`}>{paragraph}</p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {shouldShowToggle && (
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => toggleSection(section.id)}
                        className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-gold transition-colors"
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ↓
                        </motion.span>
                      </motion.button>
                    )}

                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Support at a Glance</h3>
                      <ul className="space-y-2 text-gray-700">
                        {section.supportGlance.map((item, itemIndex) => (
                          <li key={`${section.id}-support-${itemIndex}`} className="flex gap-2">
                            <span className="text-brand-gold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default OurProject;
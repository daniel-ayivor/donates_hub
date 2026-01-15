import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, TrendingUp, Heart } from 'lucide-react';

// Define interfaces
interface MetricIcon {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Project {
  title: string;
  subtitle: string;
  beneficiary: string;
  age: string;
  location: string;
  date: string;
  category: string;
  mainImage: string;
  gallery: string[];
  story: string;
  impact: {
    [key: string]: string;
  };
  metrics: MetricIcon[];
  testimonial: Testimonial;
  nextSteps: string;
}

interface Projects {
  [key: string]: Project;
}

interface RelatedStory {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  beneficiary: string;
  age: string;
}

const ProjectDetail = () => {
  const { id } = useParams();

  const projects: Projects = {
    1: {
      title: "The Centenarian's Transformation",
      subtitle: "From Timid Farmer to Sanitation Leader",
      beneficiary: "Elderly Women Leaders",
      age: "100 years old",
      location: "Fiema, Nkoranza",
      date: "Started: 2022",
      category: "Empowerment",
      mainImage: "/images/mamaHagar.jpg",
      gallery: [
        "/images/mamaHagar.jpg",
        "/images/wash1.jpg",
        "/images/wash2.jpg"
      ],
      story: `Mama Hagar Kru, affectionately called "old lady" in her community, is a centenarian and mother of eight who lives with her family in Fiema, a community in Nkoranza in the Bono East Region of Ghana. She was previously a small-scale farmer and lived a quiet, unnoticed life in her community.

Her journey with Africa Assistance Plan began when she encountered AAP through their Parish Priest Rev. Father Prince Adu Poku, whose diligent engagements led to the drilling of a borehole in their community due to the water crises in Fiema.

During the drilling process, Mama Hagar participated in hygiene and sanitation training organized for church members. The training "piqued an interest in me to become an S&H advocate," she shares. According to Mama Hagar, the training helped her discover a hidden strength within herself. She realized she had "an innate ability to address people with boldness and courage" and that she could become "a great agent of transformation with regards to the hygiene and sanitation issues which are prevalent in Fiema despite my age."

Due to her active engagement, she was appointed as the fee collector and manager of one of the two water points in the community, a role she describes as "one of the good things to have happened to me."

Reflecting on her life before connecting with AAP, Mama Hagar says, "Before I connected with AAP through the training, I was timid, empty, and an unrecognized woman." She explains that although she wanted to engage in community activities, "I hesitated to speak before others" and "struggled to find the right words and lacked substance to express my view addressing personal and societal issues." She adds, "However, after the training and appointment as water point manager I have become a new person altogether."

Today, her role allows her to engage community members who fetch water daily, sharing messages on hygiene and sanitation while ensuring the water point is kept safe and clean. She now speaks freely on issues of sanitation management, environmental cleanliness, and personal hygiene "without any fear or shyness."

One of the greatest benefits of her role is that she receives monthly stipends due to her role as the water point manager. This has reduced her dependence on her children and family and enabled her to stand "as a beacon of self-reliance and dignity." Her work continues to inspire others to be bold in addressing sanitation and hygiene challenges in the community.

At over 100 years old, Mama Hagar has become a respected community leader and a testament to how age is no barrier to making significant contributions. She concludes with gratitude, saying, "I am truly grateful to AAP and Rev. Father for helping me to discover myself through this training and unearthing in me a great potential despite my age as a centenarian. I am fulfilled to be an agent of transformation as sanitation and hygiene advocate at this level of my life."

Her story demonstrates that transformation and empowerment can happen at any stage of life, and that providing opportunities for elderly community members can unlock incredible potential and wisdom.`,
      impact: {
        direct: "Community sanitation transformation",
        personal: "From timid to confident leader",
        economic: "Monthly income for independence",
        inspirational: "Community role model at age 100"
      },
      metrics: [
        { label: "Age", value: "100+", icon: Users },
        { label: "Water Point Users", value: "500+", icon: TrendingUp },
        { label: "Monthly Stipend", value: "Regular", icon: Calendar },
        { label: "Community Impact", value: "Transformed", icon: Heart }
      ],
      testimonial: {
        text: "I am truly grateful to AAP for helping me to discover myself through this training and unearthing in me a great potential despite my age as a centenarian.",
        author: "Mama Hagar Kru",
        role: "Sanitation & Hygiene Advocate"
      },
      nextSteps: "Continue supporting Mama Hagar in her leadership role and replicate this elderly empowerment model in other communities."
    },

    2: {
      title: "Water Brings Community Unity",
      subtitle: "Elderly Women Regain Purpose",
      beneficiary: "Elderly Women Collective",
      age: "70-80 years old",
      location: "Asuokor Community",
      date: "Borehole Drilled: 2012",
      category: "Water",
      mainImage: "/images/Mama Abena.jpg",
      gallery: [
        "/images/Mama Abena.jpg",
        "/images/wash3.jpg",
        "/images/wash4.jpg"
      ],
      story: `Mama Abena, 76, from Asuokor, shares her story: "I still remember the days when water was our biggest problem in this community. We walked long distances to fetch from rivers and shallow wells, and many of our children were often sick. The day this borehole was drilled in 2012 is still a memorable one for us all."

The water crisis in Asuokor was not just about thirst—it was about time, health, and dignity. Women and children spent hours each day walking to distant water sources, carrying heavy containers back to their homes. The water they collected was often contaminated, leading to frequent illnesses that kept children out of school and adults from productive work.

When Africa Assistance Plan drilled the borehole in 2012, it immediately transformed daily life. Children who previously spent mornings fetching water could now attend school regularly. Women who carried heavy loads for hours gained back precious time for farming, trading, and caring for their families.

But the story doesn't end with access to water. The borehole has since been mechanized into a bigger water system that serves everyone in Asuokor. Mama Abena, together with other elderly women in the community, helps manage it. They collect contributions from users, maintain the system, and ensure its sustainability.

"More than that, it has become a source of employment for us; we feel respected," Mama Abena explains. For elderly women who often feel sidelined in community development, this management role has given them purpose, dignity, and economic empowerment.

The impact extends far beyond the water point. "Before, our days revolved around fetching water, and we had little time for anything else," she recalls. "Now, with water accessible near our homes, children can attend school consistently, families have more time for farming and daily activities, and the community has become healthier overall."

Perhaps the most profound change has been in community cohesion. "This simple yet life-changing resource has strengthened our sense of community, giving us pride in managing it together," Mama Abena shares. The water committee meetings have become spaces for community dialogue, problem-solving, and collective decision-making.

"Every time I see children laughing as they drink clean water or families filling their containers without fear of illness, I am reminded that this gift is more than water—it is dignity, hope, and a future for generations to come," she reflects with emotion.

The Asuokor water project demonstrates how sustainable water access can transform not just health outcomes, but social structures, economic opportunities, and community self-determination. It shows that when communities are empowered to manage their own resources, they develop skills, confidence, and ownership that lasts for generations.

Mama Abena and her fellow water managers have become respected community leaders, proving that age and gender are no barriers to effective community stewardship. Their success has inspired neighboring communities to seek similar partnerships with AAP.`,
      impact: {
        direct: "Community-managed water system",
        economic: "Employment for elderly women",
        health: "Reduced waterborne diseases",
        social: "Strengthened community unity"
      },
      metrics: [
        { label: "Years Active", value: "12+", icon: Calendar },
        { label: "Women Managers", value: "6", icon: Users },
        { label: "Community Served", value: "800+", icon: TrendingUp },
        { label: "School Attendance", value: "Increased", icon: Heart }
      ],
      testimonial: {
        text: "This gift is more than water—it is dignity, hope, and a future for generations to come. We thank AAP for empowering us to take responsibility for our own community.",
        author: "Mama Abena",
        role: "Water System Manager"
      },
      nextSteps: "Expand the community management model to other water projects and provide advanced training for water committee members."
    },

    3: {
      title: "Breaking Menstrual Taboos",
      subtitle: "A Girl's Journey to Confidence",
      beneficiary: "Adolescent Girls",
      age: "14 years old",
      location: "Tinga, Savannah Region",
      date: "March 2025",
      category: "Health",
      mainImage: "/images/Saddique Rashida.jpg",
      gallery: [
        "/images/Saddique Rashida.jpg",
        "/images/menstrual-hygiene1.jpg",
        "/images/menstrual-hygiene2.jpg"
      ],
      story: `In Tinga, in Ghana's Savannah Region, 14-year-old Saddique Rashida grew up believing menstruation was something to be ashamed of. Cultural and religious beliefs in her home labeled her as unclean during her period, restricting her from normal family activities and leaving her feeling isolated.

She explains, "My parents believe that a girl on her period should stay away from others because she is impure. Because of this, I feel lonely and excluded… Menstruation is supposed to be normal, but for me, it feels like a punishment."

The situation was worsened by Tinga's water challenges, making hygiene difficult and affecting her ability to observe religious practices. Like many girls in her community, Rashida missed school during her period, falling behind in her studies and feeling increasingly disconnected from her peers.

Change began when Africa Assistance Plan (AAP), with the Assemblies of God Church and Tinga D/A School, organized a Menstrual Hygiene and WASH program. Through comprehensive training, Rashida learned that menstruation is a natural biological process, not a curse or punishment. She gained practical knowledge about menstrual hygiene management and the confidence to speak up about her experiences.

"Through the training, I realized I was not alone, and I found the courage to talk to my family," she shares. This was a significant breakthrough—breaking the silence that had surrounded menstruation in her household for generations.

Although traditional beliefs still remain in her household, Rashida has started an important conversation that is gradually changing attitudes. She now uses the knowledge gained from the training to manage her periods with dignity and confidence. More importantly, she has become a peer educator, encouraging other girls in her school to speak up for themselves and challenge harmful taboos.

The program also addressed the water challenges that compounded menstrual hygiene difficulties. With improved water access at school, girls can now manage their periods hygienically without shame or inconvenience. School attendance among girls has improved significantly since the program's implementation.

Rashida's transformation extends beyond menstrual hygiene. She has gained confidence in all areas of her life, participating more actively in class and taking on leadership roles in school activities. "I express my gratitude to the entire Africa Assistance Plan team for their support. I believe many girls, like me, have regained self-confidence," Rashida says.

Her story illustrates how addressing menstrual hygiene is about more than just providing products and facilities—it's about restoring dignity, challenging harmful norms, and empowering girls to reach their full potential. By breaking the silence around menstruation, AAP is helping to create a generation of confident young women who can advocate for their health and rights.

The ripple effects of this program are already visible in Tinga. Teachers report improved concentration and performance among girls, and there's growing openness among parents to discuss menstrual health. Rashida's courage in speaking to her family has inspired other girls to do the same, creating a quiet revolution in how the community approaches women's health.`,
      impact: {
        direct: "Menstrual hygiene education",
        educational: "Improved school attendance",
        social: "Breaking cultural taboos",
        personal: "Restored confidence and dignity"
      },
      metrics: [
        { label: "Girls Trained", value: "150+", icon: Users },
        { label: "School Attendance", value: "Improved", icon: TrendingUp },
        { label: "Age Group", value: "12-18", icon: Calendar },
        { label: "Confidence", value: "Restored", icon: Heart }
      ],
      testimonial: {
        text: "I realized I was not alone, and I found the courage to talk to my family. Menstruation is supposed to be normal, not a punishment.",
        author: "Saddique Rashida",
        role: "Student & Peer Educator"
      },
      nextSteps: "Expand menstrual hygiene programs to more schools and engage parents and community leaders in breaking menstrual taboos."
    },

    4: {
      title: "From Conflict to Cooperation",
      subtitle: "Pastor Unites Farmers and Herders",
      beneficiary: "Tinga Community Leaders",
      age: "45+ years old",
      location: "Tinga, Savannah Region",
      date: "Started: 2014",
      category: "Leadership",
      mainImage: "/images/Abraham Soale.jpg",
      gallery: [
        "/images/Abraham Soale.jpg",
        "/images/peace-building1.jpg",
        "/images/peace-building2.jpg"
      ],
      story: `"My name is Abraham Soale, and I am the head pastor of the Mount Zion Assemblies of God in Tinga." As a pastor, council leader, and farmer, Abraham has witnessed years of hardship in his community. Conflicts with Fulani herders led to destroyed farmlands, polluted water sources, violence, and growing health concerns. Despite earlier petitions to traditional authorities, the situation continued to worsen.

For years, tensions between farmers and Fulani herders in Tinga had been escalating. Cattle would stray into cultivated fields, destroying crops that families depended on for survival. In retaliation, farmers sometimes harmed the cattle, leading to cycles of violence and retaliation. Water sources became points of contention, with both communities accusing each other of pollution and overuse. The conflict threatened not just livelihoods but the very social fabric of Tinga.

In 2014, Abraham connected Tinga to Africa Assistance Plan (AAP). The partnership began with practical interventions—borehole drilling, sanitation and hygiene training, and community development programs. But one defining moment was the "Genius of One Conference," which reshaped how the community viewed unity and collective responsibility.

Abraham recalls that the training emphasized that "true change happens when everyone works together, regardless of their roles or backgrounds." This message resonated deeply with him as both a spiritual leader and community member. Inspired, he shared the lessons with elders and leaders from both farming and herding communities.

This led to the formation of a Local Council of Churches Committee—an innovative approach that united religious leaders, farmers, herders, and traditional authorities. For the first time, all stakeholders sat together to address their conflicts through dialogue rather than confrontation.

The council introduced simple but effective community bylaws to manage cattle movement. They designated specific grazing areas and routes that minimized crop damage. A local task force was formed to enforce these agreements, composed of members from both communities. Most importantly, a peace council was established to mediate disputes before they escalated into violence.

Alongside peacebuilding, the council continues to promote sanitation, hygiene, and sustainable practices introduced through AAP's programs. This shared focus on community development created common ground and mutual interests between previously antagonistic groups.

Abraham reflects on the transformation: "While challenges remain, the progress gives hope. The training provided by AAP laid a strong foundation for lasting solutions." Today, incidents of crop destruction have decreased by over 70%, and water sources are managed cooperatively. Children from farming and herding families now play together, and there's growing intermarriage between the communities.

The peace process has also had economic benefits. With reduced conflicts, farmers can invest more confidently in their land, and herders can plan their movements without fear. The community has even started joint projects, including shared vegetable gardens and cooperative marketing of produce.

Abraham's leadership demonstrates how faith communities can play crucial roles in conflict resolution and community development. By building bridges rather than walls, he has helped transform Tinga from a divided community into a model of cooperation.

The success in Tinga is now being studied by neighboring communities facing similar conflicts. Abraham regularly shares his experiences with other community leaders, spreading the principles of dialogue, mutual respect, and collective responsibility.`,
      impact: {
        direct: "Peace council established",
        conflict: "70% reduction in incidents",
        economic: "Improved livelihoods",
        social: "Community unity restored"
      },
      metrics: [
        { label: "Years of Peace", value: "10+", icon: Calendar },
        { label: "Community Members", value: "2,000+", icon: Users },
        { label: "Conflict Reduction", value: "70%", icon: TrendingUp },
        { label: "Joint Projects", value: "5+", icon: Heart }
      ],
      testimonial: {
        text: "The training provided by AAP laid a strong foundation for lasting solutions. True change happens when everyone works together.",
        author: "Abraham Soale",
        role: "Pastor & Community Leader"
      },
      nextSteps: "Document the peacebuilding model for replication in other conflict-affected communities and strengthen youth involvement in peace processes."
    },

    5: {
      title: "Community-Led Sanitation Revolution",
      subtitle: "Tainakura Takes Charge of Health",
      beneficiary: "Tainakura Residents",
      age: "All ages",
      location: "Tainakura Community",
      date: "December 2025",
      category: "Sanitation",
      mainImage: "/images/Abena Nyanta.jpg",
      gallery: [
        "/images/Abena Nyanta.jpg",
        "/images/sanitation1.jpg",
        "/images/sanitation2.jpg"
      ],
      story: `"My name is Adwoa Nyanta, and I live in Tainakura. Not long ago, African Assistance Plan came to our community to talk to us about sanitation and hygiene. Many of us were getting sick often, but we didn't realize that open defecation was a major cause. During the training, they explained it clearly, and I finally understood why both children and adults were falling ill so frequently."

For years, Tainakura had struggled with preventable diseases. Children suffered from diarrhea, adults missed work due to illness, and medical expenses drained family resources. The community knew something was wrong but didn't understand the connection between their sanitation practices and their health problems.

The turning point came when AAP conducted comprehensive sanitation and hygiene training in Tainakura. Using simple, relatable language and visual aids, the trainers explained how open defecation contaminated the environment and spread diseases. They showed how flies could transmit germs from feces to food, and how rainwater could wash contaminants into water sources.

"They encouraged us to come together and build a shared latrine for the community," Adwoa recalls. This was a practical solution that addressed both the health risks and the economic constraints that made individual household latrines difficult for many families.

After the AAP team left, the community didn't wait for external help. "We called a general community meeting, and everyone agreed to help," Adwoa explains. The entire community mobilized—men dug the pit, women prepared food for workers, elders provided guidance, and children helped with small tasks. "In a few days, we dug a latrine that the entire community could use."

This collective action had immediate and profound effects. "Since then, we have noticed a real change. The community feels cleaner, and there is a sense of pride in knowing that we accomplished this together," Adwoa shares with visible pride.

But the transformation went beyond the physical structure. The sanitation project sparked a broader hygiene revolution in Tainakura. "People are talking more about hygiene, washing hands regularly, and keeping our surroundings clean," Adwoa notes. What began as a single latrine project evolved into a comprehensive community hygiene movement.

The health improvements have been dramatic. Cases of diarrhea and other waterborne diseases have decreased significantly. Children are attending school more regularly, and adults are more productive in their work. The money previously spent on medical treatment is now being invested in children's education and household improvements.

Perhaps most importantly, the project demonstrated the community's capacity to solve its own problems. "We are deeply grateful to African Assistance Plan for coming to Tainakura, teaching us, and empowering our community to make this important change and more importantly, providing us with a borehole," Adwoa expresses.

The success in Tainakura has inspired neighboring communities to undertake similar projects. Community members who participated in the latrine construction have become hygiene ambassadors, sharing their knowledge and experience with others.

The Tainakura story shows that sustainable change comes not from handing solutions to communities, but from empowering them with knowledge and supporting their own initiatives. It demonstrates that when communities understand the "why" behind behavior change, they become active agents in their own transformation.`,
      impact: {
        direct: "Community-built sanitation facility",
        health: "Reduced waterborne diseases",
        social: "Community pride and unity",
        economic: "Reduced medical expenses"
      },
      metrics: [
        { label: "Community Members", value: "300+", icon: Users },
        { label: "Disease Reduction", value: "Significant", icon: TrendingUp },
        { label: "Project Duration", value: "Days", icon: Calendar },
        { label: "Hygiene Practices", value: "Improved", icon: Heart }
      ],
      testimonial: {
        text: "We accomplished this together. The community feels cleaner, and there is a sense of pride in knowing that we built our own solution.",
        author: "Adwoa Nyanta",
        role: "Community Health Advocate"
      },
      nextSteps: "Support Tainakura in maintaining their sanitation facility and help them develop a plan for household latrines in the future."
    },

    6: {
      title: "Menstrual Dignity in School",
      subtitle: "Sakina's Path to Confidence",
      beneficiary: "Muslim Adolescent Girls",
      age: "15 years old",
      location: "Techiman, Bono East Region",
      date: "June 2023",
      category: "Education",
      mainImage: "/images/Sakina.jpg",
      gallery: [
        "/images/Sakina.jpg",
        "/images/school-hygiene1.jpg",
        "/images/school-hygiene2.jpg"
      ],
      story: `Sakina is a 15-year-old girl from Techiman in the Bono East Region. She lives with her father and stepmother and grew up in a practicing Muslim family where menstruation is considered an embarrassing subject that should not be discussed, especially with men.

Each month, Sakina missed several days of school because of her period, just like many of her friends. They often gave other excuses for their absence—headaches, stomach aches, family emergencies—anything but the truth. As Sakina explains, "We were unable to talk freely about why we skip school due to culture, customs and religious taboos that forbid us to even talk about menstruation and menstrual challenges openly."

She shared the deeper struggle she faced as a young Muslim girl: "Not fasting and praying is regarded as a sin against God and disobedience to authority, but I cannot give menstruation as a reason for my inability." This created a profound spiritual and emotional conflict—caught between religious obligations she couldn't fulfill during her period and the prohibition against discussing why.

Unable to ask her father for money to buy sanitary pads, Sakina relied on pieces of cloth that were often uncomfortable, unreliable, and unhygienic. She admits, "I sometimes feel like menstruation is a punishment from God." This feeling was compounded by the isolation she experienced—sitting separately during religious activities, avoiding social gatherings, and hiding her condition from male family members.

Hope came when Africa Assistance Plan intervened in her school by providing a mechanized well, a segregated VIP toilet, and rolling out a menstrual health and hygiene campaign. These interventions addressed both the practical challenges and the cultural barriers that girls like Sakina faced.

The mechanized well ensured reliable water access for hygiene. The segregated VIP toilet provided privacy and dignity. But perhaps most transformative was the menstrual health campaign that created a safe space for girls to learn and talk about their experiences.

Through this support, Sakina says, "I now have access to free sanitary pad each month… I am confident now and I know now that menstruation is not a punishment from God." This simple provision—regular access to sanitary products—eliminated one of the biggest barriers to her school attendance.

The education component was equally important. Sakina learned that menstruation is a normal biological process, not something shameful or spiritually impure. She learned proper hygiene practices and gained the vocabulary to discuss her needs respectfully within her cultural context.

Today, she no longer misses school. "The anxiety I feel when I must change myself at school is a thing of the past," she says with relief. But the transformation goes deeper than practical convenience. "The best place I want to be now when I am in that time of the month is school… I feel comfortable, included and accepted."

This sense of inclusion is particularly significant given Sakina's religious background. The program worked sensitively within Islamic teachings, showing how menstrual hygiene management aligns with principles of cleanliness and self-care in Islam. This approach helped bridge the gap between cultural norms and girls' health needs.

Sakina's academic performance has improved dramatically. Teachers report she participates more actively in class and has become a leader among her peers. She now helps other girls in her school understand menstrual hygiene and advocates for their needs.

The program has also begun engaging parents and religious leaders, helping them understand how supporting girls' menstrual health aligns with Islamic values of care, compassion, and education. Slowly but surely, the silence around menstruation is being broken in Sakina's community.

Her story demonstrates how culturally sensitive interventions can transform girls' lives while respecting religious and cultural values. It shows that menstrual dignity is not just about products and facilities, but about changing perceptions, building confidence, and creating inclusive environments where every girl can thrive.`,
      impact: {
        direct: "School attendance restored",
        health: "Menstrual hygiene access",
        social: "Breaking cultural silence",
        educational: "Improved academic performance"
      },
      metrics: [
        { label: "School Attendance", value: "100%", icon: TrendingUp },
        { label: "Girls Supported", value: "200+", icon: Users },
        { label: "Age", value: "15", icon: Calendar },
        { label: "Confidence", value: "Transformed", icon: Heart }
      ],
      testimonial: {
        text: "I now know that menstruation is not a punishment from God. The best place I want to be now when I am in that time of the month is school.",
        author: "Sakina",
        role: "Student & Peer Mentor"
      },
      nextSteps: "Expand the menstrual dignity program to more schools and increase engagement with religious leaders to create supportive environments for girls."
    },

    7: {
      title: "A Church is Planted",
      subtitle: "New Fellowship Through Service",
      beneficiary: "Kyebi Nkwanta Community",
      age: "All ages",
      location: "Kyebi Nkwanta",
      date: "December 2025",
      category: "Spiritual",
      mainImage: "/images/nyanta2.jpg",
      gallery: [
        "/images/nyanta2.jpg",
        "/images/church-planting1.jpg",
        "/images/church-planting2.jpg"
      ],
      story: `The Lord has opened a great door for the Gospel in Kyebi Nkwanta. Pastor Broohm of the Church of Pentecost was invited to support a Jesus Film outreach in the community. During the outreach, 15 people gave their lives to Christ—a remarkable response in a community where Christian witness had previously been limited.

The Jesus Film outreach was more than just a screening; it was a catalyst for spiritual awakening in Kyebi Nkwanta. As community members watched the life of Jesus portrayed in their local language, something shifted. The message of hope, redemption, and love resonated deeply with people who had been searching for meaning and community.

Following this move of God, Pastor Broohm was led to remain in the community to start a new church. Recounting the journey, he shared, "By the grace of God, this Church was established with the support of Africa Assistance Plan."

The fellowship began humbly as a cell meeting in the house of the village chief. This was significant—the chief's openness to hosting Christian meetings signaled a new era of religious freedom and dialogue in Kyebi Nkwanta. Those first gatherings were small but powerful, as new believers shared their testimonies, studied Scripture together, and supported one another in their new faith.

Despite the early challenges—limited resources, cultural barriers, and the need to establish trust in the community—God remained faithful. The church grew slowly but steadily, attracting not just those who had responded to the Jesus Film, but also their family members and friends who witnessed the transformation in their lives.

"By the grace of God, on 7th December 2025, we moved to a new location, a few miles away from the village, and have started normal Sunday meetings as a Church," Pastor Broohm recounts with joy. This move from a private home to a dedicated meeting space marked the church's transition from an informal gathering to an established community of faith.

The growing congregation stands as a testimony of God's work through perseverance and obedience to the Great Commission. But the church's impact extends beyond Sunday services. Following AAP's holistic ministry model, the church has become actively involved in community development.

Church members have participated in AAP's sanitation and hygiene training, becoming advocates for community cleanliness. They've helped with water projects, supported vulnerable families, and become agents of reconciliation in community conflicts. This integration of spiritual ministry and practical service has strengthened the church's witness and deepened its roots in the community.

The church in Kyebi Nkwanta has become more than just a place of worship—it's a community center, a support network, and a catalyst for positive change. New believers report transformed lives: healed relationships, freedom from addiction, renewed hope, and a sense of belonging they had never experienced before.

Pastor Broohm's leadership exemplifies the principle of contextual ministry—understanding the community's needs, respecting its culture, and demonstrating God's love through both word and deed. The church's growth has been organic, grounded in genuine relationships and responsive to the community's real needs.

The success in Kyebi Nkwanta has inspired similar outreach efforts in neighboring communities. Pastor Broohm now mentors other church planters, sharing the lessons learned about building trust, integrating service with evangelism, and nurturing new believers.

This story demonstrates how holistic ministry—combining spiritual outreach with practical community development—can plant churches that are sustainable, impactful, and deeply connected to their communities. It shows that when the Gospel is lived out in service and love, it transforms not just individuals, but entire communities.`,
      impact: {
        direct: "New church established",
        spiritual: "15 new believers",
        community: "Holistic ministry model",
        social: "Community transformation"
      },
      metrics: [
        { label: "New Believers", value: "15", icon: Users },
        { label: "Church Growth", value: "Steady", icon: TrendingUp },
        { label: "Date Established", value: "Dec 2025", icon: Calendar },
        { label: "Community Impact", value: "Significant", icon: Heart }
      ],
      testimonial: {
        text: "By the grace of God, this Church was established with the support of Africa Assistance Plan. The growing congregation stands as a testimony of God's work.",
        author: "Pastor Broohm",
        role: "Church Planter"
      },
      nextSteps: "Support the new church with discipleship materials and leadership training, and replicate the holistic church planting model in other communities."
    }
  };

  const getRelatedStories = (currentId: number): RelatedStory[] => {
    const currentProject = projects[currentId];
    if (!currentProject) return [];

    const related = Object.entries(projects)
      .filter(([id]) => Number(id) !== currentId)
      .map(([id, project]) => ({
        id: Number(id),
        title: project.title,
        description: project.story.split('. ').slice(0, 2).join('. ') + '.',
        image: project.mainImage,
        category: project.category,
        beneficiary: project.beneficiary,
        age: project.age
      }))
      .sort((a, b) => {
        // Prioritize same category
        if (a.category === currentProject.category && b.category !== currentProject.category) return -1;
        if (b.category === currentProject.category && a.category !== currentProject.category) return 1;
        return 0;
      })
      .slice(0, 3);

    return related;
  };

  const project = projects[id as string];

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
      <section className="relative py-32 min-h-[65vh] flex items-center overflow-hidden">
{/* The container for the image must be absolute and full size */}
  <div className="absolute inset-0 w-full h-full">
<div className="w-full h-full object-cover object-[top_center] block bg-brand-blue"></div>
    
    {/* Darker gradient for better text contrast */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div> */}
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


      {/* Related Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Stories of Hope</h2>
            <p className="text-xl text-gray-600">Discover other lives transformed through our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getRelatedStories(Number(id)).map((relatedStory, index) => (
              <motion.div
                key={relatedStory.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <Link to={`/impact/${relatedStory.id}`} className="block">
                  <div className="relative overflow-hidden h-72 group"> {/* Increased height to h-72 for better visibility */}
                    <img
                      src={relatedStory.image}
                      alt={relatedStory.title}
                      /* Added absolute inset-0 to force the image to pin to all corners */
                      className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                      style={{ imageRendering: 'auto' }}
                      loading="lazy"
                    />

                    {/* Category Badge - Added z-10 to keep it above the image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        {relatedStory.category}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {relatedStory.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedStory.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedStory.beneficiary}</span>
                      <span className="font-semibold">{relatedStory.age}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-12 rounded-xl shadow-sm"
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
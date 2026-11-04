/** Verbatim body copy from the supplied Company Profile. Page numbers include the cover.
 * Only paragraph wrapping and typographic quotation marks are normalized.
 */
export type ProfileSolution = {
  page: number;
  title: string;
  brands: string[];
  paragraphs: string[];
  bullets?: string[];
};

export const profileSolutions: Record<string, ProfileSolution> = {
  "building-management": {
    "page": 8,
    "title": "Integrated Building Managment System",
    "brands": [
      "honeywell",
      "trend"
    ],
    "paragraphs": [
      "Integrated Building Management Systems (IBMS) are computer-based systems that help to manage, control and monitor building technical services (HVAC, Lighting Utility etc.) & the energy consumption of devices used by the building. They provide the information & the tools that building managers need both to understand the energy usage of their buildings & to control and improve their buildings’ energy performance.",
      "Felix represents Trend™ and WEBs-N4™ Building Energy Management Systems (BEMS) help reduce energy waste & costs while still maintaining occupant comfort. Trend™ and WEBs-N4™ is able to integrate with many other building systems – fire, security, lighting, & Access to name a few. It will place you at the cutting edge of building cybersecurity, sustainability, innovation, and efficiency.",
      "Installing a Trend™ or WEBs-N4™ helps to futureproof your building, getting it ready for the smart era by intelligently monitoring & controlling your building services to deliver a built environment that puts its people and processes at the heart of what it does."
    ]
  },
  "scada": {
    "page": 9,
    "title": "Supervisory Control & Data Acquisition System",
    "brands": [
      "siemens"
    ],
    "paragraphs": [
      "Digitalization is noticeably changing our world – and the world of industry. The data volume in modern industrial plants is growing continuously. That brings new challenges for SCADA solutions: Enormous data volumes must be managed and archived for the long term. At the same time, production processes must be monitored and controlled as reliably, efficiently, and productively as possible and they must be constantly optimized. With its scalable, open system landscape for the vertical integration of data from the production to the MES/ERP level up to cloud solutions.",
      "Felix offers SIMATIC SCADA from SIEMENS - a solution that is ready for the challenges of today and tomorrow."
    ]
  },
  "home-automation": {
    "page": 10,
    "title": "Home Automation & Lighting Control System",
    "brands": [
      "control4"
    ],
    "paragraphs": [
      "As you look for a smart house system, there are several things to keep in mind. A system with the right functionality, strong compatibility, & excellent technical support will be your best bet. Above all, try to look for a system that best suits your unique needs.",
      "Felix offers Control4™- the ultimate home automation solution by making the electronic components and systems you already use on a daily basis work together, seamlessly. By integrating everything from lighting, music, video, climate control, and security-even smartphones & tablets-Control4 creates personalized experiences that enhance your life & work with added comfort, savings, convenience, and peace of mind."
    ],
    "bullets": [
      "ENTERTAINMENT",
      "SMART LIGHTING",
      "COMFORT & CONVENIENCE",
      "SAFETY & SECURITY"
    ]
  },
  "lighting-control": {
    "page": 11,
    "title": "Residential & Commercial Lighting Control System",
    "brands": [
      "lutron"
    ],
    "paragraphs": [
      "When it comes to energy efficiency, you have plenty of options. However, many homeowners overlook a key energy-saving opportunity – lighting. It accounts for almost 20% of the average homeowner’s monthly electric bill. Lutron light controls can help increase energy savings throughout your home.",
      "Felix presents Lutron® which helps you produce the Right Environment with lighting, shade, and temperature controls that adapt to your changing needs. We have a wide range of solutions for your space, your budget, and your performance requirements.",
      "Whether you are looking to reduce energy costs, increase comfort, or manage light control solutions, our solution offers the flexibility you need with the energy savings you want."
    ]
  },
  "fire-detection": {
    "page": 12,
    "title": "Life Safety & Critical Asset Protection",
    "brands": [
      "fike"
    ],
    "paragraphs": [
      "When protecting buildings & mission-critical assets, every second counts. Fike’s comprehensive fire protection systems can detect a fire in its earliest stages & suppress it without causing any collateral damage, all occurring within just seconds of combustion.",
      "Every year uncontrolled fire destroys irreplaceable assets, cultural landmarks and people’s lives. Rely on Fike to ensure the unique fire hazards that threaten your organization are quickly detected and reliably suppressed with our comprehensive fire protection solutions.",
      "One of the biggest menace and threats to human life and civilization is Fire. If a severe fire breaks out it can destroy houses, take away lives, and create havoc. Stopping a fire is indeed a very difficult task. Since prevention is always better than cure, the best way to fight this problem is by installing Fire Alarm systems on your premises.",
      "When smoke and fire threaten critical business assets, reaction time is crucial. Fike designs fire detection & protection products that utilize the most innovative technologies yet are convenient to install and operate. Whether you need an intelligent or conventional fire detection & suppression control system, linear heat detection, early warning detection, or an emergency power-off system, Fike has the fire detection and protection solution to fit your needs.",
      "The world has changed dramatically since Fike entered the fire protection industry more than 50 years ago. Fike’s products have evolved alongside today’s technologies to protect the world’s data centers, telecommunications facilities, chemical processing factories, manufacturing facilities, and power plants from fires. Disaster doesn’t wait. Stay proactive, stay protected with Fike.",
      "Once a fire starts, it will eventually go out. However, what happens to your building between the start and the finish of a fire can be a disaster! A well-designed automatic Protection system can mitigate the consequences of a fire in your building perhaps saving your product, your building, & even your business.",
      "Felixs design process starts by obtaining an understanding of the building and its various occupancies. We implement all applicable codes and standards, and keep you as involved in the design process as you want to be. The ultimate product is a well-designed Fire Protection system."
    ]
  },
  "security": {
    "page": 13,
    "title": "Integreted Security Management System",
    "brands": [
      "rbh"
    ],
    "paragraphs": [
      "We understand your need to effectively secure your intellectual property, buildings, and business. That’s why our Intelligent Security systems form an entire ecosystem of smart devices that give you the power to protect what matters most – your assets and people. With these state-of-the-art devices, you can enhance your overall security and confidently deal with both existing & emerging security challenges.",
      "We provide a Security Management System for multi-site/- multi-tenant applications, that seamlessly integrates Access Control, Alarm Monitoring, and Video surveillance into an elegant & versatile matter.",
      "No matter what kind of business you operate, securing your assets and people from unscrupulous elements is the key to your success. Our customized, integrated security solutions are designed to meet the particular needs of your site and end users, now and in the future."
    ]
  },
  "variable-frequency-drives": {
    "page": 14,
    "title": "Variable Frequency Drives",
    "brands": [
      "danfoss"
    ],
    "paragraphs": [
      "Since introducing the world to AC drives back in 1968, Danfoss continued to lead the charge when it comes to bringing variable speed control to electric motors. Drawing on decades of passion and experience within a wide range of industries to deliver drives that work with any motor or system.",
      "At Danfoss Drives, you can find electric and energy efficient solutions to help decarbonize any industry. Improve productivity and reduce CO2 footprint in HVAC, water treatment, energy, marine and offshore, mining and minerals, food and beverage, heavy industries, and more. Here you can browse the world’s most extensive portfolio of variable speed drives and power converters, as well as software tools and lifecycle services.",
      "Felix represents Danfoss who is the world leader in dedicated drives. VLT® drives and VACON® drives are independent of motor manufacturers and adapt to any motor technology. Danfoss’s applied expertise and understanding of your business allow us to deliver dedicated, reliable, and user-friendly products and services that fit your specific application requirements and reduce your total cost of ownership."
    ]
  },
  "hvac-controls": {
    "page": 15,
    "title": "HVAC Control Products",
    "brands": [
      "belimo"
    ],
    "paragraphs": [
      "At Felix we serve our customers business needs in a more efficient manner with our standard product offering and Local presence, which enable us to offer you with the best customized solutions in HVAC industry to cover all your needs.",
      "In order to meet demanding applications that satisfy current building code requirements for all structures. Our HVAC Control Products includes:"
    ],
    "bullets": [
      "Field-configurable stand-alone controllers",
      "Pressure Independent Control cum Balancing Valves",
      "2 Way & 3 Way Control Valves & Actuators",
      "Damper Actuators",
      "Manual Balancing Valves",
      "Sensors & Transmitters",
      "Thermostat Controllers",
      "Energy Meters",
      "Manual Valves"
    ]
  },
  "sensors": {
    "page": 16,
    "title": "Sensor Technology & Field Devices",
    "brands": [
      "ss"
    ],
    "paragraphs": [
      "Society is digitalising at a rapid pace. Our customers expect solutions for greater ease of use, easier networking and more sustainable environmental sensor technology.",
      "S+S has responded to the zeitgeist and accelerated the pace of its innovations – without compromising on proven functionality."
    ]
  },
  "manual-valves": {
    "page": 17,
    "title": "Manual Valves & Accessories",
    "brands": [
      "tecofi"
    ],
    "paragraphs": [
      "We guarantee products of a high quality level, that meet the latest European and international standards",
      "Our dedicated sales teams work on a daily basis to ensure that we are always close to our partners. All of our employees are attentive to the needs and developments of the market and are able to respond quickly and effectively to your projects"
    ],
    "bullets": [
      "FLUID TRANSFER",
      "PHARMA",
      "CHEMICAL",
      "AIR CONDITIONING SYSTEM"
    ]
  },
  "parking": {
    "page": 18,
    "title": "Parking Guidance & Managment System",
    "brands": [
      "parkhelp"
    ],
    "paragraphs": [
      "When it comes to Commercial and Mixed-Use Properties, parking is your first impression. According to a national survey of tenants, parking is the number one amenity – & for good reason. Without efficient and plentiful parking, you limit access to businesses, homes, and more. With that in mind, Felix offers customizable, expandable, and adaptable parking solutions for all types of properties. These solutions optimize parking operations, allowing you to dramatically improve tenant retention, enhance property image & value, and increase revenue while decreasing operating costs."
    ]
  }
};

export const profileServiceStages = [
  {
    "title": "Design & implement a high-performance solution",
    "text": "We put all the necessary expertise, time, and resources behind your specific project making sure you come away with the best, most efficient design. From there we see things through all the way to the full performing system exactly as you expect it."
  },
  {
    "title": "Provide Service",
    "text": "We’ll help with the design and supply of the latest control technology for all your projects and installations. We’ll tackle your HVAC, fire safety, Security and building performance head on, and deliver the financial and environmental results you need to get ahead... and stay ahead!"
  },
  {
    "title": "Operate and maintain your new system",
    "text": "We stay with you through the entire life-cycle of your system to make sure performance stays on target no matter what. Our diagnostics and predictive maintenance allow us to identify problems before they can compromise your building and comfort."
  }
];

export const profileResources = [
  "Trained & Experienced Technical Team",
  "24/7 Service Support Arrangement",
  "Dedicated Service Support Team",
  "Dedicated Transportation Facility",
  "Adequate Tools and Equipment",
  "Available Spare Parts"
];

export const profileSectorFocus = [
  "Reliability",
  "Energy and cost efficiency",
  "Environmental responsibility",
  "Technological expertise",
  "Meeting or exceeding environmental standards",
  "Fulfilling the individual business need of a client no matter how simple or complex"
];

export const profileSectorIntro = "We understand the needs of the different market segments and partner with you to develop and deliver the right system and services for your success.";

export const profileAbout = [
  "A group of highly qualified engineers with a decade of industry experience in Building Management Systems, Fire Detection and Protection Systems, and Security Systems in Bangladesh conceived the idea of an engineering firm that would render its expertise to the building services business",
  "Felix Controls Limited was founded in the month of December 2010 duly incorporated under the Company Act (Act XVIII) of 1994 by the Government of the People's Republic of Bangladesh vide Certificates of Incorporation No # C88761/10 issued by the Registrar of Joint Stock Companies & Firms, Bangladesh.",
  "Felix offers a collective systems knowledgebase with the application's expertise to create truly comprehensive solutions. With our broad product and service offerings, we can help customers achieve their business objectives. Our integrated solutions help reduce energy use & costs while meeting the high levels of comfort & performance critical to our customer's business operations.",
  "We are now a visual communication company specializing in Building Management Systems. We have established ourselves as one of the leading System integrators in Bangladesh.",
  "We are one of the market leaders in executing BMS Systems for reputable organizations in the public & private sectors in Bangladesh.",
  "We provide clients with a complete service package, from inception & planning to design, commissioning, & management for a diverse range of projects. By keeping a professional & pragmatic approach, we have successfully executed a multitude of projects of unquestionable quality, thus offering services in various roles and accumulating comprehensive industry knowledge about building business as a whole.",
  "Felix is about commitment to excellence, building relationships, expanding horizon, evaluating standards, redefining quality, & being devoted to providing the highest level of customer service. It is our customer care professionals and product application engineers that continue to make Felix the top choice for engineers, architects, & contractors in the building construction process in Bangladesh."
];

export const profilePurpose = [
  [
    "Our mission",
    "Our mission is to provide quality & innovative solution to our valued customers, maintain stringently ethical standard in business operation also ensuring benefit to the shareholders and the society at large."
  ],
  [
    "Our vision",
    "Our vision is to establish Felix Controls Limited as Solution Integrator in Bangladesh leading to accretion of wealth through excellent performance, products, services and efficient use of resources."
  ],
  [
    "Our objective",
    "Our objective are to conduct transparent business operation based on market mechanism within the legal & social frame work with aim to attain the mission reflected by our vision."
  ]
];

export const profileReasons = [
  {
    "title": "We’ll provide the answers you need and put them into effect.",
    "text": "Our team has experience working for major corporations as well as for small businesses. We understand the pressures weighing on business owners and senior decision-makers, whether it’s the daily decisions faced by a small family firm or a key change to a portfolio of products worth millions of dollars. We know what works and what doesn’t. We put our proposals into action for you. Our solutions are fully integrated so building owners can save time and money by installing any combination of HVAC, lighting, and security systems as fit their needs and"
  },
  {
    "title": "Our experts are multi-skilled, and we can take a holistic view.",
    "text": "Our skill set extends across many overlapping areas of business expertise: HVAC Control, Building Automation, SCADA, Fire Detection and suppression, Integrated Security, Home Automation and Lighting Control, and Parking Management. This means you can make smarter decisions faster, without endless meetings with large groups of people. However, on the rare occasions you may need additional help, we can access specialists from our Strategic partners."
  },
  {
    "title": "We’re committed experts not ‘consultants’.",
    "text": "We don’t suddenly appear, make a few general observations, and then vanish, leaving you with a large bill. We’re willing to work hand-in-hand with your business at a deeper, design level. You can trust us. We’re open, honest, knowledgeable, committed, and genuinely care about making your company a success. We’ll stay for as long as you need us."
  },
  {
    "title": "We can make success sustainable.",
    "text": "If something goes wrong on a project, as things sometimes do, Our commitment is to make every reasonable effort to correct the situation to ensure that we have satisfied customers when the project is complete. Be it providing technical support remotely or dispatching personnel to a job site. Every member of our staff, at some point, should be involved in our customer support system. Whether it is the project manager checking and rechecking the installation process, the logistics department that ensures goods reach retail points on time, or the front-desk executive answering phone calls & emails, several persons are involved in their own capacity to lend customer support."
  }
];

export const profilePartnerCopy : Record<string, string> = {
  "honeywell": "Honeywell a Fortune 100 company creates solutions to improve the quality of life of people around the globe: generating clean, healthy energy - and using it more efficiently. Increasing our safety and security. With more than 127,000 employees worldwide, including more than 22,000 engineers and scientists, we have an unrelenting commitment to quality and delivering results in everything we make and do.",
  "siemens": "Siemens AG, 175-year-long history is the largest multinational engineering company in Europe. Its main international branches are in Berlin, Munich and Erlangen, Germany. The company has 15 business segments, with three main ones: industrial, energy and healthcare. Siemens has businesses in 190 countries, employing an estimated 402,000 people. Siemens' revenue in 2009 was €76,651 billion.",
  "trane": "Trane Inc. is a subsidiary of Ingersoll Rand and is the successor company to the American Standard Companies. It is a global provider of heating, ventilating and air conditioning (HVAC) systems and building management systems and controls. A global, diversified manufacturing and services organization, Trane employs more than 29,000 people at 104 manufacturing locations in 28 countries and has annual sales of more than $8 billion.",
  "control4": "Control4 develops smart home automation systems to control lighting, entertainment, security, energy, and other connected devices. Founded in 2003 by Eric Smith, Wil West and Mark Morgan, Control4 debuted at the CEDIA 2004 home technology trade show and released its first products later that year.",
  "lutron": "The Lutron story began in the late 1950s in Joel Spira’s makeshift lab in New York City. That all changed in 1959 when Spira emerged from his lab with a solid-state dimmer that could replace the light switch in a standard residential wall box. By 1961, when Joel and Ruth Spira incorporated Lutron Electronics, they knew that lighting control could contribute to society in multiple ways. Dimmers were both elegant & useful, & they allowed people to control their lights as never before.",
  "fike": "Founded in 1945 and headquartered in Blue Springs, Missouri, USA, Fike has grown to become a globally recognized supplier doing business with Fortune 500 companies. We design and build precision-engineered solutions and provide a personalized customer service experience for businesses around the world that want peace of mind from experiencing the consequences of serious financial loss or a devastating disaster.",
  "danfoss": "The Danfoss Group is a global producer of products & services used in areas such as cooling food, air conditioning, heating buildings, controlling electric motors and powering mobile machinery. Danfoss was founded in 1933 by Mads Clausen, and is today almost entirely owned by The Bitten and Mads Clausen Foundation",
  "rbh": "Since 1995 RBH Access Technologies has been known for quality and innovative design. Product design and manufacturing takes place at their Brampton, Ontario facility in Canada. Sales, distribution, and support centers around the world provide services tailored to local customers' RBH needs as they market their products through an international network of security dealers and systems integrators.",
  "belimo": "Belimo is a listed technology company with a staff of close to 1400 worldwide. They have developed, manufactured and distributed electric actuators for air dampers and valve technology for heating, ventilation and air conditioning systems since 1975. With their comprehensive range of products, we have become world leaders in this specific mark.",
  "ss": "S+S Regeltechnik is a European leader in advanced sensor technology for instrumentation and control in facility automation and mechanical engineering. With headquarters in Nuremberg, Germany, we develop and manufacture a comprehensive portfolio high-performance precision transducers. Controllers and switches for heating, air conditioning and ventilation, refrigeration and cleanroom engineering, flow and limit value control as well as light and motion detection.",
  "tecofi": "Founded in 1985 in the Rhône-Alpes region, we design, manufacture and distribute taps in France and around the world. As a member of French Fab, we are a key player in the water and industry sectors. Established around the world with 5 subsidiaries and an extensive network of partners, we are present in more than 80 countries.",
  "parkhelp": "ParkHelp looks back on two decades of pioneering excellence in the realm of parking guidance technology. With a global presence spanning offices in the United States, Spain, Brazil, and New Zealand, ParkHelp stands at the forefront of innovation, serving over 500,000 parking spaces worldwide."
};

export const profilePartnerIntro = "Felix is happy to announce it has the unique distinction of being associated with Multinational Organizations that are global leaders in their business areas. These organizations have entrusted Felix with the responsibility of handling their products, systems, services and solutions to the Bangladesh market; needless to say, this was only after the organizations had examined & were satisfied with the levels of technical expertise and managerial competence required to meet their exacting international quality standards.";

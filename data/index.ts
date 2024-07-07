export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Organisations", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I make client collaboration and open communication a priority.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I can accommodate communications across different time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-2 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Community Skill-Sharing Platform!",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Trip Estimation Application",
    des: "A full-stack web application for trip cost estimation during reimbursements, ensuring scalability with distributed systems concepts",
    img: "/tripe.png",
    iconLists: ["/re.svg", "/node.svg", "/tail.svg", "/azure.svg", "/post.svg"],
    link: "https://github.com/kira-03/Trip-Estimator-WEB",
  },
  {
    id: 2,
    title: "Explainable AI in Health Care",
    des: "Contributed in a research project to enhance Convolutional Neural Networks (CNNs) efficiency and interpretability",
    img: "/xai.png",
    iconLists: [
      "/py.svg",
      "/tensor.svg",
      "/anaconda.svg",
      "/latex.svg",
      "/pandas.svg",
    ],
    link: "https://github.com/kira-03/XAI_Project",
  },
  {
    id: 3,
    title: "The Muzic Blog",
    des: "Created a vibrant online music blog to celebrate artists and foster community with engaging design and content, featuring personal favorites like Shawn Mendes.",
    img: "/muzic.png",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/js.svg",
      "/boot.svg",
      "/codepen.svg",
    ],
    link: "https://github.com/kira-03/The_MuZiC_Blog",
  },
  {
    id: 4,
    title: "The Unity 360",
    des: "Designed a virtual reality application offering immersive journeys through diverse environments with 360-degree images and videos.",
    img: "/pana.png",
    iconLists: [
      "/csharp.svg",
      "/cardboard.svg",
      "/unity.svg",
      "/360.svg",
      "/ps.svg",
    ],
    link: "https://github.com/kira-03/Unity360-Interactive-Panoramic-Worlds",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Pursuing my passion for technology at Amrita Vishwa Vidyapeetham, one of India's premier institutions, where I'm honing my skills in Computer Science to create innovative solutions that make a difference!",
    name: "Amrita Vishwa Vidyapeetham",
    title: "OCT 2021 - JUNE 2025",
  },
  {
    id: 2,
    quote:
      "Unleashing my organizational skills as a dedicated member of the Event Management Team at IETE Club, my college's prestigious technical community, where I'm instrumental in conceptualizing and executing impactful events that bring people together and foster innovation!",
    name: "Institution Of Electronics and Telecommunication Engineers",
    title: "NOV 2023 - PRESENT",
  },
  {
    id: 3,
    quote:
      "Collaborated with the esteemed SAP Labs as a mentee, where I spearheaded a high-performing cross-functional team of 6 to drive innovation, and successfully delivered a project that enhanced the functionality of SAP Concur, further solidifying my expertise in team leadership and technical excellence!",
    name: "SAP Labs",
    title: "FEB 2024 - APRIL 2024",
  },
  {
    id: 4,
    quote:
      "Selected from over 83,000+ applicants, I'm thrilled to join Amazon Summer School, where I'll be mentored by Amazon Scientists and gain expertise in Machine Learning, Generative AI, and Large Language Models, accelerating my career growth and industry knowledge.",
    name: "AMAZON SUMMER SCHOOL",
    title: "JULY 2024 - PRESENT",
  },
];

/*export const companies = [
  {
    id: 1,
    name: "amazon",
    img: "/IETE.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "sap",
    img: "/sap name.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];*/

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "XAI Researcher",
    desc: "Researched on CNN efficiency and interpretability enhancements in healthcare.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Single Point Of Contact",
    desc: "Served as SPOC, streamlined project communication and backlog for seamless info exchange and stakeholder satisfaction.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "GitHub Actions Workflow Developer",
    desc: "I designed and implemented a GitHub Actions workflow to automate testing and CI/CD pipelines, ensuring efficient and reliable code deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/kira-03",
  },
  {
    id: 2,
    img: "/discord.svg",
    link: "https://discord.com/users/guru7186",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/guruprasath-maheswaran-702634305/",
  },
  
  
];
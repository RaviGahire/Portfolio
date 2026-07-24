export interface Project {
  id: number;
  name: string;
  year: number;
  design: string;
  role: string;
  stack: string;
  desc: string;
  url: string;
  category: string;
  image: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    name: "Master Track (LMS)",
    year: 2025,
    design: "By my self",
    role: "MERN Stack Developer",
    stack: "React, Tailwind CSS, Node.js, express.js",
    desc: "A modern portfolio website featuring smooth animations, responsive layouts, and a clean user experience.",
    url: "https://harryjatkins.com/",
    category: "Learning platfrom website",
    image:
      "https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Botleague.in",
    year: 2024,
    design: "Figma",
    role: "Full stack developer intern",
    stack: "React.js,JavaScript,Typescript, CSS, HTML, Tailwind CSS, Java",
    desc: "A creative agency website with immersive scrolling effects, elegant typography, and interactive sections.",
    url: "https://aetherstudio.com/",
    category: "Studio Website",
    image:
      "https://images.unsplash.com/photo-1783429742967-dad146c20897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  },



];

type skills = {
  name: string;
  img: string;
};

export const skillImages: skills[] = [
  {
    name: "html",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
  },
  {
    name: "Css",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    name: "React Js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hhv7kFXJIk_cJ95J_zrK26cDFQPYHoHFyBtvrMwKRg&s=10",
  },
  {
    name: "Tailwind Css",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp1KtxHwrs2XlXC1xI912nK9awB0LR20GMvgHRW7m-A&s=10",
  },
  {
    name: "JavaScript",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlvHmiH22cX8B9cdJ9FKCBJNhvEqBM8fkQWsjVm_aQA&s=10",
  },
  {
    name: "TypeScript",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcTdrgd1PJKSRU7X-4T05EprGo0jpnksh5if0qsgUUg&s=10",
  },
  {
    name: "Node Js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgM8fZVPkLAW2Z5LPbDtLyVB4oyRAfihgXz2vE-OpOJ7VptN1e3WtGCxwQ&s=10",
  },
  {
    name: "MongoDB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePD5QOo7Oi41KyDK6VEYSYUJ_bo7oeyWQnSjBVxwDrQ&s=10",
  },
  {
    name: "Express Js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRks1x32lO-Gn79ulpJQZw_ZDWbFR35Y-9MFqx0uOgxUw&s=10",
  },
  {
    name: "Figma",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw5DAz6KVHQFt_4j3b30e23Gdu9vx5pROp_fAg_BmTQ&s=10",
  },
  {
    name: "Vs Code",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoH3-Kz2zs_keybFP8apPDQmL6rcG_eb7AhCXz9J-7aA&s=10",
  },
  {
    name: "Postman",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgAzXYltcAawiBh-pWq71vvSKLOl0Nt1xRpkn6LWTSg&s=10",
  },
];

export const ExperienceData = [

    {
    org: "Botmakers",
    role: "Full stack intern",
    fromTo: "Jun 2026 - Present",
  },
  // { org: "Self-Directed learning", role: "Mern stack", fromTo: "Ongoing" },
  {
    org: "Rego Digital Solution",
    role: "React Js intern",
    fromTo: "May 2025 - May 2026",
  },
  {
    org: "Mphasis Ltd",
    role: "Trn Processing Officer",
    fromTo: "May 2022 - May 2025",
  },
 
];

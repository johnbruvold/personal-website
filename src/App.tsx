import { useState } from "react";
import "./App.css";
import InventoryList from "./Components/inventoryList";
import ItemDescription from "./Components/itemDescriptions";
import type { Item } from "./Components/inventoryList";

function App() {
  var Menus = {
    General: [
      {
        itemName: "About Me",
        attribuites: {NAME:"JACK",YR: "SOPH.", WHERE: "U.C. Berkeley"},
        description: "I'm a second-year Chemical Biology and Data Science double major(3.973 GPA) at the University of California, Berkeley. I am interested in many things, but in particular computational biology, neuroscience, machine learning, and statistics. Outside of academics, I love basketball, fashion, thrifting, sewing, poetry, and video games. Feel free to contact me at my email: johnbruvold@berkeley.edu.",
        image: "suit.png",
      },
      {itemName:"Awards",attribuites:{},description:"Dean's Honors' List College of Chemistry Fall 2024(Top 10% of students within the College. SEED Honors Program, Top 1% of STEM Applicants to Berkeley.",image:"awards.png"},
      {itemName:"LinkedIn",attribuites:{LNK:"https://www.linkedin.com/in/jack-bruvold/"},description:"Here's my LinkedIn",image:"LinkedIn.png"},
      {itemName:"GitHub",attribuites:{LNK:"https://github.com/johnbruvold"},description:"Here's my GitHub account",image:"image.webp"}
    ],
    Experience: [
      {
        itemName: "Browhawn Lab",
        attribuites: {
          START: "08/25 ",
          END: "N/A",
          POS: "RESEARCHER",
          LOC: "BERKELEY,CA",
        },
        image: "labcoat2.png",
        description:
          "Researching the structure and function of membrane channels present in mammalian neurons.Exploring tool development and protein engineering of membrane tension sensors. Developing skills in cell culture of mammalian cell lines and strengthening understanding of fluorescent microscopy techniques. Created a Python pipeline to handle imaging data.",
      },
      {
        itemName: "BrainHub",
        attribuites: {
          START: "08/25 ",
          END: "N/A",
          LOC: "BERKELEY, CA",
          POS: "CO-FOUNDER",
        },
        description:
          "Organized club meetings and gathered funding to raise interest in Berkeley’s new Department of Neuroscience. Present novel and interesting papers in the Neuroscience field to a group of students. Aid companies by providing insight into the biological sciences",
        image: "Speech.png",
      },
      {
        itemName: "HHMI Janelia Research Campus",
        attribuites: {
          START: "05/25",
          END: "08/25",
          LOC: "ASHBURN, VA",
          POS: "RESEARCHER",
        },
        description:
          "Worked on the optimization of genetically encoded voltage sensors with Eric Schrieter. Learned techniques and computational methods in protein engineering, as well as fluorescent microscopy and electrophysiology. Culminated in a 15-minute seminar given to researchers at Janelia and a separate poster session. ",
        image: "Chemist.png",
      },
      {
        itemName: "Sports Analytics Group",
        attribuites: {
          START: "02/25",
          END: "N/A",
          LOC: "BERKELEY,CA",
          POS: "DATA JOURNALIST",
        },
        description:
          "Authored multiple articles relating data science to sports, in particular basketball.Learned to apply Statistical Modeling Techniques to real-world data, as well as the creation of convincing visualizations to explain my arguments",
        image: "HeaveHo.png",
      },
      {
        itemName: "CURIE",
        attribuites: {
          START: "02/25",
          END: "05/25",
          LOC: "BERKELEY,CA",
          POS: "STUDENT",
        },
        description:
          "As apart of the Chemistry Undergraduate Research Initiative and Enrichment Program in the College of Chemistry, I Presented recent work on the metabolic engineering of E.coli to produce a novel antibiotic and some closely related derivatives. Developed an understanding of protein purification, metabolic engineering, and organic synthesis",
        image: "QuantumChemist.png",
      },
    ],
    Projects: [
      {
        itemName: "Chopped or Not",
        attribuites: {
          WHEN: "WINTER '25",
          TYPE: "WEBSITE/MODEL",
          LNK: "https://github.com/johnbruvold/Scary-Stealth-Startup",
        },
        description: "In collaboration with Miguel Contreras, we developed a model that takes in a picture of a users face, determines common facial measurements, which is then used to determine facial attractiveness. Done with MediaPipe, OpenCV, and FastAPI",
        image: "hot-or-not.png",
      },
      {
        itemName: "Personal Website",
        attribuites: {
          WHEN: "WINTER '25",
          TYPE: "WEBSITE",
          LNK: "https://johnbruvold.vercel.app/",
        },
        description:
          "Created a website for myself to host all of my projects, contacts, etc with a Fallout(the videogame) Theme. Developed using REACT & TailwindCSS, deployed with Vercel. Taught me a lot about website design and how to apply my HTML + CSS knowledge.",
        image: "Science_icon.png",
      },
      {
        itemName: "The NBA's Perimeter Problem",
        attribuites: { WHEN: "SPRING '25", TYPE: "ARTICLE",LNK:"https://sportsanalytics.studentorg.berkeley.edu/articles/perimeter-problem.html" },
        description: "The NBA doesn't have a good way to quantify perimeter defense, especially with a point value. I tried to make a new statistic by combining other stats together to measure a given players defensive value on the perimeter.",
        image: "Comprehension.png",
      },
    ],

    Skills: [
      {
        itemName: "Life Science",
        attribuites: {},
        description: ">3 years of wetlab exsperience. Great familiarity with: PCR, Gibson Assembly, ELISA, Gel Electrophoresis, Microscopy, Fluorescent Microscopy, Electrophysiology, STORM, Mammalian Cell Culture, Bacterial Cell Culture, Protein Engineering, Protein Purification, Metabolic Engineering, CRISPR, Primer Design, Cryo-EM, Structural Biology.",
        image: "LivingAnatomy.png",
      },
      {
        itemName: "Chemistry",
        attribuites: {
        },
        description: "2 years exsperience through U.C. Berkeley's College of Chemistry which has given me time to do many different techniques; Mass-Spec, HPLC, TLC, Column Chromatography, H-NMR, C-NMR, Liquid-Liquid Extraction,  Organic Synthesis, Dye Chemistry, Polymer Chemisty, Perfume Chemistry",
        image: "labcoat.png",
      },
      {
        itemName: "Computational",
        attribuites: {},
        description: "Languages: Python, JavaScript, C, HTML, CSS, & MATLAB. I also have familiarity with: PANDAS, MATPLOTLIB, NumPy, SciPy, MediaPipe, OpenCV, FastAPI, Linear Regression Models, Ridge Regression Models, k-NN Models, TailwindCSS, Git & Version Control. Outside of Computer and Data Science, I know how to CAD, 3D Animate(Blender), and some circuit design",
        image: "Four_Eyes.png",
      },
      {
        itemName: "Theory",
        attribuites: {},
        description: "Learned through classes: Multivarible Calculus, Linear Algebra, Discrete Mathematics, Physics, Quantum Mechanics, Membrane Chemistry, Neuroscience, Introductory Finance & Economics, ",
        image: "Retention.png",
      },
      {
        itemName: "Soft Skills",
        attribuites: {},
        description: "Collaboration, Speaking, Teamwork, Critical Thinking, Support ",
        image: "GoodNatured.png",
      },
    ],
  };

  const [currentMenu, setCurrentMenu] = useState("General");
  const [currentItem, setCurrentItem] = useState(
    Menus[currentMenu as keyof {}][0] as Item
  );
  const handleSelectItem = (item: Item) => {
    setCurrentItem(item);
  };
  return (
    <>
      <body className="blur-[0.75px] bg-[#926A25] mask-t-to-90% mask-t-from-70%  mask-size-[100px_2.75px] font-mono brightness-115 font-black overflow-hidden  ">
        <div className="border-2 mix-blend-overlay absolute inset-y-5 inset-x-4 mask-exclude  mask-y-to-5% "></div>
        <div className="animate-scroll w-screen h-10 blur-[35px] bg-white/45 mix-blend-overlay absolute top-0 left-0 z-3"></div>
        <div className="bg-[#926A25] absolute top-2 left-2 -mt-4 ml-2 size-min">
          <h1 className="text-left font-stretch-[23.66%] mix-blend-overlay opacity-55">
            {currentMenu}
          </h1>
        </div>
        <div className="absolute opacity-55 mix-blend-overlay inset-4 mt-7 mb-3  inline-grid grid-cols-7 grid-rows-1">
          <div className="col-span-3">
            <InventoryList
              items={Menus[currentMenu as keyof {}]}
              onSelectItem={handleSelectItem}
            ></InventoryList>
          </div>
          <div className="col-span-4">
            <ItemDescription item={currentItem as Item}></ItemDescription>
          </div>
        </div>
        <div className=" absolute left-1/16 right-1/16 bottom-1 grid grid-cols-4 grid-rows-1 gap-2 justify-items-center">
          {Object.keys(Menus).map((menu) => (
            <span
              key={menu}
              className="size-min border-2 border-transparent bg-[#926A25]"
              onClick={() => {
                setCurrentMenu(menu);
              }}
            >
              <p className=" mix-blend-overlay opacity-75 hover:border-white  hover:bg-white/50">
                {menu}
              </p>
            </span>
          ))}
        </div>
      </body>
    </>
  );
}

export default App;

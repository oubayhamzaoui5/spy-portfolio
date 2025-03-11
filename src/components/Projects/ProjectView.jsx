import styles from "./Typerush.module.css";

const defaultSettings = {
    title: ">Project Title",
    imgSrc: "srcassets/default.png",
    imgAlt: "Project Image",
    buttons: [],
    technologies: [">Technology 1", ">Technology 2", ">Technology 3"],
    intelReport: {
        status: "Classified",
        description: ">This project is currently under development. More details will be available soon. Stay tuned for updates!"
    }
};

export default function ProjectView({ settings = defaultSettings }) {
    return (
      <>
      <div className={styles.container}>
       
        <h1>{settings.title}</h1>
        {settings.buttons.length > 0 && (
         <div className={styles.buttons}> 
         {settings.buttons.map((button, index) => (
           <a key={index} href={button.link} target="_blank" rel="noopener noreferrer">
             <button>{button.text}</button>
           </a>
         ))}
       </div>
        )}
         <div className={styles.imgcontainer}>
          <img src={import.meta.env.BASE_URL + settings.imgSrc} alt={settings.imgAlt} className={styles.spyImage} />
        </div>
        <div className={styles.content}>
          <h2>&gt;Technologies</h2>
          <div className={styles.technologies}>
            {settings.technologies.map((tech, index) => (
              <h3 key={index}>{tech}</h3>
            ))}
          </div>
          <div className={styles.intelReport}>
            <h2>&gt;Intel Report</h2>
            <p className={styles.highlight}>&gt;Status: {settings.intelReport.status}</p>
            <p className={styles.desc}>{settings.intelReport.description}</p>
          </div>
        </div>
      </div>
      </>
    );
}

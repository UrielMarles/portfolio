import { useEffect, useState } from 'react';
import Image from 'next/image'
import AnimarFondo from '../components/animacionPlanetas';
import Switch from '@mui/material/Switch';
import { useInView } from 'react-intersection-observer';
import MyCarousel from '../components/carrousel';


const TextosEspaniol = [
  "Desarrollador Back-end",
  "Construyendo y aprendiendo cada día.",
  "Acerca de mí:",
  "¡Hola! Soy Uriel Marles, un desarrollador de software con grandes ambiciones. Cuanto mayor sea el desafío, más emocionado estoy por superarlo. Valoro un código organizado, comprensible, pensado para trabajar en equipo, asegurándome de que cada pieza de codigo pueda servir como base para proyectos aún más grandes.",
  "Tengo un amplio interés en diversas herramientas de programación y una sólida comprensión de los principios y reglas necesarias. Cuando me enfrento a un nuevo entorno de trabajo, me esfuerzo por aprender tanto como sea posible antes de dar el primer paso. Mis soluciones buscan ser lo más óptimas posible.",
  "En la actualidad, tengo un conocimiento profundo en tecnologías como PYTHON y SQL con frameworks como FLASK. Pero también me interesa .NET, C#, REACT y NEXT.",
  "Estaría encantado de participar en nuevos proyectos. ¡No dudes en contactarme!",
  "Experiencia de trabajo:",
  "Desarrollador de Software Junior - Municipalidad de Avellaneda - Medio tiempo",
  "Trabajé en el desarrollo y mantenimiento de APIs para paginas web, asi como tambien en la implementacion de un framework de trabajo con todas las herramientas comunes de los proyectos.",
  "Enero 2023 - Presente",
  "Tecnico - B&L soluciones Informáticas - Tiempo Completo ",
  "Trabaje en el desarrollo de una aplicacion de escritorio .NET, utilizada internamente para el manejo de las ventas y el inventario. Tambien ayude con el arreglo de sistemas operativos y software en computadoras de clientes",
  "Febrero 2021 - Agosto 2022",
  "Estudios:",
  "UTN FRA - Tecnicatura universtaria en sistemas informaticos",
  "El objetivo de la carrera es brindar las habilidades y herramientas para lucirse en el mundo de la informatica, enseñando la metodología para analizar y resolver cualquier problema que se presente.",
  "Enero 2023 - Diciembre 2025",
  "KAPLAN - Escuela de intercambio de ingles",
  "Durante mi estadía en la escuela de Kaplan en Cambridge, pude poner a prueba mis capacidades para una comunicación correcta y fluída. Actualmente estoy capacitado para mantener conversaciones formales y con vocabulario técnico en ambos idiomas, a un nivel nativo.",
  "February 2022 - March 2022",
  "ILSE - BACHILLER",
  "Una escuela secundaria con un enfoque en los aspectos artisticos y creativos de la educacion. Una inmersion cultural, historica y literaria de primer nivel.",
  "Enero 2017 - Diciembre 2021"
];

const TextosIngles = [
  "Back-end Developer",
  "Building and learning every day.",
  "About Me:",
  "Hello! I'm Uriel Marles, a hard-working Software Developer. The greater the challenge, the more excited I am to overcome it. I value organized, team-friendly, and understandable code, ensuring each piece can serve as a foundation for even larger projects.",
  "I have a broad interest in various programming tools and a strong understanding of the principles and rules involved. When introduced to a new work environment, I strive to learn as much as possible before taking the first step. My solutions aim to be as optimal as they can be.",
  "Currently i have the deepest knowledge in technologies such as PYTHON and SQL with frameworks like FLASK. But i am also interested in .NET, C#, REACT, and NEXT",
  "I would be thrilled to participate in new projects. Don't hesitate to contact me!",
  "Work experience:",
  "Junior Software Developer - Municipalidad de Avellaneda - Part-time",
  "Worked in the development and maintenance of APIs for web apps, as well as the implementation of a common framework for all future projects.",
  "January 2023 - Present",
  "Technician - B&L soluciones Informáticas- Full-time",
  "Workend on a .NET WinForms app to keep track of sales and inventory. Fixed hardware and software issues in our client's computers.",
  "February 2021 - August 2022",
  "Studies:",
  "UTN FRA - University - Systems Technician",
  "The goal of the career is to grant the abilities and tools required to thrive in the programming world, enabling you to analize and find solutions to the problems presented.",
  "January 2023 - December 2025",
  "KAPLAN INTERNATIONAL - English / English Literature",
  "I spent my time at Kaplan's Cambridge school testing and perfecting my communication skills. Obtaining the fluidity of every-day chatting, i am now perfectly qualified in maintaining conversations with or without technical terms.",
  "February 2022 - March 2022",
  "ILSE - High school - Bachelor's degree",
  "A high school with a focus on the creative and artistic sides of education, as well as personal growth and literature.",
  "January 2017 - December 2021",
];




export default function hola(){



  const [textos , setTextos] = useState(TextosEspaniol)
  const[idioma, setIdioma] = useState("spanish")

  const [fluido,setFluido] = useState("Desarrollador Back-end")
  const [fluido2,setFluido2] = useState("Construyendo y aprendiendo cada día.")

  const [ref, inView] = useInView({triggerOnce: true});
  const [ref2, inView2] = useInView({triggerOnce: true});
  const [ref3, inView3] = useInView({triggerOnce: true});

  function transicion (palabraInicial, palabraFinal,func,delay){
    const longitud = palabraFinal.length;
    for (let i = longitud; i >= 0; i--) {
      setTimeout(() => {
        func(palabraInicial.slice(0, i));
      }, (longitud - i) * delay);
    }
    for (let i = 1; i <= longitud; i++) {
      setTimeout(() => {
        func(palabraFinal.slice(0, i));
      }, (longitud + i) * delay);
    }
  };

  function cambiarIdioma()
  {
    setIdioma(idioma === "english"? "spanish":"english");
    setTextos(idioma === "english"? TextosEspaniol:TextosIngles)
    const palabraInicial = fluido;
    const palabraFinal = idioma === 'english' ? TextosEspaniol[0] : TextosIngles[0];
    const ini2 = fluido2
    const fini2 = idioma === 'english' ? TextosEspaniol[1] : TextosIngles[1];
    transicion(palabraInicial,palabraFinal,setFluido,70)
    transicion(ini2,fini2,setFluido2,40)
  }

  useEffect(AnimarFondo,[]);

return (<>
<canvas id="bg"></canvas>   

<main>
  <header>
    <h1>URIEL</h1>
    <h1>MARLES</h1>
    <p>🚀 {fluido} 🚀</p>
    <div className="container">
            <Image
              src="/images/componentImages/spain.png"
              alt="Imagen Izquierda"
              width={20}
              height={20}
            />
              <Switch size="large" onChange={cambiarIdioma} />
            <Image
              src="/images/componentImages/united-kingdom.png"
              alt="Imagen Derecha"
              width={20}
              height={20}
            />
          </div>
  </header>

  <blockquote>
    <p>-{fluido2} </p>
  </blockquote>


  <section ref={ref} className={`section ${inView ? 'visible' : ''}`}>
    <h1>{textos[2]}</h1>
    {[3, 4, 5, 6].map((index) => (
    <p key={index}>{textos[index]}</p>
  ))}
  </section>

  <section ref={ref2} className={`section left ${inView2 ? 'visible' : ''}`}>
  <h1>{textos[7]}</h1>

  <work onClick={() => {window.open('https://www.instagram.com/munideavellaneda/', '_blank');}}>
    <div className="image-container"><Image src="/images/experienceProjects/municipalidad_de_avellaneda_logo.jpeg" alt="LOGO AVE " width={125} height={125} /></div>
    <h3>{textos[8]}</h3>
    <p>{textos[9]}<br/><b>{textos[10]}</b></p>
  </work>
  <work onClick={() => {window.open('https://www.instagram.com/bylservicios/', '_blank');}}>
  <div className="image-container">
      <Image src="/images/experienceProjects/BYL_RECORTADO.png" alt="LOGO BYL" width={125} height={125} />
    </div>
    <h3>{textos[11]}</h3>
    <p>{textos[12]}<br/><b>{textos[13]}</b></p>
  
  </work>
</section>
<section ref={ref3} className={`section ${inView3 ? 'visible' : ''}`}>
  <h1>{textos[14]}</h1>
  <work onClick={() => {window.open('https://fra.utn.edu.ar/', '_blank');}}>
    <h3>{textos[15]}</h3>
    <p>{textos[16]}<br/><b>{textos[17]}</b></p>
    <div className="image-container"><Image src="/images/experienceProjects/UTN.jpeg" alt="LOGO AVE " width={125} height={125} /></div>
  </work>
  <work onClick={() => {window.open('https://www.kaplaninternational.com/', '_blank');}}>
    <h3>{textos[18]}</h3>
    <p>{textos[19]}<br/><b>{textos[20]}</b></p>
    <div className="image-container"><Image src="/images/experienceProjects/KAPLAN_ORIGINAL.jpeg" alt="LOGO AVE " width={125} height={125} /></div>
  </work>
  <work onClick={() => {window.open('https://ilse.esc.edu.ar/home', '_blank');}}>
    <h3>{textos[21]}</h3>
    <p>{textos[22]}<br/><b>{textos[23]}</b></p>
    <div className="image-container"><Image src="/images/experienceProjects/ILSE_RECORTADO.png" alt="LOGO AVE " width={125} height={125} /></div>
  </work>
</section>

<blockquote>
    <p>Featured Projects:</p>
  </blockquote>

<div className='component3'>
<MyCarousel/>
</div>

<section className="left">
  <h2>🌮 Work History</h2>

  <h3>McDonalds</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h3>Burger King</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h3>Taco Bell</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

</section>

<section className="left">
  <h2>🌮 Work History</h2>
  <h3>McDonalds</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h3>Burger King</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h3>Taco Bell</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</section>
</main>
</>)
}
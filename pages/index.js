import * as THREE from 'three';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import AnimarFondo from '../components/animacionPlanetas';
import Switch from '@mui/material/Switch';
import { makeStyles } from '@mui/styles';


const TextosEspaniol = [
  "Desarrollador Back-end",
  "Construyendo y aprendiendo cada día.",
  "Acerca de mí:",
  "¡Hola! Soy Uriel Marles, un desarrollador de software con grandes ambiciones. Cuanto mayor sea el desafío, más emocionado estoy por superarlo. Valoro un código organizado, amigable con el equipo y comprensible, asegurándome de que cada pieza pueda servir como base para proyectos aún más grandes.",
  "Tengo un amplio interés en diversas herramientas de programación y una sólida comprensión de los principios y reglas en el mundo de la programación. Cuando me enfrento a un nuevo entorno de trabajo, me esfuerzo por aprender tanto como sea posible antes de dar el primer paso. Mis soluciones buscan ser lo más óptimas posible.",
  "En la actualidad, tengo un conocimiento profundo en tecnologías como PYTHON y SQL con frameworks como FLASK. Pero también me interesa .NET, C#, REACT y NEXT.",
  "Estaría encantado de participar en nuevos proyectos. ¡No dudes en contactarme!"
];

const TextosIngles = [
  "Back-end Developer",
  "Building and learning every day.",
  "About Me:",
  "Hello! I'm Uriel Marles, a hard-working Software Developer. The greater the challenge, the more excited I am to overcome it. I value organized, team-friendly, and understandable code, ensuring each piece can serve as a foundation for even larger projects.",
  "I have a broad interest in various programming tools and a strong understanding of the principles and rules in the programming world. When introduced to a new work environment, I strive to learn as much as possible before taking the first step. My solutions aim to be as optimal as they can be.",
  "Currently i have the deepest knowledge in technologies such as PYTHON and SQL with frameworks like FLASK. But i am also interested in .NET, C#, REACT, and NEXT",
  "I would be thrilled to participate in new projects. Don't hesitate to contact me!"
];

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Alinea los elementos horizontalmente
  },
  switchContainer: {
    marginLeft: '10px', // Ajusta el marginLeft para agregar espacio entre las imágenes y el Switch
  },
});

export default function hola(){
  const classes = useStyles();
  const [textos , setTextos] = useState(TextosEspaniol)
  const[idioma, setIdioma] = useState("english")


  function cambiarIdioma(){
    setIdioma(idioma === "english"? "spanish":"english");
    setTextos(idioma === "english"? TextosIngles:TextosEspaniol)
  }

  useEffect(AnimarFondo,[]);

return (<>
<canvas id="bg"></canvas>   

<main>
  <header>
    <h1>URIEL MARLES</h1>
    <p>🚀 {textos[0]} 🚀</p>
    <div className={classes.container}>
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
    <p>{textos[1]}</p>
  </blockquote>


  <section>
    <h1>{textos[2]}</h1>
    {[3, 4, 5, 6].map((index) => (
    <p key={index}>{textos[index]}</p>
  ))}
  </section>

  <section className="light">
    <h2>👩🏽‍🚀 Experience / Work history</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <h2>🏆 Studies</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

  </section>

  <blockquote>
    <p>The best way out is always through <br/> -Robert Frost</p>
  </blockquote>

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

  <blockquote>
    <p>Thanks for watching!</p>
  </blockquote>

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
// será necesario hacer una página de js para el modal???.

export default () => {
  const viewRegister = `
    <section id="registerMobile">
      <header>
        <h2 id="createAccount"> Crear cuenta </h2>
        <img id="logoBig" src="./images/colorwheel.png">
      </header>
      <section class="registerForm">
        <input type="email" placeholder="Nombre" id="nombre">
        <input type="email" placeholder="Correo" id="correo2"> 
        <input type="password" placeholder="Contraseña" id="contraseña2"> 
        <button>Registrar</button>
        <button>Registrar con Google</button>
        <p>¿Tienes una cuenta?</p>
        <a href="#/registro">Iniciar sesión</a>
        <button>Olvidé mi contraseña</button>
      </section>
    <section>

    
      `;
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'register');
  divElement.innerHTML = viewRegister;
  return divElement;
};

 /* <section id="registerDesktop">
      <header>
        <h2> Crear una cuenta </h2>
        <img class="" src="" alt="">
      </header>
      <section>
        <input type="email" placeholder="Nombre" id="nombre">
        <input type="email" placeholder="Correo" id="correo2">
        <input type="password" placeholder="Contraseña" id="contraseña2">
        <button>Ingresar</button>
        <button>Registrar con Google</button>
        <p>¿No tienes una cuenta?</p>
        <a href="#/registro">Regístrate</a>
        <button>Olvidé mi contraseña</button>
      </section>
    </section> */ 

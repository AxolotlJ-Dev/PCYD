import './App.css';
import Menu from './components/Menu';
import Publication from './components/Publication';
import Contac from './components/Contac';


function App() {
  return (

    <div className="App" id='Home'>
      <Menu />
      <img className='img-fluid mb-5'  src={require('./img/Port.jpg')} alt="Portada" />
      
      <div className=' container align-content-center'>

        <div className=' row ' id='Product'>

        { /* lado izquierdo */}
         <div className=' col-xl-6 text-center align-content-center align-self-center'>
         <Publication 
          texto='vaso fiestero'
          imagen={require('./img/vasoF.jpg')}
          aosE='zoom-out-down' /> 
        </div>


        { /* lado derecho */}
        <div className=' col-xl-6 text-center align-content-center align-self-center'>
        <Publication 
        texto='vaso bacherol'
        imagen={require('./img/vasoB.jpg')}
        aosE='zoom-out-down' /> 
        </div>

        { /* lado izquierdo */}

        <div className=' col-xl-6 text-center align-content-center align-self-center'>
          <Publication 
          texto='Termos'
          imagen={ require('./img/termoS.jpg')}
          aosE='fade-right' />
        </div>

        { /* lado derecho */}

        <div className='col-xl-6 text-center align-content-center align-self-center'>
          <Publication
          texto='Llavero'
          imagen={ require('./img/llaveroA.jpg')}
          aosE='fade-left' />
        </div>


        { /* lado izquierdo */}

        <div className=' col-xl-6 text-center align-content-center align-self-center'>
          <Publication 
          texto='Anuncios neon'
          imagen={ require('./img/neonA.jpg')}
          aosE='fade-right' />
        </div>


        { /* lado derecho */}
        <div className='col-xl-6 text-center align-content-center align-self-center'>
          <Publication
          texto='Tarjetas de Presentacion'
          imagen={ require('./img/tarjetasP.jpg')}
          aosE='fade-left' />
        </div>

        </div>

     
        <Contac /> 
      </div>
       

    </div>
  );
}

export default App;

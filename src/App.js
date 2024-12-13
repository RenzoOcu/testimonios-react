import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className="App">

      <div className='contenedor_principal'>
        <h1>nuestro profecionales shshshfewgedd </h1>


        <Testimonio
          nombre="juan soto vera"
          pais="suecia"
          imagen="1"
          cargo="ingeniero"
          empresa="spotify"
          testimonio="Trabajar con TechSolutions ha sido un cambio total para nuestra empresa. Su equipo implementó un sistema ERP personalizado que optimizó todos nuestros procesos internos. Hemos reducido nuestros costos en un 25% y aumentado nuestra productividad en un 40%. Definitivamente, son nuestros aliados tecnológicos." />

        <Testimonio
          nombre="alexander quispe"
          pais="suecia"
          imagen=""
          cargo="ingeniero"
          empresa="spotify"
          testimonio="Desde que comenzamos a adquirir insumos de AgroPerú, nuestra calidad ha mejorado significativamente. La frescura y el compromiso con la sostenibilidad que tienen nos han ayudado a posicionarnos como una cafetería consciente y de alta calidad. Nuestros clientes siempre notan la diferencia" />
        <Testimonio
          nombre="juana de larco "
          pais="suecia"
          imagen="2"
          cargo="ingeniero"
          empresa="spotify"
          testimonio="TransportXpress no solo entregó nuestras mercancías a tiempo, sino que también nos ayudó a rediseñar nuestra cadena de suministro para mejorar la eficiencia. Ahora, llegamos a más clientes en menos tiempo. Su atención al detalle y su comunicación constante son insuperables" />
      </div>

    </div>
  );
}

export default App;

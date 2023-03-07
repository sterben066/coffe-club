import './App.css';
import Cabecera from './componentes/cabecera.jsx';
import Izquierda from './componentes/parrafo-1.jsx';
import Derecha from './componentes/parrafo-2.jsx';
import PieDePagina from './componentes/pie-de-pagina.jsx';



function App() {
  return (
    <div className='App'>
      <header id='App-header'>
        <Cabecera
          imagen='LogoP3'
          tipo='LogoP'> 
        </Cabecera>
        
      </header>
      <section id='App-section'>
        <Izquierda
          imagen='Mocca'
          tipo='Mocca'
          titulo='Café Mocca'
          nombre='Café mocca: '
          testimonio='es una variante del café con leche. Como este, suele llevar un
            tercio de expreso y dos tercios de leche vaporizada, pero se añade una parte
            de chocolate, normalmente en forma de jarabe de chocolate, aunque algunas
            máquinas usan chocolate en polvo instantáneo. Los mocas contienen chocolate
            negro o con leche.' />

        <Derecha
        imagen='Irish'
        tipo='Irish'
        titulo='Café Irish'
        nombre='Café Irish o Irlandés: '
        testimonio='es un cóctel que consiste en la mezcla de whisky irlandés,
        una cucharada de azúcar, café y finalmente va cubierto por dos centímetros de
        crema de leche o nata semimontada. Una vez servido, su aspecto es similar al
        de una pinta de cerveza Guinness bien servida; negro y con una coronilla blanca
        de un dedo. Se recomienda que sea un café suave, tipo americano, y que la
        proporción de whisky no sea demasiado alta, de modo que resulte agradable al
        paladar.' />

        <Izquierda
        imagen='Latte'
        tipo='Latte'
        titulo='Café Latte'
        nombre='Café latte: '
        testimonio='es una bebida de café de origen italiano elaborado con expreso y leche
        vaporizada.' />

        <Derecha
        imagen='Expresso'
        tipo='Esspreso'
        titulo='Café Espresso'
        nombre='Café Espresso:'
        testimonio=' es una forma de preparación de café originada en Italia. Debe su término a la
        obtención de esta bebida a través de una cafetera expreso.' />

        <Izquierda
        imagen='Americano'
        tipo='Americano'
        titulo='Café Americano'
        nombre='Café Americano:'
        testimonio='es la mezcla de agua caliente y café procesado en una cafetera con filtro de
        papel. el americano es servido muy largo, es decir, diluido con mucha agua.34 Hay varias formas de
        preparar un café americano, pero la más extendida es el método del goteo, para lo cual se usa una
        cafetera que lleva un filtro de papel con café molido.' />

        <Derecha
        imagen='Capuchino'
        tipo='Capuchino'
        titulo='Café Capuchino'
        nombre='Café Capuchino:'
        testimonio=' es una bebida nacida en Italia, preparada con café expreso y leche montada
        con vapor para darle cremosidad. Un capuchino se compone de 125 ml de leche y 25 ml de café expreso,
        en ocasiones se agrega cacao en polvo o canela según el gusto del consumidor.' />

        <Izquierda
        imagen='Bombon'
        tipo='Bombon'
        titulo='Café Bombón'
        nombre='Café Bombón:'
        testimonio=' es una mezcla de café endulzado con leche condensada. Se suele servir en un vaso
        de cristal transparente con el objeto de mostrar las capas de café y leche. La diferente densidad de
        los líquidos hace que el café quede en la parte superior, mientras que la leche condensada va a la
        parte inferior.' />

        <Derecha
        imagen='Carajillo'
        tipo='Carajillo'
        titulo='Café Carajillo'
        nombre='Café Carajillo:'
        testimonio=' es una bebida que combina café y alguna bebida alcohólica, como coñac, ron,
        anís, orujo o whisky. Generalmente se sirve en un vaso pequeño tipo rocas o chupito y se toma
        caliente o frío con hielos.' />

        <Izquierda
        imagen='Lungo'
        tipo='Lungo'
        titulo='Café Lungo'
        nombre='Café Lungo:'
        testimonio=' es una bebida de café que se prepara con una máquina de espresso para hacer un
        café al estilo italiano: negro corto con más agua, lo que da como resultado un café más grande. un
        lungo.' />

        <Derecha
        imagen='Machiatto'
        tipo='Machiatto'
        titulo='Café Machiatto'
        nombre='Café Machiatto:'
        testimonio=' es un café cortado típico de Italia, consiste en un expreso con una pequeña
        cantidad de leche caliente y espumada.' />

        <Izquierda
        imagen='Cafe con leche'
        tipo='Cafe con leche'
        titulo='Café con Leche'
        nombre='Café con Leche:'
        testimonio=' consta básicamente de dos ingredientes: café y leche, con una proporción que
        varía de acuerdo a las costumbres locales, pero ronda la mezcla por partes iguales.' />

        <Derecha
        imagen='Vienes'
        tipo='Vienes'
        titulo='Café Vienés'
        nombre='Café Vienés:'
        testimonio=' es una bebida que consta de café y nata montada.' />

        <Izquierda
        imagen='Frape'
        tipo='Frape'
        titulo='Café Frapé'
        nombre='Café Frapé:'
        testimonio=' es un café con hielo cubierto de espuma elaborado a partir de café instantáneo.' />

        <Derecha
        imagen='Azteca'
        tipo='Azteca'
        titulo='Café Azteca'
        nombre='Café Azteca:'
        testimonio=' lleva delicioso helado de chocolate y varias especias, convirtiéndolo casi en un
        postre, refrescante y aromático, perfecto para terminar cualquier comida.' />

      </section>
      <footer className='App-footer'>
        <PieDePagina/>
      </footer>
    </div>
  );
}

export default App;

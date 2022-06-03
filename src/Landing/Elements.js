import styled from 'styled-components'

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&display=swap');
  
  
    & h1 {
        font-family: 'Hind Siliguri', sans-serif;
    }
  
    & h2 {
        font-family: 'Hind Siliguri', sans-serif;
    }
    & h3 {
        font-family: 'Hind Siliguri', sans-serif;

    }
    body {
        font-family: 'Hind Siliguri', sans-serif;
    }
`



export const BoxPrincipal = styled.div`
width: 100%;
height: 1000px;
background: white;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1654171604/ELEMENTAL%20CONSTRUCTORA/LandingPromo/FONDO_WEB_dydqou.png);
background-size: cover;
`

export const BoxSecundario = styled.div`
width: 100%;
height: 1000px;
display: flex;
flex-direction: row;
justify-content: center;
margin: auto;
position: relative;
`

export const BoxDerecha = styled.div`
width: 25%;
height: 1000px; 
background:#F5F2F2;
position: absolute;
top: 0;
bottom: 0;
left: 80px;
right: 0;
`
export const BoxIzquierda = styled.div`
width: 100%;
height: 1000px;  
`

export const BoxAbajo = styled.div`
width: 100%;
height: 300px;  
background-color: #1A1A1A;
display: flex;
flex-direction: row;
justify-content: center;
`
export const BoxArriba = styled.div`
width: 100%;
height: 700px;  
display: flex;
flex-direction: row;
justify-content: center;
`
export const Box1 = styled.div`
width: 30%;
height: 700px;

`
export const Box2 = styled.div`
width: 70%;
height: 700px;
display: flex;
flex-direction: row;
justify-content: center;
`
export const Parte1 = styled.div`
width: 70%;
height: 700px;
`
export const Parte2 = styled.div`
height:75vh;
width: 15vw;
position:relative;
margin: auto;
display: flex;
flex-direction:column;
justify-content: center;

 &:after{
    position: absolute;
    top: 0%;
    left: 0px;
    content: '';
    height: 205px;
    width: 0;
    border-left: 15vw solid #1A1A1A;
    border-bottom: 5vw solid transparent;
    border-top: 0px solid transparent;
    overflow: hidden;
  }
`
export const BoxTitulo = styled.div`
width: 100%;
height: 70px;
`
export const BoxCarrousel = styled.div`
width: 100%;
height: 400px;
display: flex;
flex-direction: row;
justify-content: center;
`
export const BoxParrafos = styled.div`
width: 80%;
height: 200px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const BoxCasita = styled.div`
width: 90%;
height: 26vh;
margin: auto;
z-index: 9999;
position: absolute;
top: 0;
bottom: 440px;
left: 0;
right: 0;


display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;

`

export const BoxFamilias = styled.div`
width: 90%;
height: 27vh;
margin: auto;
border: 1px solid #000000;
position: absolute;
top: 0px;
bottom: 20px;
left: 10px;
right: 0;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Titulo = styled.p`
font-weight: 400;
font-size: 27px;
line-height: 33px;
font-family: 'Hind Siliguri', sans-serif;
text-align: center;
`
export const Parrafo1 = styled.div`
width: 25%;
height: 200px;

`
export const Parrafo2 = styled.div`
width: 25%;
height: 200px;
`
export const Parrafo3 = styled.div`
width: 25%;
height: 200px;
`
export const SubBoxCarusel = styled.div`
width: 80%;
height: 400px;
`
export const TituloParrafos = styled.h3`
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;
`
export const TextoParrafo = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 11px;
font-weight: 600;

`
export const Boxmapa = styled.div`
width: 50%;
height:300px;
display: flex;
flex-direction: column;
justify-content: center;
`
export const BoxBeneficios = styled.div`
width: 25%;
height:300px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const Boxvacio = styled.div`
width: 35%;
height:300px;
`
export const Beneficio = styled.div`
width: 175px;
height: 125px;
text-align: center;
align-self: end;
`

export const Icono = styled.img`

`
export const Subtitulo = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;
color: white;
line-height: 15px;
font-weight: 500;
`
export const FotoPlano = styled.img`
width: 750px;
height: 250px;
`

export const TituloCasita = styled.h3`
color: white;
font-family: 'Hind Siliguri', sans-serif;
font-size: 15px;
font-weight: 200;
`
export const Texto1 = styled.h3`
font-family: 'Hind Siliguri', sans-serif;
font-size: 15px;
line-height: 0;
`
export const Texto2 = styled.p`
font-size: 12px;
color: black;
font-weight: 600;
font-family: 'Hind Siliguri', sans-serif;
line-height: 12px;
`

export const BoxJoven = styled.div`
width: 90%;
height: 20vh;
position: absolute;
top: 450px;
bottom: 0;
left: 20px;
right: 0;
`

export const Joven = styled.h3`
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;
text-align: center;
`

export const BoxForm = styled.form`
width: 100%;
height: 850px;
background:blue;
`

export const BoxLogo = styled.div`
width: 100%;
height: 150px;
background: #1B1B1B;  
align-items: center;  
display: flex;
flex-direction: row;
justify-content: center;
`

export const TituloForm = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 20px;
margin: 0;
`
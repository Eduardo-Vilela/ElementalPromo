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

@media (max-width: 480px) { 
    display:none;
  }
  @media (max-width: 767px) { 
    display:none;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
  display: none;
   }
   @media (min-width: 1200px) and (max-width: 2000px) { 
     display:block;
   }

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
height: 70vh;
width: 20%;
margin: auto;
display: flex;
flex-direction:column;
justify-content: center;


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

@media (max-width: 480px) { 
    position:0;
  }
  @media (max-width: 767px) { 
    position:0;
  }
@media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height:  auto;
    padding-top: 50px;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
   
  }
`

export const BoxFamilias = styled.div`
width: 90%;
height: 27vh;
margin: auto;
border: 1px solid #000000;
position: absolute;
top: 0px;
bottom: 25px;
left: 10px;
right: 0;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
@media (min-width: 768px) and (max-width: 1199px) { 
    bottom: 60px;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    
  }

`
export const Titulo = styled.p`
font-weight: 400;
font-size: 27px;
line-height: 33px;
font-family: 'Hind Siliguri', sans-serif;
text-align: center;
@media (max-width: 480px) { 
    font-size: 20px;
  }
  @media (max-width: 767px) { 
    font-size: 20px;
  }

`
export const Parrafo1 = styled.div`
width: 25%;
height: 200px;
@media (max-width: 480px) { 
    width: 80%;
    margin:auto;
  }
  @media (max-width: 767px) { 
    width: 80%;
    margin:auto;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 50%;
    margin:auto;
  }
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

@media (max-width: 480px) { 
    width: 100%;
  }
  @media (max-width: 767px) { 
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    
  }
`
export const TituloParrafos = styled.h3`
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;

@media (max-width: 480px) { 
    text-align: center;
  }
  @media (max-width: 767px) { 
    text-align: center;
  }
`
export const TextoParrafo = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 11px;
font-weight: 600;
@media (max-width: 480px) { 
   font-size: 11px;
   text-align: center;
  }
  @media (max-width: 767px) { 
    font-size: 11px;
    text-align: center;
  }

`
export const Texto4 = styled.h3`
font-family: 'Hind Siliguri', sans-serif;
font-size: 10px;
font-weight: 600;
line-height: 0;
@media (max-width: 480px) { 
    font-size: 9px;
  }
  @media (max-width: 767px) { 
    font-size: 9px;
  }

`
export const Boxmapa = styled.div`
width: 50%;
height:300px;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
    width: 100%;
    height: 100px;
   }
   @media (max-width: 767px) { 
     width: 100%;
     height: 100px;
   }
   @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
     height: 100px;
}
   @media (min-width: 1200px) and (max-width: 2000px) { 
  
  }
`
export const BoxBeneficios = styled.div`
width: 25%;
height: 300px;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (max-width: 480px) { 
    width: 100%;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
   @media (max-width: 767px) { 
    width: 100%;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: 430px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
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
@media (max-width: 480px) { 
    width: 100%;
    height: 80%;

  }
  @media (max-width: 767px) { 
    width: 100%;
    height: 80%;
  }
@media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: auto;
    margin-bottom: 50px;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    
  }
`

export const Icono = styled.img`
width: 40px;
height: 40px;

`
export const Subtitulo = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;
color: white;
line-height: 15px;
font-weight: 500;

@media (max-width: 480px) { 
    font-size: 13px;
   }
   @media (max-width: 767px) { 
    font-size: 13px;
   }
`
export const FotoPlano = styled.img`
width: 750px;
height: 250px;
@media (max-width: 480px) { 
    width: 100%;
    height: auto;
   }
   @media (max-width: 767px) { 
     width: 100%;
     height: auto;
   }

@media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: auto;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    width: 100%;
    height: auto;
  }
`

export const TituloCasita = styled.h3`
color: white;
font-family: 'Hind Siliguri', sans-serif;
font-size: 15px;
font-weight: 200;
@media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 13px;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    
  }
`
export const Texto1 = styled.h3`
font-family: 'Hind Siliguri', sans-serif;
font-size: 15px;
line-height: 0;

@media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 22px;
}
`
export const Texto3 = styled.h3`
font-size: 15px;
padding-left: 10px;
color: black;
font-weight: 600;
font-family: 'Hind Siliguri', sans-serif;
@media (max-width: 480px) { 
    font-size: 12px;
  }
  @media (max-width: 767px) { 
    font-size: 12px;
  }

`
export const Texto2 = styled.p`
font-size: 12px;
color: black;
font-weight: 600;
font-family: 'Hind Siliguri', sans-serif;
line-height: 12px;

@media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 14px;
}
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
margin-top: 150px;
display: flex;
flex-direction: column;
justify-content: space-around;

@media (max-width: 480px) { 
    width: 80%;
    height: 800px;
    margin: auto;
    background: #F5F2F2;
   }
   @media (max-width: 767px) { 
     width: 80%;
     height: 800px;
     margin: auto;
     background: #F5F2F2;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    width: 80%;
    height: 800px;
    margin: auto;
    background: #F5F2F2;
}
`

export const BoxLogo = styled.div`
width: 110%;
height: 150px;
background: #1B1B1B;  
align-items: center;  
display: flex;
flex-direction: row;
justify-content: center;
position: absolute;
top:0;
bottom: 0;
left: -18px;
right: 0;

@media (max-width: 480px) { 
    width: auto;
    height: 150px;
  }
  @media (max-width: 767px) { 
    width: auto;
    height: 150px;
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    width: auto;
    height: 150px;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    
  }
`

export const TituloForm = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 25px;
margin: 0;
text-align: center;
font-weight: 500;
@media (max-width: 480px) { 
    font-size: 18px;
  }
  @media (max-width: 767px) { 
    font-size: 18px;
  }
`
export const Tituloform3 = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 35px;
margin: 0;
text-align: center;
font-weight: 600;

@media (max-width: 480px) { 
    font-size: 20px;
  }
  @media (max-width: 767px) { 
    font-size: 20px;
  }
`
export const TituloForm2 = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 20px;
margin: 0;
text-align: center;
font-weight: 600;
@media (max-width: 480px) { 
    font-size: 15px;
  }
  @media (max-width: 767px) { 
    font-size: 15px;
  }
`
export const SeparadorForm = styled.div`
width: 90%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px 0px 0px 0px;
margin: auto;

@media (max-width: 480px) { 
    height: 160px;
  }
  @media (max-width: 767px) { 
    height: 160px;
  }
`
export const SeparadorForm2 = styled.div`
width: 90%;
height: 200px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
    height: 160px;
  }
  @media (max-width: 767px) { 
    height: 160px;
  }
`
export const InputForm = styled.input`
width: 90%;
height: 35px;
margin: auto;
`
export const InputFormCheck = styled.input`
width: 50%;
height: 30px;
margin: auto;

`
export const LabelInput = styled.label`
width: 90%;
height: 30px;
margin: auto;
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;
font-weight: 200;
@media (max-width: 480px) { 
    font-size: 14px;
  }
  @media (max-width: 767px) { 
    font-size: 14px;
  }
`

export const AjusteCheckBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 90%;
margin: auto;
padding-left: 50px;
@media (max-width: 480px) { 
    padding:0;
  }
  @media (max-width: 767px) { 
    padding:0;
  }
`

export const ButtonForm = styled.input`
width: 150px;
height: 35px;
border-radius: 10px;
margin: auto;
background: #1A1A1A;
font-size: 20px;
color: white;
font-family: 'Hind Siliguri', sans-serif;
`

export const LabelInputCheck = styled.p`
font-family: 'Hind Siliguri', sans-serif;
font-size: 17px;
width: 50%;
@media (max-width: 480px) { 
    width:100%;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 767px) { 
      width:100%;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const SubBoxLogo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`


/*aparte mobileeeeeeeeee*/


export const BoxMobile = styled.div`
width: 100%;
margin: auto;


@media (max-width: 480px) { 
  display:block;
}
@media (max-width: 767px) { 
  display:block;
}
@media (min-width: 768px) and (max-width: 1199px) { 
display: block;
 }
 @media (min-width: 1200px) and (max-width: 2000px) { 
  display: none;
   }
   @media (min-width: 2000px) and (max-width: 3000px) { 
    display: none;
     }
`


export const BoxPrincipal2 = styled.div`
width: 100%;
height: 2700px;
margin: auto;
background: white;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1654268939/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/FONDO_MOBILE_2_g9mmhc.png);
background-size: contain;
`

export const  Seccion1 = styled.div`
width: 100%;
height: 250px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
`
export const  Seccion2 = styled.div`
width: 100%;
height: 500px;
display: flex;
flex-direction: row;
justify-content: center;

`
export const  Seccion3 = styled.div`
width: 100%;
height:430px;
background: #1A1A1A;
@media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: 500px;
     }
`
export const  Seccion4 = styled.div`
width: 100%;
height: 800px;
margin-bottom: 20px;
`
export const  Seccion5 = styled.div`
width: 80%;
height: 470px;
margin: auto;
border: 1px solid black;
@media (max-width: 480px) { 
    
  }
  @media (max-width: 767px) { 
    
  }
  @media (min-width: 768px) and (max-width: 1199px) { 
    width: 40%;
   }
   @media (min-width: 1200px) and (max-width: 2000px) { 
     
   }
`
export const  Seccion6 = styled.div`
width: 80%;
height: 200px;
margin: auto;
text-align: center;

@media (min-width: 768px) and (max-width: 1199px) { 
  width: 20vh;
 }
`

export const BoxMobile2 = styled.div`
width: 80%;
height: 70%;
margin: auto;
background: #F5F2F2;
`

export const BoxDiagonal = styled.div`
width:80%;
height: 140px;
margin: auto;
text-align: center;
`
export const BoxDiagonal1 = styled.div`
width: 100%;
height: 40vh;
background: black;
clip-path: polygon(0.5% 0%,101.5% 0%,187% 27%,0% 100%);
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: center;
align-items: center;
@media (max-width: 480px) { 
  height: 300px;
}
@media (max-width: 767px) { 
  height: 300px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  height: 300px;

}
@media (min-width: 1200px) and (max-width: 2000px) { 
  height: 550px;
  clip-path: polygon(0.5% 0%,101.5% 0%,187% 27%,0% 60%);

}

`
export const LabelErrores = styled.p`
color: red;
font-size: 12px;
font-family: Poppins;
font-Weight: 600;
`

export const AjusteMobile = styled.div`
width: 100%;
height: 50%;
display: flex;

`
export const BoxMobile3 = styled.div`
width: 90%;
height 30%;
margin: auto;
background: black;
display: flex;
flex-direction: row;
justify-content: center;
`

export const Seccion7 = styled.div`
width: 100%;
height: 5%;
@media (max-width: 480px) { 
  height: 5%;
}
@media (max-width: 767px) { 
  height: 150px;
}
@media (min-width: 768px) and (max-width: 1199px) { 
  height: 12%;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
  height: 12%;
}
`
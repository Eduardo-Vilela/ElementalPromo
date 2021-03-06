import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500&display=swap');

  
  
    
`

export const ImagenLogo = styled.img`

`
export const ImagenSlide = styled.img`
`
export const ImagenCasita  = styled.img`
`
export const Negrita = styled.p`
font-weigth: 600;
font-size: 22px;
font-family: 'NEXT ART';
text-align: center;
margin: 0;
`
export const BoxPrincipal = styled.div`
width: 100%;
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
display: flex;
flex-direction: row;
justify-content: center;
margin: auto;
position: relative;
`

export const BoxDerecha = styled.div`
  width: 30%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  right: 0;
`
export const BoxIzquierda = styled.div`
width: 100%;
`

export const BoxAbajo = styled.div`
  width: 100%;
  height: 282px;  
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
width: 35%;
height: 700px;

`
export const Box2 = styled.div`
width: 65%;
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
width: 20%;
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
width: 90%;
height: 200px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
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
font-weight: 500;
font-size: 27px;
font-family: 'Maven Pro', sans-serif;
line-height: 33px;
text-align: center;
@media (max-width: 480px) { 
    font-size: 15px;
    margin: 0;
    margin-bottom: 10px;
  }
  @media (max-width: 767px) { 
    font-size: 15px;
    margin: 0;
    margin-bottom: 10px;
  }

`
export const Parrafo1 = styled.div`
width: 30%;
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
width: 30%;
height: 200px;
`
export const Parrafo3 = styled.div`
width: 30%;
height: 200px;
`
export const SubBoxCarusel = styled.div`
  width: 90%;
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
font-size: 17px;
font-family: 'NEXT ART';
@media (max-width: 480px) { 
    text-align: center;
  }
  @media (max-width: 767px) { 
    text-align: center;
  }
`
export const TextoParrafo = styled.p`
font-size: 14px;
font-family: 'Maven Pro', sans-serif;
font-weight: 300;
@media (max-width: 480px) { 
   font-size: 11px;
   text-align: center;
  }
  @media (max-width: 767px) { 
    font-size: 14px;
    text-align: center;
  }

`
export const Texto4 = styled.p`
font-size: 14px;
font-family: 'Maven Pro', sans-serif;
font-weight: 300;
line-height: 0;
@media (max-width: 480px) { 
    font-size: 12px;
  }
  @media (max-width: 767px) { 
    font-size: 12px;
  }

`
export const Boxmapa = styled.div`
width: 35%;
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
width: 40%;
`
export const Beneficio = styled.div`
  width: 175px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
@media (max-width: 480px) { 
    width: 100%;
  }
  @media (max-width: 767px) { 
    width: 100%;
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
font-size: 15px;
color: white;
line-height: 15px;
font-family: 'Maven Pro', sans-serif;
font-weight: 300;

@media (max-width: 480px) { 
    font-size: 13px;
   }
   @media (max-width: 767px) { 
    font-size: 13px;
   }
`
export const FotoPlano = styled.img`
  
@media (max-width: 480px) { 
    width: 100%;
   }
   @media (max-width: 767px) { 
     width: 100%;
   }

@media (min-width: 768px) and (max-width: 1199px) { 
    width: 90%;
    height: auto;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    width: 90%;
    height: auto;
  }
`

export const TituloCasita = styled.h3`
color: white;
font-size: 15px;
font-weight: 200;
font-family:'NEXT ART';
@media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 13px;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
    
  }
`
export const Texto1 = styled.h3`
font-size: 18px;
line-height: 0;
font-family:'NEXT ART';
@media (min-width: 768px) and (max-width: 1199px) { 
    font-size: 22px;
}
`
export const Texto3 = styled.h3`
  color: black;
  font-size: 15px;
  font-weight: 200;
  font-family: 'Maven Pro', sans-serif;
  line-height: 1.3em;
  @media (max-width: 767px) { 
    font-size: 14px;
  }
  @media (max-width: 480px) { 
    font-size: 14px;
  }


`
export const Texto2 = styled.p`
font-size: 12px;
color: black;
font-family:'NEXT ART';
font-weight: 600;
line-height: 12px;
margin: 0px;

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
font-size: 17px;
text-align: center;
`

export const BoxForm = styled.form`
  width: 90%;
  height: 83%;
  margin:auto;
  padding: 20px 0px;
  background:#F5F2F2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

@media (max-width: 480px) { 
    width: 80%;
    margin: auto;
    background: #F5F2F2;
   }
   @media (max-width: 767px) { 
     width: 80%;
     margin: auto;
     background: #F5F2F2;
   }
   @media (min-width: 768px) and (max-width: 1199px) { 
    width: 80%;
    margin: auto;
    background: #F5F2F2;
}
`

export const BoxLogo = styled.div`
  width: 100%;
  height: 120px;
  background: #1B1B1B; 
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

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
  font-size: 22px;
  font-family: 'NEXT ART', sans-serif;
  margin: 0;
  text-align: center;
  font-weight: 200;
@media (max-width: 480px) { 
    font-size: 20px;
  }
  @media (max-width: 767px) { 
    font-size: 20px;
  }
`
export const Tituloform3 = styled.p`
font-size: 24px;
margin: 0;
text-align: center;
font-weight: 700;
font-family: 'NEXT ART';
@media (max-width: 480px) { 
    font-size: 20px;
  }
  @media (max-width: 767px) { 
    font-size: 20px;
  }
`
export const TituloForm2 = styled.p`
font-size: 18px;
margin: 0;
text-align: center;
font-weight: 600;
font-family:'NEXT ART';
@media (max-width: 480px) { 
    font-size: 15px;
  }
  @media (max-width: 767px) { 
    font-size: 15px;
  }
`
export const SeparadorForm = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin:auto;

@media (max-width: 480px) { 
  }
  @media (max-width: 767px) {
  }
`

export const ContainerButton = styled.div`
  width: 85%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin:auto;

@media (max-width: 480px) { 
  }
  @media (max-width: 767px) {
  }
`

export const SeparadorForm2 = styled.div`
  width: 85%;
  height: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

@media (max-width: 480px) { 
    // height: 160px;
  }
  @media (max-width: 767px) { 
    // height: 160px;
  }
`
export const InputForm = styled.input`
  width: 100%;
  height: 35px;
  margin: auto;
`
export const InputFormCheck = styled.input`
width: 35px;
height: 35px;
:[checkend]{
  background:red;
}
`
export const LabelInput = styled.label`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  font-family: 'NEXT ART';
@media (max-width: 480px) { 
    font-size: 14px;
  }
  @media (max-width: 767px) { 
    font-size: 14px;
  }
`

export const AjusteCheckBox = styled.div`
 
  @media (max-width: 480px) { 
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  @media (max-width: 767px) { 
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
`

export const ButtonForm = styled.input`
  width: 80%;
  height: 45px;
  border-radius: 25px;
  border: none;
  margin: auto;
  background: #1A1A1A;
  font-size: 20px;
  color: white;
`

export const LabelInputCheck = styled.h3`
  font-size: 17px;
  font-weight: 400;
  margin: 0px;
  font-family:'NEXT ART';
  @media (max-width: 480px) { 
    width: 100%;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 767px) { 
    width:100%;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const SubBoxLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1654623801/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/4-05_ju5ct3.webp);
background-size: contain;
`

export const  Seccion1 = styled.div`
width: 100%;
height: 300px;
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
  height: 330px;
  background: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
@media (min-width: 768px) and (max-width: 1199px) { 
    width: 100%;
    height: 500px;
  }
`
export const  Seccion4 = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
export const  Seccion5 = styled.div`
  width: 80%;
  height: 470px;
  margin: auto;
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
  width: 100%;
  font-size: 0.9em;
  text-align: center;
  height: 200px
`

export const BoxMobile2 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BoxDiagonal = styled.div`
  margin-top: -40px;
  width: 90%;
  border: 1px solid black;
  border-top: 0px !important;
  height: 180px;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;

  @media (max-width: 480px) { 
    margin-top: -50px;
    heigh: 200px;
  }
  @media (max-width: 767px) { 
    margin-top: -60px;
    heigh: 200px;
  }
`
export const BoxDiag = styled.div`
  width: 100%;
  background: #1A1A1A;
  height: 250px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: polygon(0.5% 0%,100.5% 0%,150% 74%,0% 100%);

  @media (max-width: 480px) { 
    height: 300px;
  }
  @media (max-width: 767px) { 
    height: 300px;
  }
`

export const BoxDiagonal1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: center;
align-items: center;
@media (max-width: 480px) { 
}
@media (max-width: 767px) { 
}
@media (min-width: 768px) and (max-width: 1199px) { 


}
@media (min-width: 1200px) and (max-width: 2000px) { 

}

`
export const LabelErrores = styled.p`
  width: 100%;
  color: red;
  font-size: 12px;
  font-family: 'Maven Pro', sans-serif;
  font-Weight: 600;
  margin: 4px !important; 
`

export const AjusteMobile = styled.div`
  width: 100%;
  display: flex;
`
export const BoxMobile3 = styled.div`
width: 90%;
height 30%;
margin: auto;
margin-bottom: 0px !important;
background: black;
display: flex;
flex-direction: row;
justify-content: center;
`

export const Seccion7 = styled.div`
  width: 100%;
  margin-top: -30px;
  margin-bottom: -10px;
@media (max-width: 480px) { 
  }
@media (max-width: 767px) { 
  }
@media (min-width: 768px) and (max-width: 1199px) { 
  height: 12%;
}
@media (min-width: 1200px) and (max-width: 2000px) { 
  height: 12%;
}
`

export const SeparadorForm3 = styled.div`
width: 85%;
height: 250px;
align-items: center;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-around;
`

export const BoxCheckBox = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const BoxCheckBox1 = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`
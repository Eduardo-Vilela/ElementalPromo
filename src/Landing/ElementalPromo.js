import React from 'react'
import { BoxPrincipal,
  BoxSecundario,
  BoxDerecha,
  BoxIzquierda,
  BoxAbajo,
  BoxArriba,
  Box1,
  Box2,
  Parte1,
  Parte2,
  BoxTitulo,
  BoxCarrousel,
  BoxParrafos,
  BoxCasita,
  BoxFamilias,
  Titulo,
  Container,
  Parrafo1,
  Parrafo2,
  Parrafo3,
  SubBoxCarusel,
  TituloParrafos,
  TextoParrafo,
  Boxvacio,
  Boxmapa,
  BoxBeneficios,
  Beneficio,
  Icono,
  Subtitulo,
  FotoPlano,
  TituloCasita,
  Texto1,
  Texto2,
  BoxJoven,
  Joven,
  BoxForm,
  BoxLogo,
  TituloForm,

} from './Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { useForm } from "react-hook-form";

function ElementalPromo() {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data) => {
  
  };


  return (
    <>
    <Container>
     <BoxPrincipal>
         <BoxSecundario>
           <BoxDerecha>
             <BoxLogo>
              <div>
                <img alt='logo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654218679/ELEMENTAL%20CONSTRUCTORA/LandingPromo/222_oule7w.svg'/>
              </div>
             </BoxLogo>
             <BoxForm>
              <div>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <TituloForm>ELEGIR COMO VIVIR,<br/><b>ELEGI ELEMENTAL</b></TituloForm>
                    <Texto2>Dejanos tus datos para recibir más información sobre nuestras viviendas. </Texto2>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      placeholder="Bill"
                      {...register("firstName", {
                        required: "this is a required",
                        maxLength: {
                          value: 2,
                          message: "Max length is 2"
                        }
                      })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                      placeholder="Luo"
                      {...register("lastName", {
                        required: "this is required",
                        minLength: {
                          value: 2,
                          message: "Min length is 2"
                        }
                      })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input
                      placeholder="bluebill1049@hotmail.com"
                      type="text"
                      {...register("email", {
                        required: "this is required",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                    <div>
                      <TituloForm>¿EN CUAL DE NUESTRAS VIVIENDAS <br/> ESTAS INTERESADO?</TituloForm>
                    </div>

                    <input type="submit" />
                  </form>
               </div>
             </BoxForm>
           </BoxDerecha>
           <BoxIzquierda>
              <BoxArriba>
                <Box1>

                </Box1>
                <Box2>
                  <Parte1>
                    <BoxTitulo>
                      <Titulo>
                        EL SUEÑO DE LA CASA PROPIA, EN TIEMPO RECORD.<br/> 
                        <b>FINANCIACION A TASA 0% EN PESOS</b>
                      </Titulo>
                    </BoxTitulo>
                    <BoxCarrousel>
                      <SubBoxCarusel>
                        <Swiper
                          spaceBetween={30}
                          autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay]}
                          className="mySwiper"
                        >
                          <SwiperSlide><img alt='slide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116682/ELEMENTAL%20CONSTRUCTORA/LandingPromo/SLIDE_1_ycr9zn.webp'/> </SwiperSlide>
                          <SwiperSlide><img alt='slide2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116682/ELEMENTAL%20CONSTRUCTORA/LandingPromo/SLIDE_2_kupyap.webp'/></SwiperSlide>
                          <SwiperSlide><img alt='slide3'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116682/ELEMENTAL%20CONSTRUCTORA/LandingPromo/SLIDE_3_biavxn.webp'/></SwiperSlide>
                          <SwiperSlide><img alt='slide4' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116682/ELEMENTAL%20CONSTRUCTORA/LandingPromo/SLIDE_4_nfpplc.webp'/></SwiperSlide>
                          <SwiperSlide><img alt='slide5' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116682/ELEMENTAL%20CONSTRUCTORA/LandingPromo/SLIDE_5_qgfie7.webp'/></SwiperSlide>
                        </Swiper>
                      </SubBoxCarusel>
                    </BoxCarrousel>
                    <BoxParrafos>
                      <Parrafo1>
                         <TituloParrafos>Línea Modular</TituloParrafos>
                         <TextoParrafo>
                           Vivienda super económica con entrega en sólo 60 días 
                           y una colocación de sólo 72hs, manteniendo una alta 
                           calidad de realización y respetando los plazos pactados.
                         </TextoParrafo>
                      </Parrafo1>
                      <Parrafo2>
                         <TituloParrafos>Línea tradicional</TituloParrafos>
                         <TextoParrafo> 
                           Ofrecemos una variedad de modelos 
                           preestablecidos de casas y dúplex, 
                           con la posibilidad de personalizarlos
                            completamente a tu medida.
                         </TextoParrafo>
                      </Parrafo2>
                      <Parrafo3>
                         <TituloParrafos>Línea design</TituloParrafos>
                         <TextoParrafo>
                            Para satisfacer a todo nuestro público 
                            ofrecemos un servicio de construcción 
                            completamente a tu medida, traenos tu 
                            idea y nosotros la materializamos 
                            como la soñaste.
                         </TextoParrafo>
                      </Parrafo3>
                    </BoxParrafos>
                  </Parte1>
                  <Parte2>
                    <BoxCasita>
                       <img width='35' height='35' alt='icono' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202015/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Frame_ullzbf.png'/>
                       {/* <img  alt='linea' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202690/ELEMENTAL%20CONSTRUCTORA/LandingPromo/linea_hmr0je.png'/> */}
                       <TituloCasita>
                        CONSTRUIMOS LA<br/>
                         CASA DE TUS<br/> 
                        SUEÑOS A TU MEDIDA,<br/> 
                        CON LA MEJOR <br/>
                        FINANCIACION.
                       </TituloCasita>
                    </BoxCasita>
                    <BoxFamilias>
                       <Texto1>18</Texto1>
                       <Texto2>FAMILIAS NOS <br/>ELIGIERON</Texto2>
                       <Texto1>84</Texto1>
                       <Texto2>EN PROMEDIO MENSUAL <br/>DE FORMULARIOS <br/>RECIBIDOS</Texto2>
                    </BoxFamilias>
                    <BoxJoven>
                     <Joven>SOMOS UNA<br/> EMPRESA JOVEN, <br/>A PURA EXPANSION Y <br/>CRECIMIENTO.</Joven> 
                    </BoxJoven>
                  </Parte2>               
                </Box2>
              </BoxArriba>
              <BoxAbajo>
                <Boxvacio>

                </Boxvacio>
                <BoxBeneficios>
                   <Beneficio>
                     <Icono alt='icono1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Group_visoou.png'/>
                     <Subtitulo>Rápida <br/> realización</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono2_qxpega.png'/>
                     <Subtitulo>Valores <br/> Competitivos</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono4_zv8ysi.png'/>
                     <Subtitulo>Financiación <br/> Personalizada</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono4' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono3_z8hehr.png'/>
                     <Subtitulo>Variedad  <br/> De Servicios</Subtitulo> 
                   </Beneficio>
                </BoxBeneficios>
                <Boxmapa>
                   <FotoPlano alt='planocasa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116683/ELEMENTAL%20CONSTRUCTORA/LandingPromo/imagen_1-24-min_ajpd4b.png'/>
                </Boxmapa>
              </BoxAbajo>
           </BoxIzquierda>
         </BoxSecundario>
     </BoxPrincipal>
     </Container>
    </>
  )
}

export default ElementalPromo
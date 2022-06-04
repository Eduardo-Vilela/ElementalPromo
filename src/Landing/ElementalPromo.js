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
  BoxDiagonal,
  BoxDiagonal1,
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
  Texto3,
  Texto4,
  Seccion6,
  Joven,
  BoxForm,
  BoxLogo,
  TituloForm,
  TituloForm2,
  Tituloform3,
  SeparadorForm,
  InputForm,
  LabelInput,
  SeparadorForm2,
  AjusteCheckBox,
  ButtonForm,
  LabelInputCheck,
  InputFormCheck,
  SubBoxLogo,
  BoxMobile,
  LabelErrores,
  AjusteMobile,

} from './Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { useForm } from "react-hook-form";
import ElementalPromoMobile from './ElementalPromoMobile';
import axios from "axios";
import { toast } from 'react-toastify';

function ElementalPromo() {

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data,e) => {
    //alert(JSON.stringify(data));
    axios.post(`https://elementalconstructora.com.ar/webApi/public/FormularioPromoElemental`, data)
      .then(function (response) {
        toast.success('Formulario enviado!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      reset()
      .catch(function (error) {
        toast.error('No se pudo enviar el formulario!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });

    reset()
  };


  return (
    <>
    <Container>
     <BoxPrincipal>
         <BoxSecundario>
           <BoxDerecha>
             <BoxLogo>
              <SubBoxLogo>
                <img width='80%' alt='logo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654218679/ELEMENTAL%20CONSTRUCTORA/LandingPromo/222_oule7w.svg'/>
              </SubBoxLogo>
             </BoxLogo>
             <BoxForm onSubmit={handleSubmit(onSubmit)}>
              <SeparadorForm>
                    <TituloForm>ELEGÍ COMO VIVIR,</TituloForm>
                    <Tituloform3>ELEGÍ ELEMENTAL</Tituloform3>
                    <Texto3>Dejanos tus datos para recibir más información sobre nuestras viviendas. </Texto3>
              </SeparadorForm>
              <SeparadorForm2>      
                    <LabelInput htmlFor="Nombre">NOMBRE</LabelInput>
                    <InputForm
                      {...register("Nombre", {
                        required: "Campo Requerido",

                      })}
                    />
                    {errors.Nombre && <LabelErrores>{errors.Nombre.message}</LabelErrores>}

                    <LabelInput htmlFor="Telefono">TELEFONO</LabelInput>
                    <InputForm
                       type="number"
                      {...register("Telefono", {
                        required: "Campo Requerido",
                      })}
                    />
                    {errors.Telefono && <LabelErrores>{errors.Telefono.message}</LabelErrores>}

                    <LabelInput htmlFor="email">EMAIL</LabelInput>
                    <InputForm
                      type="text"
                      {...register("email", {
                        required: "Campo Requerido",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Correo Invalido"
                        }
                      })}
                    />
                    {errors.email && <LabelErrores>{errors.email.message}</LabelErrores>}
              </SeparadorForm2>
              <SeparadorForm>
                      <TituloForm2>¿EN CUAL DE NUESTRAS VIVIENDAS <br/> ESTAS INTERESADO?</TituloForm2>
              </SeparadorForm>
              <SeparadorForm>
                  <AjusteCheckBox>
                    <LabelInputCheck htmlFor="lineaModular">
                      LÍNEA MODULAR
                      <Texto4>Una opción inmediata y económica.</Texto4>
                    </LabelInputCheck>
                    <InputFormCheck type="checkbox" value='lineaModular' {...register("Linea", {required: true})} />
                  </AjusteCheckBox> 
                  <AjusteCheckBox> 
                    <LabelInputCheck htmlFor="lineaTradicional">
                      LÍNEA TRADICIONAL
                      <Texto4>Modelos en construcción húmeda. </Texto4>
                    </LabelInputCheck>
                    <InputFormCheck type="checkbox" value='lineaTradicional' {...register("Linea ", {required: true})} />
                  </AjusteCheckBox>
                  <AjusteCheckBox>
                    <LabelInputCheck htmlFor="lineaDesign">
                      LÍNEA DESIGN
                      <Texto4>Diseñá tu casa a tu medida. </Texto4>
                    </LabelInputCheck>
                    <InputFormCheck  type="checkbox" value='lineaDesign' {...register("Linea", {required: true})} />
                  </AjusteCheckBox>  
              </SeparadorForm>
              <SeparadorForm>
                    <ButtonForm type="submit" />
               </SeparadorForm>
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
                         <TituloParrafos>LÍNEA MODULAR</TituloParrafos>
                         <TextoParrafo>
                           Vivienda super económica con entrega en sólo 60 días 
                           y una colocación de sólo 72hs, manteniendo una alta 
                           calidad de realización y respetando los plazos pactados.
                         </TextoParrafo>
                      </Parrafo1>
                      <Parrafo2>
                         <TituloParrafos>LÍNEA TRADICIONAL</TituloParrafos>
                         <TextoParrafo> 
                           Ofrecemos una variedad de modelos 
                           preestablecidos de casas y dúplex, 
                           con la posibilidad de personalizarlos
                            completamente a tu medida.
                         </TextoParrafo>
                      </Parrafo2>
                      <Parrafo3>
                         <TituloParrafos>LÍNEA DESIGN</TituloParrafos>
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
                  <BoxDiagonal1>
                    <div style={{padding:'20px' , height:'50%'}}>
                      <img width='35' height='35' alt='icono' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202015/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Frame_ullzbf.png'/>
                                {/* <img  alt='linea' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202690/ELEMENTAL%20CONSTRUCTORA/LandingPromo/linea_hmr0je.png'/> */}
                      <TituloCasita>
                      CONSTRUIMOS LA<br/>
                        CASA DE TUS<br/> 
                      SUEÑOS A TU MEDIDA,<br/> 
                      CON LA MEJOR <br/>
                      FINANCIACION.
                      </TituloCasita>
                      </div> 
                    <BoxDiagonal>
                      <Texto1>18</Texto1>
                      <Texto2>FAMILIAS NOS <br/>ELIGIERON</Texto2>
                      <Texto1>84</Texto1>
                      <Texto2>EN PROMEDIO MENSUAL <br/>DE FORMULARIOS <br/>RECIBIDOS</Texto2>
                  </BoxDiagonal>
                  </BoxDiagonal1>
                  <Seccion6>
                  <TituloParrafos>SOMOS UNA<br/> EMPRESA JOVEN, <br/>A PURA EXPANSION Y <br/>CRECIMIENTO.</TituloParrafos>
                  </Seccion6>
                  </Parte2>               
                </Box2>
              </BoxArriba>
              <BoxAbajo>
                <Boxvacio>

                </Boxvacio>
                <BoxBeneficios>
                  <AjusteMobile>
                   <Beneficio>
                     <Icono alt='icono1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Group_visoou.png'/>
                     <Subtitulo>Rápida <br/> realización</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono2_qxpega.png'/>
                     <Subtitulo>Valores <br/> Competitivos</Subtitulo> 
                   </Beneficio>
                  </AjusteMobile>
                  <AjusteMobile>
                   <Beneficio>
                     <Icono alt='icono3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono4_zv8ysi.png'/>
                     <Subtitulo>Financiación <br/> Personalizada</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono4' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono3_z8hehr.png'/>
                     <Subtitulo>Variedad  <br/> De Servicios</Subtitulo> 
                   </Beneficio>
                   </AjusteMobile>
                </BoxBeneficios>
                <Boxmapa>
                   <FotoPlano alt='planocasa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116683/ELEMENTAL%20CONSTRUCTORA/LandingPromo/imagen_1-24-min_ajpd4b.png'/>
                </Boxmapa>
              </BoxAbajo>
           </BoxIzquierda>
         </BoxSecundario>
     </BoxPrincipal>

     <BoxMobile>
       <ElementalPromoMobile/>
     </BoxMobile>

     </Container>
    </>
  )
}

export default ElementalPromo
import React from 'react'
import { BoxPrincipal,
  BoxSecundario,
  BoxDerecha,
  BoxDiag,  
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
  SeparadorForm3,
  BoxCheckBox,
  BoxCheckBox1,

} from './Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useForm } from "react-hook-form";
import ElementalPromoMobile from './ElementalPromoMobile';
import axios from "axios";
import { toast } from 'react-toastify';
import '../app.css';

import "swiper/css/pagination";
import "swiper/css";

function ElementalPromo() {

  const {
    register,
    getValues,
    reset,
    formState: { errors },
    handleSubmit
    } = useForm({
      mode: "onChange"
    });

    const atLeastOne = () =>
    getValues("Linea").length ? true : "Please tell me if this is too hard.";

  console.log(errors);

  const onSubmitPromo = (data, e) => {
    //alert(JSON.stringify(data));
    axios.post(`https://promo.elementalconstructora.com.ar/webApi/public/FormularioPromoElemental`, data)
      .then(function (response) {
        console.log(response.data);
        toast.success('Formulario enviado!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          reset()
      })
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
              <img width='60%' alt='logo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654218679/ELEMENTAL%20CONSTRUCTORA/LandingPromo/222_oule7w.svg'/>
             </BoxLogo>
             <BoxForm onSubmit={handleSubmit(onSubmitPromo)}>
              <SeparadorForm>
                    <TituloForm>ELEG?? COMO VIVIR,</TituloForm>
                    <Tituloform3>ELEG?? ELEMENTAL</Tituloform3>
                    <Texto3>Dejanos tus datos para recibir m??s informaci??n sobre nuestras viviendas. </Texto3>
              </SeparadorForm>
              <SeparadorForm2>      
                    <LabelInput htmlFor="Nombre">NOMBRE</LabelInput>
                    <InputForm
                      {...register("Nombre", {
                        required: "Ingrese su nombre",
                      })}
                    />
                    {errors.Nombre && <LabelErrores>{errors.Nombre.message}</LabelErrores>}

                    <LabelInput htmlFor="Telefono">TEL??FONO</LabelInput>
                    <InputForm
                       type="number"
                      {...register("Telefono", {
                        required: "Ingrese un celular",
                      })}
                    />
                    {errors.Telefono && <LabelErrores>{errors.Telefono.message}</LabelErrores>}

                    <LabelInput htmlFor="email">EMAIL</LabelInput>
                    <InputForm
                      type="text"
                      {...register("email", {
                        required: "Correo Invalido",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Correo Invalido"
                        }
                      })}
                    />
                    {errors.email && <LabelErrores>{errors.email.message}</LabelErrores>}
              </SeparadorForm2>
              <SeparadorForm>
                      <TituloForm2>??EN C??AL DE NUESTRAS VIVIENDAS <br/> ESTAS INTERESADO?</TituloForm2>
              </SeparadorForm>
              <SeparadorForm3>
                  <BoxCheckBox>
                    <AjusteCheckBox>
                      <LabelInputCheck>L??NEA MODULAR</LabelInputCheck>
                      <Texto4>Una opci??n inmediata y econ??mica.</Texto4>
                    </AjusteCheckBox>
                    <AjusteCheckBox>
                      <LabelInputCheck>L??NEA TRADICIONAL</LabelInputCheck>
                      <Texto4>Modelos en construcci??n h??meda. </Texto4>
                    </AjusteCheckBox>
                    <AjusteCheckBox>
                      <LabelInputCheck>L??NEA DESIGN</LabelInputCheck>
                      <Texto4>Dise???? tu casa a tu medida. </Texto4>
                    </AjusteCheckBox>
                  </BoxCheckBox>
                  <BoxCheckBox1>
                    {['Modular', 'Tradicional', 'Design'].map((value) => (
                        <InputFormCheck className='myCheckbox'
                          key={value}
                          type="checkbox"
                          value={value}                  
                          {...register("Linea", {
                            validate: atLeastOne
                          })}
                        />
                      ))}                                      
                  </BoxCheckBox1>
              </SeparadorForm3>
              <SeparadorForm>
                    <ButtonForm type="submit" value="ENVIAR" />
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
                        EL SUE??O DE LA CASA PROPIA, EN TIEMPO RECORD.<br/> 
                        <b>FINANCIACI??N A TASA 0% EN PESOS</b>
                      </Titulo>
                    </BoxTitulo>
                    <BoxCarrousel>
                      <SubBoxCarusel>
                        <Swiper
                          spaceBetween={20}
                          // autoplay={{
                          //   delay: 1500,
                          //   disableOnInteraction: false,
                          // }}
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
                         <TituloParrafos>L??NEA MODULAR</TituloParrafos>
                         <TextoParrafo>
                           Vivienda super econ??mica con entrega en s??lo 60 d??as 
                           y una colocaci??n de s??lo 72hs, manteniendo una alta 
                           calidad de realizaci??n y respetando los plazos pactados.
                         </TextoParrafo>
                      </Parrafo1>
                      <Parrafo2>
                         <TituloParrafos>L??NEA TRADICIONAL</TituloParrafos>
                         <TextoParrafo> 
                           Ofrecemos una variedad de modelos 
                           preestablecidos de casas y d??plex, 
                           con la posibilidad de personalizarlos
                            completamente a tu medida.
                         </TextoParrafo>
                      </Parrafo2>
                      <Parrafo3>
                         <TituloParrafos>L??NEA DESIGN</TituloParrafos>
                         <TextoParrafo>
                            Para satisfacer a todo nuestro p??blico 
                            ofrecemos un servicio de construcci??n 
                            completamente a tu medida, traenos tu 
                            idea y nosotros la materializamos 
                            como la so??aste.
                         </TextoParrafo>
                      </Parrafo3>
                    </BoxParrafos>
                  </Parte1>
                  <Parte2>
                    <BoxDiagonal1>
                      <BoxDiag>
                        <img width='35' height='35' alt='icono' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202015/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Frame_ullzbf.png'/>
                                  {/* <img  alt='linea' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202690/ELEMENTAL%20CONSTRUCTORA/LandingPromo/linea_hmr0je.png'/> */}
                        <TituloCasita>
                          CONSTRUIMOS LA<br/>
                            CASA DE TUS<br/> 
                          SUE??OS A TU MEDIDA,<br/> 
                          CON LA MEJOR <br/>
                          FINANCIACI??N.
                        </TituloCasita>
                      </BoxDiag> 
                      <BoxDiagonal>
                        <Texto1>18</Texto1>
                        <Texto2>FAMILIAS NOS <br/>ELIGIERON</Texto2>
                        <Texto1>84</Texto1>
                        <Texto2>EN PROMEDIO MENSUAL <br/>DE FORMULARIOS <br/>RECIBIDOS</Texto2>
                      </BoxDiagonal>
                    </BoxDiagonal1>

                    <Seccion6>
                      <TituloParrafos>SOMOS UNA<br/> EMPRESA JOVEN, <br/>A PURA EXPANSI??N Y <br/>CRECIMIENTO.</TituloParrafos>
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
                     <Subtitulo>R??pida <br/> realizaci??n</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono2_qxpega.png'/>
                     <Subtitulo>Valores <br/> Competitivos</Subtitulo> 
                   </Beneficio>
                  </AjusteMobile>
                  <AjusteMobile>
                   <Beneficio>
                     <Icono alt='icono3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono4_zv8ysi.png'/>
                     <Subtitulo>Financiaci??n <br/> Personalizada</Subtitulo> 
                   </Beneficio>
                   <Beneficio>
                     <Icono alt='icono4' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654198416/ELEMENTAL%20CONSTRUCTORA/LandingPromo/icono3_z8hehr.png'/>
                     <Subtitulo>Variedad  <br/> De Servicios</Subtitulo> 
                   </Beneficio>
                   </AjusteMobile>
                </BoxBeneficios>
                <Boxmapa>
                   <FotoPlano alt='planocasa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654618771/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/imagen_1-24_gk3wbt.webp'/>
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
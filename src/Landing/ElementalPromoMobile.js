import React from 'react'
import { 
  BoxLogo,
  SubBoxLogo,
  BoxPrincipal2,
  BoxDiag,
  Seccion1,
  Seccion2,
  Seccion3,
  Seccion4,
  Seccion5,
  Seccion6,
  BoxMobile2,
  Titulo,
  SubBoxCarusel,
  Parrafo1,
  TituloParrafos,
  TextoParrafo,
  Icono,
 Subtitulo,
 Beneficio,
 BoxBeneficios,
 Boxmapa,
 FotoPlano,
 BoxForm,
 SeparadorForm,
 TituloForm,
 Tituloform3,
 Texto3,
 Texto4,
 SeparadorForm2,
 LabelInput,
 LabelInputCheck,
InputForm,
TituloForm2,
AjusteCheckBox,
InputFormCheck,
ButtonForm,
BoxDiagonal,
BoxDiagonal1,
TituloCasita,
Texto1,
Texto2,
LabelErrores,
AjusteMobile,
BoxMobile3,
Seccion7,
ContainerButton,
SeparadorForm3,
BoxCheckBox,
BoxCheckBox1,
ImagenLogo,
ImagenSlide,
ImagenCasita ,
Negrita,
 
} from './Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
import '../app.css'


function ElementalPromoMobile() {

  const {
    register,
    reset,
    getValues,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  
  const atLeastOne = () =>
  getValues("Linea").length ? true : "Please tell me if this is too hard.";

console.log(errors);


  const onSubmit = (data,e) => {
    //alert(JSON.stringify(data));
    axios.post(`https://promo.elementalconstructora.com.ar/webApi/public/FormularioPromoElemental`, data)
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
      <BoxPrincipal2>
        <Seccion1>
          <BoxMobile3>
            <ImagenLogo width='250' height='100' alt='logo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654218679/ELEMENTAL%20CONSTRUCTORA/LandingPromo/222_oule7w.svg'/>
          </BoxMobile3>
          <BoxMobile2>
            <div style={{width:'80%', background: '#F5F2F2', height:'200px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <Titulo>
                EL SUE??O DE LA CASA PROPIA, EN TIEMPO RECORD.<br/> 
              </Titulo>
              <Negrita>FINANCIACI??N A <br/>TASA 0% EN PESOS</Negrita>
            </div>
          </BoxMobile2>
        </Seccion1> 
        <Seccion2>
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                 <SwiperSlide style={{textAlign:'center'}}>
                   <ImagenSlide alt='slide1' width='450' height='350' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116642/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/SLIDE_1_cwmrbl.webp'/>
                   <Parrafo1>
                       <TituloParrafos>L??NEA MODULAR</TituloParrafos>
                       <TextoParrafo>
                        Vivienda super econ??mica con entrega en s??lo 60 d??as 
                        y una colocaci??n de s??lo 72hs, manteniendo una alta 
                        calidad de realizaci??n y respetando los plazos pactados.
                      </TextoParrafo>
                    </Parrafo1>
                 </SwiperSlide>
                <SwiperSlide style={{textAlign:'center'}}>
                  <ImagenSlide alt='slide2' width='450' height='350' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116642/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/SLIDE_2_3_gjvhb7.webp'/>
                  <Parrafo1>
                    <TituloParrafos>L??NEA TRADICIONAL</TituloParrafos>
                    <TextoParrafo> 
                      Ofrecemos una variedad de modelos 
                      preestablecidos de casas y d??plex, 
                      con la posibilidad de personalizarlos
                       completamente a tu medida.
                    </TextoParrafo>
                    </Parrafo1>
                </SwiperSlide>
                <SwiperSlide style={{textAlign:'center'}}>
                  <ImagenSlide alt='slide3' width='450' height='350' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116642/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/SLIDE_3_rck35d.webp'/>
                  <Parrafo1>
                    <TituloParrafos>L??NEA DESIGN</TituloParrafos>
                    <TextoParrafo>
                       Para satisfacer a todo nuestro p??blico 
                       ofrecemos un servicio de construcci??n 
                       completamente a tu medida, traenos tu 
                       idea y nosotros la materializamos 
                       como la so??aste.
                    </TextoParrafo>
                     </Parrafo1>
                </SwiperSlide>
              </Swiper>
        </Seccion2>
        <Seccion3>
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
        </Seccion3>
        <Seccion7>
           <FotoPlano width='300' height='150' alt='planocasa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654618771/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/imagen_1-24_gk3wbt.webp'/>
        </Seccion7>
        <Seccion4>
           <BoxForm onSubmit={handleSubmit(onSubmit)}>
              <SeparadorForm>
                    <TituloForm>ELEG?? COMO VIVIR,</TituloForm>
                    <Tituloform3>ELEG?? ELEMENTAL</Tituloform3>
                    <Texto3>Dejanos tus datos para recibir<br/> m??s informaci??n sobre <br/>nuestras viviendas. </Texto3>
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
              <ContainerButton>
                      <TituloForm2>??EN C??AL DE NUESTRAS VIVIENDAS <br/> EST??S INTERESADO?</TituloForm2>
              </ContainerButton>
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
              <ContainerButton>
                    <ButtonForm type="submit" value="ENVIAR" />
               </ContainerButton>
             </BoxForm>
        </Seccion4>
        <Seccion5>
        <BoxDiagonal1>
                      <BoxDiag>
                        <ImagenCasita width='35' height='35' alt='icono' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202015/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Frame_ullzbf.png'/>
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

        </Seccion5>

        <Seccion6>
         <h2 style={{fontFamily:'NEXT ART'}}>SOMOS UNA<br/> EMPRESA JOVEN, <br/>A PURA EXPANSI??N Y <br/>CRECIMIENTO.</h2>
        </Seccion6>
      </BoxPrincipal2>
    </>
  )
}

export default ElementalPromoMobile
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

 
} from './Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';

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
    axios.post(`https://prueba.elementalconstructora.com.ar/webApi/public/FormularioPromoElemental`, data)
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
            <img width='80%' alt='logo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654218679/ELEMENTAL%20CONSTRUCTORA/LandingPromo/222_oule7w.svg'/>
          </BoxMobile3>
          <BoxMobile2>
            <div style={{width:'80%', background: '#F5F2F2'}}>
              <Titulo>
                EL SUEÑO DE LA CASA PROPIA,<br/>  EN TIEMPO RECORD.<br/> 
                <b>FINANCIACION A TASA 0% EN PESOS</b>
              </Titulo>
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
                   <img alt='slide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116642/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/SLIDE_1_cwmrbl.webp'/>
                   <Parrafo1>
                       <TituloParrafos>LÍNEA MODULAR</TituloParrafos>
                       <TextoParrafo>
                        Vivienda super económica con entrega en sólo 60 días 
                        y una colocación de sólo 72hs, manteniendo una alta 
                        calidad de realización y respetando los plazos pactados.
                      </TextoParrafo>
                    </Parrafo1>
                 </SwiperSlide>
                <SwiperSlide style={{textAlign:'center'}}>
                  <img alt='slide2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116642/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/SLIDE_2_3_gjvhb7.webp'/>
                  <Parrafo1>
                    <TituloParrafos>LÍNEA TRADICIONAL</TituloParrafos>
                    <TextoParrafo> 
                      Ofrecemos una variedad de modelos 
                      preestablecidos de casas y dúplex, 
                      con la posibilidad de personalizarlos
                       completamente a tu medida.
                    </TextoParrafo>
                    </Parrafo1>
                </SwiperSlide>
                <SwiperSlide style={{textAlign:'center'}}>
                  <img alt='slide3'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116642/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Mobile/SLIDE_3_rck35d.webp'/>
                  <Parrafo1>
                    <TituloParrafos>LÍNEA DESIGN</TituloParrafos>
                    <TextoParrafo>
                       Para satisfacer a todo nuestro público 
                       ofrecemos un servicio de construcción 
                       completamente a tu medida, traenos tu 
                       idea y nosotros la materializamos 
                       como la soñaste.
                    </TextoParrafo>
                     </Parrafo1>
                </SwiperSlide>
              </Swiper>
        </Seccion2>
        <Seccion3>
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
        </Seccion3>
        <Seccion7>
           <FotoPlano alt='planocasa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654116683/ELEMENTAL%20CONSTRUCTORA/LandingPromo/imagen_1-24-min_ajpd4b.png'/>
        </Seccion7>
        <Seccion4>
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
                        required: "Ingrese su nombre",
                      })}
                    />
                    {errors.Nombre && <LabelErrores>{errors.Nombre.message}</LabelErrores>}

                    <LabelInput htmlFor="Telefono">TELÉFONO</LabelInput>
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
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Correo Invalido"
                        }
                      })}
                    />
                    {errors.email && <LabelErrores>{errors.email.message}</LabelErrores>}
              </SeparadorForm2>
              <ContainerButton>
                      <TituloForm2>¿EN CUAL DE NUESTRAS VIVIENDAS <br/> ESTAS INTERESADO?</TituloForm2>
              </ContainerButton>
              <SeparadorForm3>
                  <BoxCheckBox>
                    <AjusteCheckBox>
                      <LabelInputCheck>LÍNEA MODULAR</LabelInputCheck>
                      <Texto4>Una opción inmediata y económica.</Texto4>
                    </AjusteCheckBox>
                    <AjusteCheckBox>
                      <LabelInputCheck>LÍNEA TRADICIONAL</LabelInputCheck>
                      <Texto4>Modelos en construcción húmeda. </Texto4>
                    </AjusteCheckBox>
                    <AjusteCheckBox>
                      <LabelInputCheck>LÍNEA DESIGN</LabelInputCheck>
                      <Texto4>Diseñá tu casa a tu medida. </Texto4>
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
                        <img width='35' height='35' alt='icono' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202015/ELEMENTAL%20CONSTRUCTORA/LandingPromo/Frame_ullzbf.png'/>
                                  {/* <img  alt='linea' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654202690/ELEMENTAL%20CONSTRUCTORA/LandingPromo/linea_hmr0je.png'/> */}
                        <TituloCasita>
                          CONSTRUIMOS LA<br/>
                            CASA DE TUS<br/> 
                          SUEÑOS A TU MEDIDA,<br/> 
                          CON LA MEJOR <br/>
                          FINANCIACIÓN.
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
         <h2>SOMOS UNA<br/> EMPRESA JOVEN, <br/>A PURA EXPANSION Y <br/>CRECIMIENTO.</h2>
        </Seccion6>
      </BoxPrincipal2>
    </>
  )
}

export default ElementalPromoMobile
import React from "react";
import { Link as Button } from "react-scroll";

export const UsSection = () => {
  return (
    <>
      <div className="us_container" id="us">
        <div className="us_column_1">
          <div className="us_column_1_wrapper_text">
            <p className="us_column_1_section_name section_name">About Us</p>
            <h1 className="us_column_1_title title">
              We are passionate about languages.
            </h1>
            <p className="us_column_1_description">
              We are Tour Guide and Teacher who has spent years living, working,
              and exploring the world. Luego de viajar años con grupos
              acompañados de profesores de idiomas, creemos que la mejor forma
              de aprender un idioma es cuando no te das cuenta que lo estás
              aprendiendo. Esto ocurre al realizar una experiencia que te
              atrapa, sobre un tema que te interesa, y en esos momentos no
              importa si no conoces el idioma al 100%, quieres continuar
              escuchando y aprendiendo. Por eso, queremos aportar nuestro grano
              de arena para romper la barrera idiomática , aportando un
              complemento para quienes enseñan un idioma.
            </p>
            {/* <div className="us_column_1_wrapper_button">
              <Button
                className="button"
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                See Services
              </Button>
            </div> */}
          </div>
        </div>

        <div className="us_column_2">
          <div className="us_column_2_wrapper_video">
            <iframe
              className="us_column_2_video"
              src="https://player.vimeo.com/video/564845625"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video presentation Second Languages"
            />
          </div>
        </div>
      </div>
    </>
  );
};

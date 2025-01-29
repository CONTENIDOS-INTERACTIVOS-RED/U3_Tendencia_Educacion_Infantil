<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Modalidades de atención en la educación inicial'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p(data-aos="fade-left").mb-5 El estudio de este tema es un aspecto esencial para garantizar que cada niño reciba una educación adecuada y de calidad, sin importar su contexto social, cultural o geográfico. 
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Concepto y clasificación de las modalidades de atención

      p(data-aos="fade-left").mb-5 En el contexto de la educación inicial, las modalidades de atención hacen referencia a las distintas formas en que se organiza la prestación del servicio educativo para la primera infancia (MEN, 2014). Estas modalidades son fundamentales para garantizar que todos los niños, sin importar sus circunstancias personales o sociales, puedan acceder a una educación que favorezca su desarrollo integral.

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/1.png", alt="", data-aos="zoom-in")
        .col-lg-7
          .py-4.px-5.bg-color-info(data-aos="fade-right").h-100
            p.mb-0 La clasificación de las modalidades de atención responde a las diversas necesidades y contextos de los niños, así como a las realidades sociales, culturales y geográficas del país. En Colombia, se reconocen principalmente tres tipos de modalidades: modalidad institucional, modalidad familiar y modalidad combinada. Cada una de ellas tiene características específicas que buscan adaptarse a los diferentes entornos y garantizar que los niños reciban el apoyo educativo adecuado desde sus primeros años:

      .row.align-items-start.mb-5
        .col-lg-7

          AcordionA(tipo="b")
            .div(titulo="Modalidad familiar")
              p Está orientada a la atención educativa en el hogar. A través de esta modalidad, las familias son las encargadas de proveer las experiencias educativas, con el acompañamiento de los servicios de atención integral del Estado. Se reconoce que el hogar es un espacio clave en el desarrollo infantil y, por tanto, se fomenta que los padres y cuidadores estén comprometidos con el proceso educativo, siguiendo orientaciones y programas que aseguren el desarrollo de habilidades fundamentales en los niños.
            .div(titulo="Modalidad institucional")
              p Se refiere a los servicios educativos destinados específicamente a la primera infancia, brindados en espacios organizados como jardines infantiles y centros de atención integral. Según Senlle (2006), estos procesos forman parte de la estructura de la prestación del servicio educativo y requieren la definición de procesos «estratégicos», de «realización» y de «apoyo» educativo.
              p Estas instituciones operan bajo normativas específicas que garantizan la calidad de la educación y el bienestar integral de los niños. En este contexto, se ofrecen experiencias educativas diseñadas para fomentar el desarrollo cognitivo, social y emocional de los niños en un entorno estructurado, seguro y supervisado por profesionales capacitados. Esta modalidad busca proporcionar una base sólida para el aprendizaje y el desarrollo integral en los primeros años de vida, favoreciendo el bienestar y el crecimiento óptimo de los menores.

            .div(titulo="Modalidad combinada")
              p Busca integrar ambas modalidades, institucional y familiar, ofreciendo una atención flexible que combine el trabajo de las instituciones educativas con el apoyo y la participación activa de las familias. Esta modalidad es particularmente útil en contextos rurales o en comunidades con dificultades para acceder a instituciones educativas, porque permite una atención personalizada y adaptada a las necesidades de cada niño y su familia.

        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0


      .bg-color-info.p-4.mb-5
        p.mb-0 Cada una de estas modalidades tiene sus fortalezas y desafíos, y su aplicación dependerá de las características del contexto en el que se encuentren los niños. El objetivo principal es asegurar que todos los niños, independientemente de su situación, puedan acceder a un servicio educativo de calidad que favorezca su desarrollo integral. De esta manera, las modalidades de atención juegan un papel clave en la construcción de una educación inclusiva y equitativa desde la primera infancia, promoviendo el acceso a las oportunidades de aprendizaje para todos.

      p(data-aos="fade-left").mb-4 Es importante reflexionar sobre cómo la elección de una modalidad adecuada puede impactar directamente en el bienestar y el desarrollo de los niños. 


      .bg-color-1.mb-4
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[strong ¿Sabías que..?] 
              p.mb-0 Cada modalidad debe ser vista no solo como una estructura organizativa, sino como una oportunidad para ofrecer una atención educativa personalizada y ajustada a las realidades sociales, culturales y económicas de cada comunidad. 

      p(data-aos="fade-left").mb-5 En este sentido, las políticas públicas deben garantizar que las modalidades de atención sean accesibles, equitativas y capaces de ofrecer experiencias educativas que fortalezcan el desarrollo integral de los niños en todas sus dimensiones.


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Modalidades institucionales y familiares: características y objetivos

      p(data-aos="fade-left").mb-4 De acuerdo con el Ministerio de Educación Nacional (MEN, 2014), las modalidades de educación inicial, tanto institucionales como familiares, presentan características diferenciadas y objetivos específicos que buscan garantizar el desarrollo integral de los niños.

      h4(data-aos="fade-left").mb-4 Modalidades institucionales

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7.order-lg-1
                h5 ¿En qué se basan?
                p Las modalidades institucionales se basan en entornos organizados, como jardines infantiles, centros de desarrollo infantil o preescolares, gestionados por entidades públicas o privadas, y ofrecen experiencias educativas estructuradas diseñadas para promover el desarrollo cognitivo, emocional, social y físico de los niños. Además, estas cuentan con personal especializado que asegura el apoyo profesional necesario para atender las necesidades de la primera infancia. El objetivo principal de estas modalidades es crear un entorno de aprendizaje seguro y estimulante, que fomente habilidades básicas como el lenguaje, la motricidad y la socialización, además de garantizar la igualdad de oportunidades educativas desde los primeros años (MEN, 2014).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7.order-lg-1
                h5 ¿Cuál es el principal objetivo?
                p En estas modalidades educativas, el principal objetivo es crear un entorno de aprendizaje seguro y estimulante que favorezca el desarrollo de habilidades claves en los niños, como el lenguaje, la motricidad, la resolución de problemas y la socialización. Además, se busca garantizar la igualdad de oportunidades, asegurando que todos los niños tengan acceso a una educación de calidad desde sus primeros años.


      h4(data-aos="fade-left").mb-4 Modalidades familiares


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1-2.png")
              .col-lg-7.order-lg-1
                h5 ¿A qué están orientadas?
                p Por otro lado, las modalidades familiares están orientadas a la educación y atención de los niños en el hogar, con un rol esencial de los padres o cuidadores en el proceso educativo. Estas modalidades, que incluyen actividades educativas estructuradas o informales y el apoyo de agentes educativos externos, buscan fortalecer el vínculo afectivo entre niños y cuidadores, así como promover un ambiente de aprendizaje flexible y adaptado a las características del contexto familiar. Esto resulta particularmente relevante en comunidades rurales o áreas con infraestructura educativa limitada, donde estas modalidades garantizan que los niños puedan recibir una educación adaptada a su realidad (MEN, 2014).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-2.png")
              .col-lg-7.order-lg-1
                h5 ¿Cuál es su objetivo?
                p El objetivo de las modalidades familiares es fortalecer el vínculo afectivo entre los niños y sus cuidadores, al tiempo que se promueve un ambiente de aprendizaje cercano, flexible y adaptado a las características y contextos familiares. Estas modalidades son especialmente importantes en comunidades rurales o en áreas donde la infraestructura educativa formal es limitada, pues permiten que los niños reciban educación desde el hogar, sin perder la oportunidad de desarrollar habilidades claves en su primera infancia.

      .bg-color-9.p-4.mb-5
        p.mb-0 Ambas modalidades, aunque diferentes en su enfoque, pueden complementarse. Por ejemplo, un niño puede participar en una modalidad institucional y recibir el apoyo educativo de su familia en el hogar. Este enfoque combinado permite una atención integral que responde tanto a las necesidades pedagógicas como emocionales del niño, promoviendo su desarrollo integral (MEN, 2014).

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Es importante señalar que, si bien estas modalidades pueden parecer separadas, en muchos contextos se busca que ambas se complementen. Por ejemplo, un niño puede asistir a un centro educativo de atención inicial en su comunidad (modalidad institucional) y, al mismo tiempo, recibir el apoyo y acompañamiento de su familia en el hogar (modalidad familiar). Esta combinación de modalidades puede ser especialmente efectiva, debido a que permite una atención integral que responde tanto a las necesidades pedagógicas como emocionales del niño.
          .bg-color-1.p-4.mb-0
            p.mb-0 Se invita a pensar que el verdadero desafío radica en cómo las modalidades institucionales y familiares pueden trabajar juntas para garantizar una educación inclusiva, equitativa y de calidad para todos los niños, independientemente de su contexto social o económico. Las políticas públicas deben reconocer y valorar tanto las modalidades institucionales como familiares, promoviendo su interconexión y fortaleciendo la capacidad de las familias y las instituciones para contribuir al bienestar y desarrollo de la primera infancia.
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema2/4.png").mt-4.mt-lg-0


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Adaptaciones a contextos sociales, culturales y geográficos

      p(data-aos="fade-left").mb-4 La adaptación de las modalidades educativas a los contextos sociales, culturales y geográficos es clave para garantizar una educación inclusiva y accesible que responda a las necesidades de todos los estudiantes.

      .bg-full-width.bg-color-10.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Adaptaciones a contextos sociales
              p.mb-4(data-aos="fade-right") En el PDF Adaptaciones a contextos sociales, se analizan las estrategias que permiten ajustar los procesos educativos según las particularidades de cada entorno, asegurando que las prácticas pedagógicas sean pertinentes, relevantes y respetuosas de la diversidad. Además, se exploran ejemplos concretos de cómo estas adaptaciones fortalecen la calidad educativa en distintas comunidades y regiones del país.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Adaptaciones a contextos sociales

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/5.png', alt='')


      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Principales actores y su rol en cada modalidad

      p(data-aos="fade-left").mb-4 En el contexto de las modalidades de atención en la educación inicial, los principales actores juegan un papel fundamental para asegurar que los niños reciban una educación de calidad y adecuada a sus necesidades. Estos actores incluyen tanto a los profesionales que trabajan directamente con los niños como a las familias y comunidades, quienes tienen un impacto decisivo en el desarrollo y aprendizaje de los más pequeños. A continuación, se desarrollarán los roles de los principales actores en cada modalidad, tanto en las modalidades institucionales como en las familiares.

      p(data-aos="fade-left").mb-4 En las modalidades institucionales, los principales actores son los siguientes:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1-3.png")
              .col-lg-7.order-lg-1
                h5 Educadores y profesionales de la primera infancia
                p Los educadores en las modalidades institucionales son los encargados de diseñar, implementar y evaluar las experiencias de aprendizaje para los niños. Su rol es clave, pues deben crear un ambiente de aprendizaje seguro, afectivo y estimulante, promoviendo el desarrollo integral de los niños. En su tarea, los educadores utilizan el currículo establecido y las bases pedagógicas del contexto nacional, pero siempre adaptándolas a las características individuales de los niños que atienden. En este sentido, se espera que los educadores estén capacitados no solo en la enseñanza, sino también en el acompañamiento emocional y en la identificación de necesidades especiales de cada niño (Ministerio de Educación Nacional, 2017).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-3.png")
              .col-lg-7.order-lg-1
                h5 Directores y coordinadores pedagógicos
                p Estos profesionales tienen la responsabilidad de liderar y coordinar el trabajo educativo dentro de la institución. Su rol incluye la gestión administrativa, el diseño de proyectos pedagógicos, la supervisión de los educadores y el establecimiento de vínculos con las familias y la comunidad. Los directores y coordinadores deben garantizar que el entorno educativo sea adecuado para el desarrollo de los niños y que los recursos disponibles se utilicen de manera efectiva para maximizar los resultados educativos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-3-3.png")
              .col-lg-7.order-lg-1
                h5 Auxiliares de educación y personal de apoyo
                p Los auxiliares desempeñan un rol de apoyo dentro del aula, ayudando en la organización y atención de los niños. Estos profesionales colaboran con los educadores, especialmente en el manejo de actividades lúdicas, el cuidado de la salud y el bienestar de los niños. Si bien su rol es más de apoyo que de enseñanza formal, su contribución es esencial para que los educadores puedan concentrarse en el desarrollo académico y emocional de los niños.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-4-3.png")
              .col-lg-7.order-lg-1
                h5 Familias y cuidadores
                p En las modalidades institucionales, las familias y cuidadores también son actores claves. Los vínculos con los padres deben ser estrechos para asegurar una coherencia entre lo que se enseña en la institución y lo que los niños experimentan en su hogar. Las reuniones periódicas, la participación en actividades escolares y la comunicación constante son fundamentales para fortalecer el aprendizaje y el bienestar de los niños.


      p(data-aos="fade-left").mb-5 En las modalidades familiares, los principales actores son principalmente los siguientes:


      .row.align-items-start.mb-5

        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0

        .col-lg-7

          AcordionA(tipo="b")
            .div(titulo="Padres y cuidadores")
              p Los padres o cuidadores son el pilar fundamental en las modalidades familiares, dado que son los responsables directos de proporcionar las experiencias educativas diarias a los niños en su hogar. En este contexto, el rol de los padres es mucho más flexible, pues pueden adaptar las actividades educativas, según las rutinas diarias, el contexto familiar y las necesidades particulares de cada niño. La formación y el acompañamiento que los padres reciban de profesionales en educación inicial son claves para que puedan desarrollar estrategias efectivas en el hogar. Los padres deben involucrarse activamente en el proceso educativo, brindando apoyo emocional, motivación y, cuando sea necesario, orientación profesional.
            .div(titulo="Agentes educativos comunitarios")
              p En algunos contextos, los agentes educativos comunitarios o guías pedagógicos desempeñan un papel importante dentro de las modalidades familiares. Estos profesionales visitan los hogares o trabajan directamente con los padres, ofreciendo apoyo pedagógico y recursos que les permitan crear ambientes de aprendizaje adecuados en sus casas. Los agentes educativos ayudan a los padres a comprender mejor las necesidades de los niños y a aplicar estrategias que favorezcan su desarrollo en el hogar, promoviendo la participación activa de la familia en el proceso educativo.
            .div(titulo="Comunidad y redes de apoyo")
              p En las modalidades familiares, la comunidad también juega un papel relevante. Las redes de apoyo, que incluyen otros familiares, vecinos y amigos, pueden contribuir al desarrollo educativo de los niños, ofreciendo un entorno enriquecido que complementa la enseñanza que reciben en el hogar. Además, las organizaciones comunitarias pueden facilitar recursos educativos, talleres o actividades que fortalezcan la capacidad de los padres para acompañar a sus hijos en su desarrollo educativo.

      .bg-color-9.p-4.mb-5
        p.mb-0 Es importante reconocer que, tanto en las modalidades institucionales como en las familiares, cada uno de estos actores tiene un rol interdependiente, lo que significa que el éxito del proceso educativo depende de cómo todos estos actores trabajen juntos, en colaboración y coordinación. Mientras que las modalidades institucionales cuentan con profesionales especializados que proporcionan un entorno estructurado, las modalidades familiares aprovechan la flexibilidad y el contexto cercano para asegurar que los niños tengan experiencias educativas que estén alineadas con su entorno cultural y familiar. Sin embargo, ambas modalidades requieren el compromiso activo de las familias y de la comunidad, así como la capacidad de los educadores para adaptarse a las necesidades de los niños en sus contextos específicos.

      p(data-aos="fade-left").mb-4 Al reflexionar sobre este tema, se invita a considerar la importancia de una colaboración continua entre los diferentes actores del proceso educativo, con el fin de ofrecer a los niños una experiencia integral y coherente que promueva su desarrollo en todos los aspectos posibles. De este modo, se asegura una educación inicial que no solo es inclusiva, sino también transformadora, preparando a los niños para afrontar los desafíos que les presentará la vida.

      .bg-full-width.bg-color-1
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ejemplos prácticos 
              p.mb-4(data-aos="fade-right") Los ejemplos prácticos de implementación en diferentes contextos permiten visualizar cómo las modalidades de atención en la educación inicial se adaptan a las realidades sociales, culturales y geográficas de las comunidades. En el PDF Ejemplos prácticos, se presentan experiencias significativas que muestran la aplicación de estas modalidades tanto en entornos institucionales como familiares, destacando estrategias innovadoras para garantizar una educación inclusiva, integral y contextualizada que favorezca el desarrollo pleno de los niños y niñas en sus primeros años de vida.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos prácticos

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.miprimerainfancia.com/modalidades-de-atencion/" target="_blank" rel="noopener noreferrer") Causil, R. D. (2020, enero 30). Modalidades de atencion a la primera infancia ICBF. MI PRIMERA INFANCIA. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=mhu37TxIWU0" target="_blank" rel="noopener noreferrer") Coalición Colombiana por el Derecho a la Educación. (19 mayo 2021). DERECHOS DESDE EL PRINCIPIO / Presentación Notas Técnicas de Primera Infancia en Colombia.
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=xGgwBlztzVM" target="_blank" rel="noopener noreferrer") CAF -banco de desarrollo de Latam y el Caribe-. (20 noviembre 2024). Webinar “Una apuesta a las modalidades flexibles en la atención integral a la primera infancia”.
  

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Orientaciones pedagógicas y técnicas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-left").mb-4 El estudio de este tema es un aspecto esencial para garantizar que cada niño reciba una educación adecuada y de calidad, sin importar su contexto social, cultural o geográfico. 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Orientaciones pedagógicas"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Principios pedagógicos para la primera infancia en Colombia

      p(data-aos="fade-left").mb-4 #[b Los principios pedagógicos para la primera infancia en Colombia], son un conjunto de directrices fundamentales que guían las prácticas educativas en esta etapa crucial del desarrollo infantil (MEN, 2014). Estos principios están diseñados para asegurar que los niños y niñas reciban una educación que no solo favorezca su aprendizaje, sino que también respete y potencie su desarrollo integral, atendiendo sus necesidades emocionales, sociales, cognitivas y físicas.

      p(data-aos="fade-left").mb-4 Conozcamos algunos principios fundamentales:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7.order-lg-1
                h5 Enfoque centrado en el niño
                p El cual establece que el niño debe ser el protagonista de su proceso de aprendizaje. Esto significa que el docente debe reconocer la individualidad de cada niño, sus intereses y su ritmo de desarrollo, proporcionando un ambiente que favorezca su curiosidad y su deseo de aprender. En la práctica, esto implica crear experiencias de aprendizaje que sean significativas, desafiantes y estimulantes, permitiendo que el niño explore, experimente y descubra el mundo a su propio ritmo (MEN, 2016).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7.order-lg-1
                h5 Respeto por la diversidad
                p En su libro sobre educación inclusiva en niños de educación inicial, Álvarez Gutiérrez, Hernández Jara y Acosta Luis (2021) destacan la importancia de reconocer y valorar las diferencias en los procesos educativos desde los primeros años de vida. Los autores enfatizan que, a través de un enfoque inclusivo, es crucial garantizar que todos los niños, independientemente de sus capacidades, contextos o condiciones, reciban una educación de calidad que respete y valore sus particularidades.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-3.png")
              .col-lg-7.order-lg-1
                h5 Aprendizaje a través del juego
                p En la primera infancia, el juego es una herramienta poderosa que permite a los niños desarrollar habilidades cognitivas, emocionales y sociales. A través del juego, los niños aprenden a resolver problemas, a interactuar con otros, a expresar sus emociones y a entender el mundo que los rodea. Además, el juego fomenta la creatividad y la imaginación, dos habilidades claves para el desarrollo integral del niño. Por tanto, los docentes deben crear espacios en los que los niños puedan jugar libremente, pero también introducir actividades lúdicas que fomenten aprendizajes específicos en áreas como el lenguaje, las matemáticas, las ciencias y las habilidades sociales (Guijarro, 2005).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-4.png")
              .col-lg-7.order-lg-1
                h5 Desarrollo de competencias socioemocionales
                p Durante esta etapa, los niños comienzan a formar su identidad y a desarrollar habilidades para interactuar de manera efectiva con otros. El docente debe promover la empatía, la cooperación, la resolución de conflictos y el respeto por los demás, creando un ambiente seguro y afectivo en el que los niños se sientan valorados y escuchados. Las emociones juegan un papel crucial en este proceso, por lo que los educadores deben ser capaces de identificar y manejar las emociones de los niños, favoreciendo su bienestar emocional y su autoestima (MEN, 2016).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-5.png")
              .col-lg-7.order-lg-1
                h5 Enfoque integral
                p Busca atender todas las dimensiones del desarrollo del niño. Esto implica no solo el desarrollo cognitivo, sino también el físico, emocional, social y cultural. La educación inicial no debe enfocarse únicamente en la adquisición de conocimientos académicos, sino también en el bienestar general del niño, favoreciendo su desarrollo en un entorno holístico que tenga en cuenta todas las áreas de su vida. Este enfoque integral también implica la participación activa de la familia y la comunidad en el proceso educativo, reconociendo que el desarrollo del niño es el resultado de una interacción constante entre el hogar, la escuela y el entorno social.

      p(data-aos="fade-left").mb-5 Los principios pedagógicos para la primera infancia en Colombia, son fundamentales para asegurar que todos los niños tengan acceso a una educación de calidad que favorezca su desarrollo integral. Estos principios proporcionan una base sólida sobre la cual los educadores pueden construir sus prácticas pedagógicas, garantizando que el proceso de enseñanza-aprendizaje sea inclusivo, respetuoso y adaptado a las necesidades de los niños. Además, invitan a los educadores a reflexionar continuamente sobre su rol en la creación de ambientes educativos que favorezcan el crecimiento y el bienestar de los niños, promoviendo su desarrollo en todas sus dimensiones.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Estrategias para fortalecer las prácticas pedagógicas y el rol docente


      p(data-aos="fade-left").mb-4 Las estrategias para fortalecer las prácticas pedagógicas y el rol docente en la educación infantil, son fundamentales para garantizar que los procesos de enseñanza-aprendizaje sean eficaces y significativos para los niños y niñas en su desarrollo integral. A medida que los docentes se enfrentan a un contexto diverso y cambiante, deben contar con herramientas y enfoques que les permitan adaptarse a las necesidades específicas de los estudiantes, promoviendo un aprendizaje inclusivo y de calidad.

      p(data-aos="fade-left").mb-4 Conozcamos algunas de estas importantes estrategias:

      .row.align-items-start.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/1.png", alt="").mb-4.mb-lg-0
        .col-lg-7
          AcordionA(tipo="b")
            .div(titulo="Formación continua")
              p La actualización constante en cuanto a los avances en el campo educativo, las nuevas metodologías y las investigaciones pedagógicas es crucial para mejorar las prácticas docentes. La formación no solo debe centrarse en la adquisición de nuevos conocimientos, sino también en el desarrollo de habilidades prácticas que permitan a los docentes aplicar los principios pedagógicos de manera efectiva en el aula. La capacitación continua también favorece la reflexión sobre la propia práctica docente, lo que permite a los educadores identificar áreas de mejora y desarrollar estrategias innovadoras para responder a los desafíos que enfrentan día a día (Sánchez,2023).
            .div(titulo="Trabajo colaborativo")
              p La educación inicial no puede ser vista como una responsabilidad exclusiva del docente, sino como un esfuerzo conjunto entre la escuela, la familia y el entorno social. El trabajo en equipo permite que los docentes cuenten con un apoyo adicional, tanto en la planificación como en la ejecución de las actividades pedagógicas. Además, la colaboración con los padres de familia es esencial para entender mejor las necesidades y características de los niños, y para crear una continuidad entre lo que se enseña en la escuela y lo que ocurre en el hogar. Este enfoque colaborativo también permite a los docentes compartir experiencias y buenas prácticas, enriqueciendo el proceso educativo de manera colectiva (Vaillant, 2016).
            .div(titulo="Estrategias pedagógicas específicas")
              p Es una de las más efectivas es el uso del aprendizaje basado en proyectos (ABP). Este enfoque pone al estudiante en el centro del proceso de aprendizaje, permitiéndole investigar y resolver problemas de manera práctica y contextualizada. En el contexto de la educación inicial, los proyectos pueden ser diseñados para ser altamente interactivos y estimulantes, permitiendo que los niños desarrollen habilidades cognitivas, sociales y emocionales mientras trabajan en equipo, investigan y presentan sus resultados. El ABP promueve el pensamiento crítico y la creatividad, dos habilidades esenciales para el desarrollo integral del niño (Zambrano, Hernández & Mendoza, 2022).

      .row.align-items-start.mb-5
        .col-lg-7
          AcordionA(tipo="b")
            .div(titulo="Estrategias de enseñanza diferenciada")
              p Son fundamentales para atender la diversidad en el aula. En la educación infantil, los niños tienen ritmos de aprendizaje diferentes, lo que requiere que los docentes utilicen métodos variados para atender a cada estudiante, según sus necesidades. La enseñanza diferenciada puede implicar la adaptación de los contenidos, las metodologías y los recursos, según el nivel de desarrollo y los intereses de cada niño. Por ejemplo, algunos niños pueden beneficiarse de actividades más visuales, mientras que otros pueden aprender mejor a través de la manipulación de materiales. La clave es ofrecer experiencias de aprendizaje que sean accesibles para todos, sin perder de vista los objetivos pedagógicos generales (Tomlinson, 2014).
            .div(titulo="Uso de la tecnología educativa")
              p Aunque en la educación inicial el contacto directo y las experiencias sensoriales son fundamentales, las herramientas tecnológicas pueden ser un complemento valioso para enriquecer el proceso de enseñanza. Desde aplicaciones que favorecen el desarrollo del lenguaje hasta plataformas interactivas que permiten a los niños explorar el mundo de manera visual y auditiva, la tecnología ofrece nuevas posibilidades para crear ambientes de aprendizaje dinámicos y estimulantes. No obstante, es importante que los docentes utilicen la tecnología de manera reflexiva y crítica, asegurando que las herramientas sean apropiadas para la edad de los niños y que se integren de manera coherente con los principios pedagógicos de la educación inicial (MEN, 2018).
            .div(titulo="Evaluación formativa")
              p Esta evaluación se centra en el proceso de aprendizaje, más que en los resultados finales, y permite a los docentes ajustar sus estrategias de enseñanza, de acuerdo con las necesidades emergentes de los estudiantes. La evaluación formativa promueve una retroalimentación continua y constructiva, ayudando a los niños a identificar sus fortalezas y áreas de mejora. En la educación inicial, la evaluación debe ser holística, considerando tanto el desarrollo cognitivo como el emocional y social del niño. Es fundamental que los docentes utilicen métodos de evaluación diversos, como la observación, las conversaciones informales y las producciones de los niños, para obtener una visión completa de su progreso (Saldaña,202).
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/2.png", alt="").mt-4.mt-lg-0

      p(data-aos="fade-left").mb-5 Las estrategias para fortalecer las prácticas pedagógicas y el rol docente en la educación inicial deben ser variadas, flexibles y centradas en las necesidades de los niños. Estas estrategias requieren una formación continua, un enfoque colaborativo, el uso de metodologías innovadoras como el ABP y la enseñanza diferenciada, el uso adecuado de la tecnología y una evaluación formativa que favorezca el desarrollo integral de los estudiantes. Reflexionar sobre estas estrategias y ponerlas en práctica con coherencia permitirá a los docentes no solo mejorar su labor educativa, sino también contribuir al desarrollo de niños más creativos, críticos y socialmente responsables.


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Aplicación de las orientaciones en entornos diversos: rurales, urbanos y vulnerables

      p(data-aos="fade-left").mb-4 La aplicación de las orientaciones pedagógicas en entornos diversos es un desafío clave para garantizar que los procesos educativos sean efectivos y pertinentes en cada contexto.


      .bg-full-width.bg-color-1
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Aplicación de las orientaciones en entornos diversos
              p.mb-4(data-aos="fade-right") En el PDF Aplicación de las orientaciones en entornos diversos, se analizan estrategias y ejemplos prácticos que muestran cómo los docentes pueden adaptar sus prácticas pedagógicas para responder a las necesidades específicas de los estudiantes, considerando las particularidades de su entorno social, cultural y geográfico. Estas adaptaciones promueven una educación inclusiva y equitativa que fortalece el desarrollo integral de los niños, sin importar las condiciones de su entorno.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Aplicación de las orientaciones en entornos diversos

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/3.png', alt='')


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.mineducacion.gov.co/portal/Educacion-inicial/Referentes-Tecnicos/341880:Referentes-Tecnicos" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional MEN (2014). Sentido de la educación inicial. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://www.scielo.cl/scielo.php?script=sci_arttext&pid=S2452-610X2022000100058&lng=es&tlng=es" target="_blank" rel="noopener noreferrer") Morales Saavedra, Soledad, Quintriqueo Millán, Segundo, Arias-Ortega, Katerin, & Zapata Zapata, Viviana. (2022). Vinculación familia-escuela-comunidad: una necesidad para la educación intercultural en infancia. CUHSO (Temuco), 32(1), 58-74.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=C7M6bJl_ryk" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (30 junio 2014). Referentes Técnicos para la Educación Inicial: Paso a paso.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=u0GuLy4sHZI" target="_blank" rel="noopener noreferrer") Cuentos con la profe Karen. (23 octubre 2024). Orientaciones pedagógicas en Educación inicial MEII 2024.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Orientaciones pedagógicas y técnicas',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué define las bases curriculares para la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La estructura organizativa de las escuelas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Los principios pedagógicos que guían el proceso educativo en los primeros años',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La duración de la jornada escolar',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La definición de los exámenes de evaluación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes es un componente clave de las bases curriculares en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Desarrollo cognitivo, emocional, físico y social',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Enfoque únicamente académico',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Eliminación de actividades lúdicas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducción de la jornada escolar',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el propósito de las orientaciones pedagógicas en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Establecer una metodología rígida para los docentes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Guiar las prácticas pedagógicas para una educación de calidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Limitar el uso de recursos educativos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Fomentar la competencia entre los estudiantes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué factor es clave al aplicar las orientaciones pedagógicas en contextos diversos como rurales o urbanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Utilizar siempre la misma metodología sin adaptaciones',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Limitar la educación a las áreas urbanas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Adaptar las prácticas pedagógicas a las características sociales y culturales del entorno',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Implementar una educación homogénea en todo el país',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué rol tiene el docente en la aplicación de las orientaciones pedagógicas en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ser solo un transmisor de conocimientos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Crear un ambiente de aprendizaje positivo y estimular el desarrollo integral de los niños',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Administrar exámenes y calificaciones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limitar el uso de estrategias de aprendizaje activas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>

export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Referentes técnicos de la educación inicial en Colombia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases curriculares para la educación inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué son las bases curriculares?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Componentes fundamentales de las bases curriculares',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Marco normativo y conceptual de las bases curriculares en Colombia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ejes y componentes claves de las bases curriculares',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Rol de las bases curriculares en el desarrollo integral del niño',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modalidades de atención en la educación inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y clasificación de las modalidades de atención',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Modalidades institucionales y familiares: características y objetivos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Adaptaciones a contextos sociales, culturales y geográficos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Principales actores y su rol en cada modalidad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Orientaciones pedagógicas y técnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Principios pedagógicos para la primera infancia en Colombia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Estrategias para fortalecer las prácticas pedagógicas y el rol docente',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Aplicación de las orientaciones en entornos diversos: rurales, urbanos y vulnerables',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pitluk, L. (Coord.), Dente, L. & Weinstein, E. (2019). La centralidad del juego en la educación inicial: diferentes modalidades lúdicas: ( ed.). Homo Sapiens Ediciones.',
      link: 'https://elibro.net/es/lc/librocom/titulos/129659',
    },
    {
      referencia:
        'Frade Rubio, L. (2015). Desafíos a superar para desarrollar competencias en el aula: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/librocom/titulos/114224',
    },
    {
      referencia:
        'Alfonso Toledo, V. A. (2023). El rol del docente en la etapa preescolar en el ejercicio de apreciación de la experiencia educativa. Sistematización de la práctica.',
      link: 'https://repository.javeriana.edu.co/handle/10554/65861',
    },
    {
      referencia:
        'Castro Florez, Maribel Cristina. (2019). Ambientes de aprendizaje. Sophia, 15(2), 40-54.',
      link: 'https://doi.org/10.18634/sophiaj.15v.2i.827',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (MEN). (2015). Lineamientos curriculares para la educación preescolar.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional [MEN]. (2017). Bases curriculares para la educación inicial y preescolar.',
      link:
        'https://siteal.iiep.unesco.org/sites/default/files/sit_accion_files/11146.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (MEN). (2019). Política educativa para la primera infancia.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Vygotsky, L. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.',
      link: 'https://www.jstor.org/stable/j.ctvjf9vz4',
    },
    {
      referencia:
        'Senlle, A. (2006). Calidad en los servicios educativos: ( ed.). Ediciones Díaz de Santos.',
      link: 'https://elibro.net/es/lc/librocom/titulos/53096',
    },
    {
      referencia:
        'Reyes Tejedor, M. Hervás Gómez, C. & López Catalán, L. (2021). Educación e igualdad de oportunidades: ( ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/librocom/titulos/211528',
    },
    {
      referencia:
        'Unicef Colombia. (2018). Modalidades de atención para la primera infancia en Colombia.',
      link: 'https://www.unicef.org/colombia',
    },
    {
      referencia:
        'Bruner, J. S. (2018). Desarrollo cognitivo y educación: ( ed.). Ediciones Morata, S. L.',
      link: 'https://elibro.net/es/lc/librocom/titulos/119515',
    },
    {
      referencia:
        'Álvarez Gutiérrez, M. L. Hernández Jara, P. V. & Acosta Luis, D. (2021). Educación inclusiva en niños de la educación inicial: ( ed.). Editorial Tecnocientífica Americana.',
      link: 'https://elibro.net/es/lc/librocom/titulos/183535',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
    {
      referencia:
        'Martínez-Restrepo, S., Pertuz, M. C., & Ramírez, J. M. (2016). La situación de la educación rural en Colombia, los desafíos del posconflicto y la transformación del campo.',
      link:
        'https://www.compartirpalabramaestra.org/publicaciones-e-investigaciones/otras-investigaciones/la-situacion-de-la-educacion-rural-en-colombia-los-desafios-del-posconflicto-y-la-transformaciadel',
    },
    {
      referencia:
        "Sánchez, D. (2023). Calidad educativa, calidez humana. El desafío de la formación docente (Bachelor's thesis).",
      link: 'https://repositorio.uta.edu.ar/handle/123456/128744',
    },
    {
      referencia:
        'Aprende, C. (2022). La educación rural, un gran desafío para Colombia.',
      link:
        'https://www.colombiaaprende.edu.co/agenda/tips-y-orientaciones/la-educacion-rural-un-gran-desafio-para-colombia',
    },
    {
      referencia:
        'San Martín Ulloa, Constanza, Rogers, Pedro, Troncoso, Catherine, & Rojas, Rocío. (2020). Camino a la Educación Inclusiva: Barreras y Facilitadores para las Culturas, Políticas y Prácticas desde la Voz Docente. Revista latinoamericana de educación inclusiva, 14(2), 191-211.',
      link: 'https://dx.doi.org/10.4067/s0718-73782020000200191',
    },
    {
      referencia:
        'Saldaña, J. J. C. (2022). La evaluación formativa en la educación. Comuni@cción: Revista de Investigación en Comunicación y Desarrollo, 13(2), 149-160.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8541781',
    },
    {
      referencia:
        'Guijarro, M. R. B. (2005). La educación de calidad para todos empieza en la primera infancia. Revista enfoques educacionales, 7(1), 11-33.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9116272',
    },
    {
      referencia:
        'Zambrano Briones, María Auxiliadora, Hernández Díaz, Adela, & Mendoza Bravo, Karina Luzdelia. (2022). El aprendizaje basado en proyectos como estrategia didáctica. Conrado, 18(84), 172-182. Epub 10 de febrero de 2022.',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442022000100172&lng=es&tlng=es',
    },
    {
      referencia:
        'Hernández, C., Rodríguez, C., & Dugarte, L. L. O. (2009). La Tecnología como Herramienta de apoyo al Docente en el Proceso de Enseñanza-Aprendizaje.',
      link:
        'http://bdigital.ula.ve/storage/pdftesis/pregrado/tde_arquivos/4/TDE-2011-02-04T00:31:28Z-1354/Publico/hernandezcarlos_rodriguezcarmen.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2015). Política pública educativa para la población.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2016). Guía de educación inclusiva: Principios y prácticas pedagógicas para entornos vulnerables.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2016). Lineamientos pedagógicos para la educación inicial en Colombia.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2016). Orientaciones curriculares para la educación básica y media.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2018). Guía para la integración de las tecnologías en la educación inicial.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2019). Lineamientos curriculares para la educación preescolar.',
      link: 'www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional MEN (2014), Modalidades y condiciones de calidad para la educación inicial.',
      link:
        'https://www.mineducacion.gov.co/portal/Educacion-inicial/Referentes-Tecnicos/341880/Referentes-Tecnicos',
    },
    {
      referencia:
        'Vaillant, D. (2016). Trabajo colaborativo y nuevos escenarios para el desarrollo profesional docente. Revista docencia, 60, 5-13.',
      link: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj',
    },
    {
      referencia:
        'Tomlinson, C. A. (2014). The differentiated classroom: Responding to the needs of all learners. ASCD.',
      link:
        'https://books.google.com/books/about/The_Differentiated_Classroom.html?id=CLigAwAAQBAJ&redir_esc=y',
    },
  ],
  glosario: [
    {
      termino: 'Bases Curriculares',
      significado:
        'conjunto de directrices, principios y orientaciones que guían la planificación y desarrollo de actividades educativas en la primera infancia. establecen los contenidos, competencias y enfoques pedagógicos para el desarrollo integral de los niños.',
    },
    {
      termino: 'Competencias',
      significado:
        'conjunto de conocimientos, habilidades, actitudes y valores que los estudiantes deben desarrollar para desempeñarse adecuadamente en diferentes ámbitos de la vida. En la educación inicial, se busca fortalecer competencias cognitivas, emocionales y sociales.',
    },
    {
      termino: 'Contexto Sociocultural',
      significado:
        'conjunto de elementos sociales, culturales, económicos y políticos que influyen en el desarrollo de los individuos y en las prácticas educativas. en la educación inicial, se considera esencial para adaptar las metodologías y contenidos pedagógicos.',
    },
    {
      termino: 'Desarrollo Cognitivo',
      significado:
        'proceso mediante el cual los niños adquieren y desarrollan habilidades de pensamiento, percepción, razonamiento y resolución de problemas. en la educación inicial, se promueve a través de experiencias que estimulan la curiosidad y el pensamiento crítico.',
    },
    {
      termino: 'Desarrollo Integral',
      significado:
        'enfoque educativo que busca atender todas las dimensiones del niño (física, emocional, cognitiva y social), promoviendo su bienestar y capacidad de adaptación en diversos contextos.',
    },
    {
      termino: 'Docente',
      significado:
        'profesional encargado de guiar y facilitar el proceso de enseñanza y aprendizaje. En la educación inicial, el docente desempeña un papel crucial en el desarrollo de los niños, promoviendo su bienestar y aprendizaje en un entorno seguro y estimulante.',
    },
    {
      termino: 'Educación Inclusiva',
      significado:
        'enfoque que promueve la participación activa de todos los estudiantes, incluyendo a aquellos con discapacidades, en el proceso educativo, brindando apoyo y adaptaciones necesarias para su aprendizaje y desarrollo.',
    },
    {
      termino: 'Educación Inicial',
      significado:
        'etapa educativa que abarca los primeros años de vida, desde el nacimiento hasta los seis años, y que tiene como objetivo favorecer el desarrollo físico, cognitivo, emocional y social de los niños.',
    },
    {
      termino: 'Evaluación Formativa',
      significado:
        'proceso continuo de evaluación que se realiza durante el proceso de enseñanza y aprendizaje, con el fin de identificar avances y áreas de mejora, y proporcionar retroalimentación para el desarrollo de los estudiantes.',
    },
    {
      termino: 'Inclusión Educativa',
      significado:
        'práctica educativa que busca garantizar que todos los estudiantes, independientemente de sus características o condiciones, tengan acceso a una educación de calidad, respetuosa de la diversidad y adaptada a sus necesidades.',
    },
    {
      termino: 'Marco Normativo',
      significado:
        'Conjunto de leyes, decretos y normativas que regulan la organización y funcionamiento del sistema educativo en un país. En la educación inicial, el marco normativo asegura que se respeten los derechos de los niños y se establezcan estándares de calidad.',
    },
    {
      termino: 'Modalidades Educativas',
      significado:
        'diferentes formas en que se organiza y ofrece la educación, adaptándose a las características del contexto social, cultural y geográfico de los estudiantes. en la educación inicial, incluyen modalidades como la escolarizada, no escolarizada y semiescolarizada.',
    },
    {
      termino: 'Niños y Niñas en Primera Infancia',
      significado:
        'grupo etario que comprende a los niños y niñas desde el nacimiento hasta los seis años. Esta etapa es crucial para el desarrollo cerebral y emocional, por lo que requiere una atención educativa especializada.',
    },
    {
      termino: 'Orientaciones Pedagógicas',
      significado:
        'conjunto de directrices que orientan el quehacer pedagógico, brindando pautas y estrategias para la implementación efectiva de las bases curriculares y el desarrollo integral de los niños en la educación inicial.',
    },
    {
      termino: 'Política Educativa',
      significado:
        'conjunto de normas, principios y estrategias que guían el sistema educativo de un país. en el contexto de la educación inicial, busca garantizar el acceso, la calidad y la equidad en la formación de los niños y niñas en sus primeros años.',
    },
  ],
}

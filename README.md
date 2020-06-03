# DIU20
Prácticas Diseño Interfaces de Usuario 2019-20 (Economía Colaborativa) 

Grupo: HORAPI  Curso: 2019/20 

Proyecto: Viamos!

Descripción: El objetivo del producto es que encuentres uno o varios acompañantes para un viaje que deseas realizar. Además, indicar las actividades que quieres hacer en dicho viaje servirá para aconsejarte de acompañantes con actividades similares o incluso intereses comunes.

Imagotipo:
<p align="center">
  <img width="300" src="P3/Logotipo/1x/imagotipo_positivo.png">
</p>

Miembros
 * :bust_in_silhouette:  Diego García Aurelio          :octocat: diegogaraur  
 * :bust_in_silhouette:  Miguel Ángel Mena Barrera     :octocat: MenaBarrera

----- 

Qué es economia colaborativa: Martínez-Polo, J. (2019). **El fenómeno del consumo colaborativo: del intercambio de bienes y servicios a la economía de las plataformas**, *Sphera Publica, 1*(19), 24-46. http://sphera.ucam.edu/index.php/sphera-01/article/view/363/14141434


# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

La aplicación que vamos a analizar es la de [Travello](https://travelloapp.com/), que es una red social para viajeros. El objetivo principal de la aplicación es conectar viajeros una vez llegan a su destino. Algunas de las funcionalidades de Travello son las siguientes:
- Descubrir otros viajeros cercanos.
- Compartir publicaciones estilo Facebook.
- Unirte a grupos de interés para interaccionar con otros usuarios.
- Descubrir ofertas de viaje.

En este caso de estudio vamos analizar la aplicación para generar nuevas ideas, evitar malas prácticas y aprender de las buenas. Después, realizaremos un rediseño u ofreceremos una nueva aplicación.


![Método UX](img/Persona.png) 1.b Persona
-----
Hemos escogido estas dos experiencias de usuario, ateniendonos a perfiles que entre sí son distintos. Uno de ellos (Kevin) esta mas relacionado con un estudiante como nosotros. La otra persona, es adulta y soltera, creemos que encaja dentro del perfil de los usuarios que puede tener la aplicación.

<p align="center">
  <img height="300" src="Mejoras/img/Kevin.PNG">
</p>
<p align="center">
  <img height="300" src="Mejoras/img/Alejandro.PNG">
</p>

Para ver las personas con más detalle pulsa sobre la propia imagen.

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

![JMKevin](Mejoras/KevinJ.PNG)
![JMAlejandro](Mejoras/AlejandroJ.PNG)


![Método UX](img/usabilityReview.png) 1.d Usability Review
----

- [Enlace al documento](P1/Usability%20scores.pdf)
- **Valoración final (numérica):** 62/100 - Moderate
- **Comentario sobre la valoración:** Comenzando por las cosas buenas de la aplicación, destacamos los formularios, que son bastantes completos y tienen los formatos correctos. Y por otro lado, la navegación está correcta, el usuario puede encontrar la aplicación correctamente y dentro de la aplicación es posible acceder a los distintas funcionalidades de manera rápida, quizás como pega pondríamos que tiene demasiados sitios. En cuanto a las cosas que destacamos como más pobres están el contenido, que flojea como información útil; Las búsquedas no se resuelven lo suficientemente bien y muchas de las funcionalidades acaban siendo demasiado complejas. El resto de aspectos no comentados, los vemos de forma moderada.


## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid
----

<p align="center">
  <img height="350" src="Mejoras/img/MallaReceptora.PNG">
</p>
  
### ¿Que planteas como "propuesta de valor" para un nuevo diseño de aplicación para economia colaborativa ?
Como propuesta de valor planteamos una nueva app para buscar compañeros de viajes. Hemos tomado como punto de partida Travello, donde compartes experiencias en la zona que has ido de vacaciones. Nuestra propuesta se basa en simplificar el diseño de la App, el cual era dificil de usar y de adaptarse. En nuestra aplicación, buscas un lugar, si te gusta lo podrás guardar y añadir las actividades que quieres realizar en dicho destino. Después, solo tendrás que buscar uno o varios acompañantes, la app te mostrará los usuarios más afines a tí según las actividades a realizar allí, km, entre otras cosas. 

En segundo luegar, hemos mejorado detalles como que una persona no puede hablar a otra sin una solicitud previa, de esta forma se evitan bots. Además, se puede reportar un usuario por si no cumpliera nuestras políticas, o bloquearlo si es necesario.

Por último, como el usuario es lo más importante para nosotros podrás contactar con nosotros desde la app.

![Método UX](img/Sitemap.png) 2.b Tasks & Sitemap 
-----

### User tasks
|                        | G1: Usuarios jóvenes | G2: Usuarios no casados | G3: Familias |
| ---------------------- | -------------------- | ----------------------- | ------------ |
| Buscar destino         | L/M                  | M                       | M            |
| Chatear                | H                    | H                       | L            |
| Editar perfil          | H                    | M                       | L            |
| Guardar destino        | M                    | L                       | M            |
| Ver destinos guardados | M                    | M                       | M            |
| Reportar/Bloquear      | M                    | M                       | L            |
| Contacto               | M                    | M                       | H            |
| Filtrar destinos       | H                    | M                       | M            |
| Compartir destino      | H                    | L                       | M            |
| Añadir actividades     | L                    | H                       | M            |
| Buscar acompañante     | M                    | H                       | L            |
| Filtrar acompañantes   | M                    | H                       | M            |
| Solicitar chat         | M                    | H                       | L            |


L:Low M:Moderate H:High

### Sitemap
<p align="center">
  <img src="Mejoras/img/Sitemap.png">
</p>

![Método UX](img/labelling.png) 2.c Labelling 
----

| Término                | Significado                                                  | Icono                                                        |
| ---------------------- | ------------------------------------------------------------ | :----------------------------------------------------------- |
| Busca tu próximo viaje | Es la página de inicio por defecto despues de iniciar sesión. Aquí puedes buscar el destino al que quieras viajar. | ![ic_busca](Mejoras/img/ic/ic_busca.PNG)![ic_buscar](Mejoras/img/ic/ic_buscar.PNG) |
| Destinos guardados     | Bóton donde puedes ver todos los destinos que has guardado en Viamos! | ![ic_guardados](Mejoras/img/ic/ic_guardados.PNG) |
| Guardar sitio          | Forma de marcar un sitio como favorito y acceder más rápido e incluso hacer ver a la gente que estás interesado en el destino. | ![ic_guardar](Mejoras/img/ic/ic_guardar.PNG) |
| Encuentra tu sitio     | Esta etiqueta la utilizamos en la página principal para mostrar los destinos más populares, con la finalidad de sugerir al usuario un destino. |                                                              |
| Chats                  | Lugar donde puedes ver la lista de contactos que han aceptado conversar contigo o viceversa. | ![ic_chats](Mejoras/img/ic/ic_chats.PNG) |
| Mi perfil              | Lugar donde puedes ver tus datos como una descripción, idiomas, aspectos relacionados con la personalidad e intereses. | ![ic_miperfil](Mejoras/img/ic/ic_miperfil.PNG) |
| Acompañante            | Usuario de la aplicación que busca otro/s compañeros de viaje. |                                                              |
| Actividades            | Actividades a realizar en un destino.                        |                                                              |
| Enviar                 | Dentro de la ventana de mensajes, enviar hace que el mensaje escrito en la entrada de texto se envie al otro usuario |                                                              |
| Solicitar chat         | Botón que envía una solicitud al otro usuario para iniciar una conversación. Si es aceptada se notificará y el usuario le aparecerá en Chats. | ![ic_solocitarchat](Mejoras/img/ic/ic_solocitarchat.PNG) |
| Contacto               | Página donde puedes encontrar las redes sociales de Viamos! y contactar con nosotros enviando un mensaje. |                                                              |
| Personas interesadas   | Hace referencia al número de personas que tiene guardado un destino. |                                                              |
| Mis actividades        | Lista de actividades que pretendo realizar en el destino indicado. De esta forma es más fácil buscar un acompañante afín a tí. |                                                              |


![Método UX](img/Wireframes.png) 2.d Wireframes
-----

![NavegacionBocetos](Mejoras/img/NavBocetos.png)

Puedes ver todos los bocetos pinchando [aquí](https://github.com/diegogaraur/DIU20/tree/master/P2#4-bocetos).

## Paso 3. Mi equipo UX-Case Study 


![Método UX](img/moodboard.png) 3.a ¿Como se cuenta un UX-Case Study?
-----

Nosotros como equipo estando en su lugar hubiésemos realizado un análisis bastante similar al de MuseApp. Dentro del apartado de análisis competitivo hubiésemos hecho aunque de manera superficial un usability review solo para no cometer los mismo errores que la competencia. También les falta la malla receptora para aportar sus ideas y propuestas de valor. Respecto a las cosas que no hemos utilizado nosotros, nos llama la atención la entrevista a personas, ya que se puede obtener un punto de vista más realista y quizás un Brainstorming para la generación de ideas para aportar en la propuesta de valor y mejorar las personas que inventamos.
Para conocer mejor el Ux-Case Study de MuseApp pulsa [aquí](P3/README.md#1-análisis-de-musemap).

![Método UX](img/landing-page.png)  3.b Imagotipo
----

Para la realización del imagotipo se ha usado Affinity Designer para realizar las formas del isotipo y Adobe Illustrator para finalizar todo el diseño del imagotipo (refinar el isotipo, añadir el logotipo y realizar las distintas versiones). El logotipo parte de la idea de Viajar + Vamos = Viamos, todo esto hace incapié en que está en primera persona del plural para que se destaque la inclusión, ya que la aplicación tiene como objetivo que una persona encuentre compañeros de viaje. Por otro lado, en el imagotipo se puede ver como se forma una flecha que señala a un punto o viéndolo de otra forma, como tres caminos de personas distintas que se acaban juntando para llegar a un mismo punto. El punto simboliza el destino al que se quiere llegar.

<p align="center">
  <img height="150" src="P3/Logotipo/2x/imagotipo_positivo_fondo@2x.png">
  <img height="150" src="P3/Logotipo/2x/isotipo1_positivo_fondo@2x.png">
</p>

<p align="center">
  <img height="150" src="P3/Logotipo/2x/imagotipo_negativo_fondo@2x.png">
  <img height="150" src="P3/Logotipo/2x/isotipo1_negativo_fondo@2x.png">
</p>

Estas imágenes estaría bien usarlas como foto de perfil de las redes sociales, pero para casos como el encabezado de Twitter sería mejor usar otro tipo de recursos ya que sino obtendríamos un perfil con el Logotipo/Imagotipo demasiado repetitivo.

![Método UX](img/guidelines.png) 3.c Guidelines
----

Las principales líneas de diseño tomadas para este proyecto vienen marcadas por la propuesta de Google: [Material Design](https://material.io), donde podemos comprobar que utilizamos varias de las directrices que google nos aporta en su página oficial.

- [Colores](P3/README.md#21-colores):
  - Color primario: #4A148C (Violeta 900 de la paleta de colores Material Design).
  - Variante Light: #7C43BD.
  - Color secundario: #F3E5F5 (Violeta 50 de la paleta de colores Material Design).
  
- [Tipografía](P3/README.md#22-tipografía): Nunito.

- [Iconografía](P3/README.md#23-iconografía): Material Icons Rounded.

- [Principales componentes](P3/README.md#24-componentes):
  Search bar, Outlined button, Image list, Bottom bar, FAB, Card list, Top bar, Text list, Extended FAB, Tabs, Users list, Message list y text field entre otros.

Para más información pulse los títulos de cada apartado.

![Método UX](img/mockup.png)  3.d Video
----

Para conocernos y conocer Viamos! mejor puedes ver el siguiente [vídeo](https://drive.google.com/file/d/1mYiTo1P7g_P5IthVuXjFCIaOzzB5WR5x/view?usp=sharing).


## Paso 4. Evaluación 

![Método UX](img/ABtesting.png) 4.a Casos asignados
----
### Caso 1: DIU1.NJA [repositiorio](https://github.com/EspGameplayer/DIU20)
Este grupo a escogido como aplicacion de estudio Showaround. Han detectado que su punto mas débil es la falta de funcionalidad si no estas registrado. Para solventar problemas de la aplicacion deciden crear lookaround mas orientada a la busqueda de guias turisticos. 

El UX Case Study en general es correcto, quizas habria que mejorar el logotipo y el analisis competitivo puesto que no han buscado mas aplicaciones alternativas que son competencia.

Como conclusión creemos que han hecho muy buen trabajo.

### Caso 2: DIU2.MACC [repositorio](https://github.com/MigueCc99/DIU20)
Este grupo, no deja claro que aplicación esta analizando, por lo cuál es difícil evaluar su trabajo. En general el UX case study es correcto, habría que clarificar que app se analiza. También seria recomendable crear un logo para la aplicación.

En general el trabajo es bueno, pero aún se podría mejorar si se le añaden pequeños detalles como el logo.

### Caso 3: DIU1.JoDa [repositorio](https://github.com/JoseMR6/DIU20)
El equipo JODA, ha elegido como aplicación de estudio couchsurfing. Un servicio que conecta a viajeros con personas que ofrecen un espacio en su casa para dormir. Tras su análisis han llegado a la conclusión de que el hecho de ser obligatorio el registro para empezar a usar el servicio acaaba por degradar la experiencia.

Para solventarlo han decidido crear TravelForce, la cual según ellos "resuelve el probelma que tenía con los usuarios nuevos".

El UX Case Study en rasgos generales es bueno, aunque hay cosas que se podrian mejorar, como unos bocetos con una definicion mejor o un sitemap mas desarrollado. Pero aún asi han hecho muy buen trabajo.

Puedes ver todas las valoraciones [aquí](https://github.com/diegogaraur/DIU20/tree/master/P4).

![Método UX](img/usability-testing.png) 4.b User Testing
----

### Experiencia 1
Kevin en el caso 1, buscría un guía para el viaje que quería realizar. Cuando llega al perfil de un guía, se fija en los comentarios del guía y concluye que alomejor no son fiables ya que los usuarios pueden comentar sin haber sin haber contratado al guía.

### Experiencia 2
Kevin en el caso 2, quiere buscar un piso para todo el año en Alicante, ya que el año que viene va a hacer un SICUE allí. Se registra en la aplicación y busca algún inmueble, pero no sabe si los inmuebles o sus arrendatarios están verificados. Por tanto, decide finalmente consultarlo en una inmobiliaria.

### Experiencia 3
Alejandro en el caso 3, buscaría un viaje a Sevilla para ir al parque de atracciones. Tras ingresar en la app de JoDa, se frustra porque no encuentra dónde escribir el destino. Prueba en pulsar una de las ofertas que le salen en la lista, pero no encuentra más información que la fecha de inicio y fin, y el precio. Cierra la aplciación disgustado y la borra de su teléfono.


![Método UX](img/Survey.png) 4.c Ranking 
----

Respecto a los casos valorados, el ranking es el siguiente:
1. Caso 1, 75/100
2. Caso 2, 66/100
3. Caso 3, 63/100

Han hecho un buen trabajo todos, pero con alguna cosa a mejorar. Creemos que todas han ido mejorando tras cada práctica.


## Conclusión final / Valoración de las prácticas

Al principio nos costó empezar con está metodología de diseño, pero a lo largo de las prácticas nos hemos ido adaptando y aprendiendo a hacer las cosas mejor. Respecto, a la realización de las prácticas en github, creemos que ha sido un acierto por el uso de una plantilla común para todas las prácticas y su formarto de presentación y colaboración.

## ![Método UX](img/iteration.png) Paso extra. Rediseño de práctica
Está claro que para que el diseño de una aplicación utilizando una metodología centrada en el usuario debemos de probar los diseños realizados con otros usuarios y otras experiencias con las que fueron diseñadas, para encontrar el punto en el que la aplicación funcione de forma correcta para la mayor cantidad de personas que sea posible. En este apartado se pretende mejorar aspectos tras las revisiones de los compañeros y los comentarios del profesor.

Enlaces de interés:
- [version beta del repositorio](https://github.com/diegogaraur/DIU20/tree/beta)
- [Checklist](https://github.com/diegogaraur/DIU20/blob/master/Mejoras/A1_DIU_Checklist-A1_HORAPI.pdf)
- [DIU1.HOOKAH review](https://github.com/diegogaraur/DIU20/blob/master/Mejoras/DIU1.HORAPI_review%20-%20DIU1.HOOKAH.pdf)
- [DIU2.JVG review](https://github.com/diegogaraur/DIU20/blob/master/Mejoras/DIU1.HORAPI_review%20-%20DIU2.JVG.pdf)
- [DIU3.Crescendum review](https://github.com/diegogaraur/DIU20/blob/master/Mejoras/DIU1.HORAPI_review%20-%20DIU3.Crescendum.pdf)

### Conclusiones del feedback
Tras revisar los informes de usabilidad y el checklist del profesor hemos llegado a las siguientes conclusiones:
Por un lado, el trabajo referente al primer y segundo paso son mejorables por falta de conclusiones o extensión del trabajo realizado. Por otro lado, el trabajo realizado en los pasos posteriores es más completo y definido, ya que se pueden observar las justificaciones necesarias de cada decisión en el diseño de la aplicación.

### Mejoras realizadas
Los cambios pueden observarse pinchando en el título de cada mejora.

- [Análisis competitivo](https://github.com/diegogaraur/DIU20#-1a-competitive-analysis): Se ha añadido el análisis competitivo que falta en la versión beta. De esta forma ahora se entiende mejor la aplicación escogida y su rediseño.
- [Personas](https://github.com/diegogaraur/DIU20#-1b-persona): Se ha detallado mejor las personas para que encajen como usuarios de aplicaciones de este tipo.
- [Usability Review](https://github.com/diegogaraur/DIU20#-1d-usability-review): Se ha escrito una conclusión resumen donde se destacan los errores y buenas prácticas de Travello.
- [Malla receptora y propuesta de valor](https://github.com/diegogaraur/DIU20#-2a-feedback-capture-grid): Hemos añadido nuevas ideas en la malla receptora y aportado nuevas propuestas de valor, tras las experiencias de las personas de los otros grupos para satisfacer sus necesidades.
- [Sitemap y taks](https://github.com/diegogaraur/DIU20#-2b-tasks--sitemap): Se ha modificado el sitemap con nombres más claros y añadimos una explicación del mismo y se han añadido todas las tareas que se pueden realizar en la aplicación.
- [Labelling](https://github.com/diegogaraur/DIU20#-2c-labelling): Se ha mejorado, haciéndolo más completo.
- [Bocetos](https://github.com/diegogaraur/DIU20#-2d-wireframes): Se ha añadido la navegabilidad entre los bocetos para que sean más entendibles y el boceto de Contacto.

### Conclusión acerca de las mejoras 

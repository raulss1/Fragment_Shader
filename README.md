Vídeo Shader 1: https://www.youtube.com/watch?v=uqjoDE-VyWs

Vídeo Shader 2: https://www.youtube.com/watch?v=GxXAoi2o_KA

Vídeo Shader 3: https://www.youtube.com/watch?v=ER8gnNLcbAI

Motivación: "La principal motivación para el desarrollo de estos shaders fue lograr una 
comprensión práctica y profunda de la pipeline gráfica, específicamente cómo las coordenadas 
espaciales se mapean a color (gl_FragColor) mediante el control de las uniforms (u_time, u_mouse). 
Mi enfoque se centró en la experimentación algorítmica para crear patrones dinámicos.

Proceso de Desarrollo: El desarrollo se basó en el método de prueba y error, construyendo efectos capa por capa. 
Inicialmente, se implementaron sistemas de coordenadas básicos (polar, cartesiano normalizado) para luego introducir 
funciones senoidales y fract() para generar ondas y patrones repetitivos. La interacción con el usuario y el tiempo 
se implementó multiplicando o sumando u_mouse y u_time a las coordenadas o al resultado final, permitiendo una fácil parametrización de los efectos."

**Shader 1**:
  El objetivo de este desarrollo fue transformar un patrón de diamante/romboide, generado inicialmente por el sistema de coordenadas axiales (inclinadas) y una distancia euclidiana estándar, en un patrón de teselado hexagonal perfecto. La corrección era necesaria porque   la fórmula de distancia cartesiana no respeta la geometría hexagonal de la celda de repetición, que es un romboide. Esto se logró implementando una métrica de distancia que respeta la geometría hexagonal.
  
  - Desarrollo del Patrón: Normalización y Escala: Las coordenadas de fragmento (gl_FragCoord.xy) se normalizan a [0, 1] y se escalan a 20 (st = st * 20.).
  - Sistema de Coordenadas: Se implementó el sistema de coordenadas axiales para mapear el plano cartesiano a una rejilla inclinada, lo cual es fundamental para el teselado hexagonal. La fórmula clave fue st.y = st.y + (st.x*0.5) (Para dar una cierta inclinación).
  - Onda de Patrón: El patrón interno se basa en la distancia del fragmento al centro de su celda float hd = max(v.x, v.x * .5 + v.y), siendo vec2 v = abs(st - floor(st) - .5). Se utilizó una función sinusoidal sobre esta distancia (sin(hd * 10. + u_time * 2.) * .5 +.5)     para generar anillos concéntricos animados que se expanden y contraen con el tiempo (u\_time).
  - Interacción/Color: El color final se define multiplicando el patrón monocromático por un vector de color parametrizado por u_mouse y u_time.

**Shader 2**:
  El objetivo de este shader es generar un patrón de bandas o anillos concéntricos que se expanden y contraen dinámicamente desde el centro de la pantalla. La interacción con el ratón (u_mouse) se utiliza para controlar la densidad y la tonalidad del patrón, mientras que     el tiempo (u_time) asegura una animación constante. Se jugó bastante con la interacción del ratón en el eje y, así que entre mayor sea el valor de este se irán consiguiendo patrones mas extraños cada vez, pero es interesante ver las cosas que suceden cuando vas subiendo    y bajando, además el u_time hace que parezca como si estuviera en moviemiento el patrón en cada momento.

  - Distancia al Centro (d):Se calcula la distancia euclidiana de cada fragmento al centro de la pantalla. Primero, las coordenadas de fragmento se normalizan utilizando la resolución (gl_FragCoord.xy / u_resolution.xy) para mapear la pantalla al rango [0, 1] Luego, la      función distance() mide la separación entre estas coordenadas normalizadas y el centro (vec2(0.5)).
  - Patrón Repetitivo: La distancia (d) se multiplica por 10 para aumentar la frecuencia y la cantidad de bandas visibles.
  - Modulación Temporal y de Control: El factor de frecuencia es modulado por la expresión (u_mouse.y * 0.4 + u_time * 0.1).
  - El resultado monocromático del patrón (f) se multiplica por un vector de color (vec3) que está totalmente parametrizado por el ratón:
    - Canal Rojo: Controlado por el producto de la posición X e Y del ratón (u_mouse.x * u_mouse.y).
    - Canal Verde: Controlado por la posición X del ratón (u_mouse.x).
    - Canal Azul: Controlado por la posición Y del ratón (u_mouse.y).

**Shader 3**:
  Este shader está diseñado para generar un patrón de segmentos o bandas radiales y dinámicas que giran y se distorsionan violentamente alrededor del centro de la pantalla. La implementación utiliza un sistema de coordenadas polares y una lógica condicional estricta       para que el comportamiento del patrón cambie dramáticamente en diferentes regiones del espacio, creando un efecto de vórtice oscilante.

  - Mapeo Cartesiano Centralizado: Las coordenadas del fragmento se remapean al rango [-1, 1] en X e Y, estableciendo el centro de la pantalla en el origen (0, 0).
  - Componente Radial (Distancia r):El radio ($) se calcula explícitamente usando la función length(st). Esta es la distancia de cada píxel al centro.Impacto: El valor de r se utiliza como divisor en el factor de distorsión (x). Esta división es la causa directa del         efecto vórtice, ya que magnifica enormemente la distorsión cerca del centro (donde r es pequeño) y la reduce hacia los bordes.
  - Lógica Condicional y Efectos de Animación: El patrón se genera usando una estructura condicional que aplica dos animaciones diferentes a los segmentos angulares alternantes definidos por el módulo:
    - Efecto 1 (Cíclico): El cos(x + u_time) se aplica a ciertos segmentos. La suma del tiempo (u_time) asegura que estas bandas se muevan cíclicamente y de manera suave.
    - Efecto 2 (Lineal): El sin(x + u_time), (**como recomendación pruebe a cambiar la suma por una multiplicación, verá un patrón completamente distinto**) se aplica a los segmentos restantes.


Fuentes:
  - Documentación propuesta por el profesor.
  - Ayuda de la inteligencia artificial con aspectos matemáticos.

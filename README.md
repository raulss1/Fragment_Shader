Motivación: "La principal motivación para el desarrollo de estos shaders fue lograr una 
comprensión práctica y profunda de la pipeline gráfica, específicamente cómo las coordenadas 
espaciales se mapean a color (gl_FragColor) mediante el control de las uniforms (u_time, u_mouse). 
Mi enfoque se centró en la experimentación algorítmica para crear patrones dinámicos.

Proceso de Desarrollo: El desarrollo se basó en el método de prueba y error, construyendo efectos capa por capa. 
Inicialmente, se implementaron sistemas de coordenadas básicos (polar, cartesiano normalizado) para luego introducir 
funciones senoidales y fract() para generar ondas y patrones repetitivos. La interacción con el usuario y el tiempo 
se implementó multiplicando o sumando u_mouse y u_time a las coordenadas o al resultado final, permitiendo una fácil parametrización de los efectos."

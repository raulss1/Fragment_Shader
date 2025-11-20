#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st=gl_FragCoord.xy/u_resolution.xy*20.;
    gl_FragColor=vec4(vec3(sin(distance(fract(vec2(st.x,st.y+st.x*.5)),vec2(.5))*10.+u_time*2.)*.5+.5)*vec3(.004*u_time,.02*u_mouse.x,.048*u_mouse.y),1.);
}
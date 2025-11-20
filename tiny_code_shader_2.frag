#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    float d = distance(gl_FragCoord.xy/u_resolution.xy, vec2(.5));
    float f = fract(d * 10. * (u_mouse.y*0.4 + u_time*0.1));
    
    gl_FragColor = vec4(vec3(f) * vec3(.00012 * u_mouse.x * u_mouse.y, .0024 * u_mouse.x, .0027 * u_mouse.y), 1.);
}
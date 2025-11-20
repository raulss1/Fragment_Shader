#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st = st * 20.;
    st.y += st.x * .5;
    
    vec2 v = abs(st - floor(st) - .5);
    float hd = max(v.x, v.x * .5 + v.y);
    
    gl_FragColor = vec4(vec3(sin(hd * 10. + u_time * 2.) * .5 + .5) * vec3(.004 * u_time, .02 * u_mouse.x, .048 * u_mouse.y), 1.);
}
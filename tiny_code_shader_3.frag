#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy * 2. - 1.;
    float r = length(st);
    float x = sin(u_time) * 3. / r;
    float b = mod(x * st.x, 2.) == 1. ? cos(x + u_time) : sin(x) * u_time;
    gl_FragColor = vec4(vec3(1. - b), 1.);
}
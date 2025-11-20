#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float scale = 20.;
    st = st*scale;
    
    float q = st.x;
    float r = st.y + (st.x * 0.5);
    
    float Q = floor(q);
    float R = floor(r);
    
    float fq = fract(q);
    float fr = fract(r);
    
    float d = distance(vec2(fq, fr), vec2(0.5));
    float hex_pattern = sin(d * 10.0 + u_time * 2.0) * 0.5 + 0.5;
    
    vec3 color = vec3(hex_pattern)*vec3(0.2*u_time*0.02, 0.4*u_mouse.x*0.05, 0.6*u_mouse.y*0.08);
    gl_FragColor = vec4(color,1.0);
}
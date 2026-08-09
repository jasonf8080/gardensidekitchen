import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Module-level registration — ES modules are singletons, so this runs exactly
// once no matter how many components import from here.
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

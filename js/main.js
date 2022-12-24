const tl = gsap.timeline({ default: { duration: 1.3 } })
const t2 = gsap.timeline({ default: { duration: 1, ease: "power1.out" } }).delay(0.5);

tl.fromTo('.cookie__container', { scale: 0 }, { scale: 1, ease: "elastic.out(1.5, 0.3)", duration: 1.3 })
t2.fromTo('.cover', { opacity: 0, x: -50, rotation: '-45deg', }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%')
t2.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')


t2.fromTo('.cover', { y: 0, rotation: '20deg' }, { y: -20, rotation: '10deg', yoyo: true, repeat: -1 })
t2.fromTo('#crumbs', { y: -20, x: -30, rotation: '-10deg' }, { y: 20, x: 10, rotation: '0deg', yoyo: true, repeat: -1 }, '<')

const button = document.querySelector('button');

button.addEventListener('click', () => {
  gsap.to('.cookie__container', { opacity: 0, y: 100, duration: 1, ease: "power1.out" })
})
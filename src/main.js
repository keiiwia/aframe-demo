// Main JavaScript entry point for A-Frame demo
import 'aframe'

// Wait for A-Frame to be ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('A-Frame Demo initialized')
  
  // You can add custom A-Frame components and logic here
  // Example: Add click handlers, custom animations, etc.
  
  // Add click event listeners to scene elements
  const scene = document.querySelector('a-scene')
  
  // Add click handler for the box
  const box = document.querySelector('a-box')
  if (box) {
    box.addEventListener('click', () => {
      console.log('Box clicked!')
      // Change color on click
      const colors = ['#4CC3D9', '#EF2D5E', '#FFC65D', '#7BC8A4']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      box.setAttribute('color', randomColor)
    })
  }
  
  // Add click handler for the sphere
  const sphere = document.querySelector('a-sphere')
  if (sphere) {
    sphere.addEventListener('click', () => {
      console.log('Sphere clicked!')
      // Scale animation
      sphere.setAttribute('animation', 'property: scale; to: 1.5 1.5 1.5; dur: 1000; easing: easeInOutQuad')
      setTimeout(() => {
        sphere.setAttribute('animation', 'property: scale; to: 1 1 1; dur: 1000; easing: easeInOutQuad')
      }, 1000)
    })
  }
  
  // Add click handler for the cylinder
  const cylinder = document.querySelector('a-cylinder')
  if (cylinder) {
    cylinder.addEventListener('click', () => {
      console.log('Cylinder clicked!')
      // Rotation animation
      cylinder.setAttribute('animation', 'property: rotation; to: 0 405 0; dur: 2000; easing: easeInOutQuad')
    })
  }
})

// Custom A-Frame component example
AFRAME.registerComponent('color-changer', {
  init: function () {
    this.el.addEventListener('click', () => {
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      this.el.setAttribute('color', randomColor)
    })
  }
})

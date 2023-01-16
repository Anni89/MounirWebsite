const affiche1=document.querySelector(".bg-1");
const affiche2=document.querySelector(".bg-2");
const affiche3=document.querySelector(".bg-3");
const affiche4=document.querySelector(".bg-4");


affiche1.addEventListener('mouseover',()=>{
affiche1.classList.add('large');
affiche2.classList.add('small');
affiche3.classList.add('small');
affiche4.classList.add('small');
})

affiche1.addEventListener('mouseleave',()=>{
    affiche1.classList.remove('large');
    affiche2.classList.remove('small');
    affiche3.classList.remove('small');
    affiche4.classList.remove ('small');
    })

affiche2.addEventListener('mouseover',()=>{
    affiche2.classList.add('large');
    affiche1.classList.add('small');
    affiche3.classList.add('small');
    affiche4.classList.add('small');
    })

    affiche2.addEventListener('mouseleave',()=>{
        affiche2.classList.remove('large');
        affiche1.classList.remove('small');
        affiche3.classList.remove('small');
        affiche4.classList.remove('small');
        })

affiche3.addEventListener('mouseover',()=>{
        affiche3.classList.add('large');
        affiche2.classList.add('small');
        affiche1.classList.add('small');
        affiche4.classList.add('small');
        })
affiche3.addEventListener('mouseleave',()=>{
            affiche3.classList.remove('large');
            affiche2.classList.remove('small');
            affiche1.classList.remove('small');
            affiche4.classList.remove('small');
            })

 affiche4.addEventListener('mouseover',()=>{
            affiche4.classList.add('large');
            affiche2.classList.add('small');
            affiche3.classList.add('small');
            affiche1.classList.add('small');
         })

         affiche4.addEventListener('mouseleave',()=>{
            affiche4.classList.remove('large');
            affiche2.classList.remove('small');
            affiche3.classList.remove('small');
            affiche1.classList.remove ('small');
         })



function setNavHeight(){
    const nav=document.querySelector('nav');
    const root=document.querySelector(':root');
    root.style.setProperty('--nav-height',`${nav.clientHeight}px`)
}


window.addEventListener('resize',setNavHeight);
window.addEventListener('DOMContentLoaded',setNavHeight);

console.log('root.style')






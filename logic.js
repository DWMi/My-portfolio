

const h4Text1 = document.querySelector(".picInfo1"),
    h4Text2 = document.querySelector(".picInfo2"),
    h4Text3 = document.querySelector(".picInfo3"),
    h4Text4 = document.querySelector(".picInfo4"),
    h4Text5 = document.querySelector(".picInfo5"),
    reactStore = document.querySelector('.react-store'),
    fetchApp = document.querySelector('.fetchAppWP'),
    wpSAD = document.querySelector('.wpSAD'),
    sneakers = document.querySelector('.sneakersWebshop'),
    techstore = document.querySelector('.techStore'),
    logo = document.querySelector('.logo'),
    myProject = document.querySelector('.myProject'),
    contact = document.querySelector('.contact'),
    header = document.querySelector('.header'),
    projectCon = document.querySelector('.projectCon'),
    socialCon = document.querySelector('.socialCon')


const h4appear1 =()=>{
    h4Text1.style.display ="inline"
}
const h4appear2 =()=>{
    h4Text2.style.display ="inline"
}
const h4appear3 =()=>{
    h4Text3.style.display ="inline"
}
const h4appear4 =()=>{
    h4Text4.style.display ="inline"
}
const h4appear5 =()=>{
    h4Text5.style.display ="inline"
}


const h4Hide1 =()=>{
    h4Text1.style.display ="none"
}
const h4Hide2 =()=>{
    h4Text2.style.display ="none"
}
const h4Hide3 =()=>{
    h4Text3.style.display ="none"
}
const h4Hide4 =()=>{
    h4Text4.style.display ="none"
}
const h4Hide5 =()=>{
    h4Text5.style.display ="none"
}

const logoDir =()=>{
    header.scrollIntoView(true)
    
}
const projectDir =()=>{
    projectCon.scrollIntoView(true)
   
}
const conactDir =()=>{
    socialCon.scrollIntoView(true)
}

reactStore.addEventListener("mouseenter",h4appear1)
fetchApp.addEventListener("mouseenter",h4appear2)
wpSAD.addEventListener("mouseenter",h4appear3)
sneakers.addEventListener("mouseenter",h4appear4)
techstore.addEventListener("mouseenter",h4appear5)

reactStore.addEventListener("mouseleave",h4Hide1)
fetchApp.addEventListener("mouseleave",h4Hide2)
wpSAD.addEventListener("mouseleave",h4Hide3)
sneakers.addEventListener("mouseleave",h4Hide4)
techstore.addEventListener("mouseleave",h4Hide5)

logo.addEventListener("click", logoDir)
myProject.addEventListener('click', projectDir)
contact.addEventListener('click', conactDir)

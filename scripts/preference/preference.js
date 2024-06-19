export const openMassage = params =>{
    return params.forEach(element => {
        element.addEventListener('mouseover',()=>{
            element.children[0].style.cssText = "transform:translateY(0px);transition: all 0.5s ease";
            element.children[1].style.cssText="transform:translateY(0px);transition: all 0.5s ease;visibility: visible;";
            
        })
    })
}
export const closeMassage = params =>{
    return params.forEach(element => {
        element.addEventListener('mouseout',()=>{
            element.children[0].style.cssText = "transform:translateY(70px);transition: all 0.2s ease";
            element.children[1].style.cssText="transform:translateY(70px);transition: all 0.2s ease;visibility: hidden;";
        
        })
    })
}
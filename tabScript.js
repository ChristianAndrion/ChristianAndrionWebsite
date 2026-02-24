const tabs = document.getElementsByClassName('tab')
const tabContents = document.getElementsByClassName('tabcontent')

// function openProject(evt, projectName){
//     var i, tabcontent, tablinks;
    
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++){
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++){
//         tablinks[i].className = tablinks[i].siblingclassName.replace(" active","");
//     }

//     document.getElementById(projectName).style.display = "block";
//     evt.currentTarget.className += " active";
    
// }

// document

// tabs.forEach(tab => {
//     tab.addEventListener('click', event => {
//         const target = document.querySelector(tab.dataset.tabTarget)
//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active')
//         })
//         tabs.forEach(tab => {
//             tab.classList.remove('active')
//         })
//         tab.classList.add('active')
//         target.classList.add('active')
//     })
// })



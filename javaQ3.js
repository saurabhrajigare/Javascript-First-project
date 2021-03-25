// 1)Change the text color

function changetextcolor(){
    var divDoc = document.getElementById('root')

    divDoc.addEventListener('mouseover', function(){
        divDoc.style.color ='red'
    })

    divDoc.addEventListener('mouseout', function(){
        divDoc.style.color ='black'
    })
}


// 2)change the background blue and text color white

var citem = document.getElementsByClassName('blue-white')
for(let i=0;i<citem.length;i++){
    citem[i].addEventListener("mouseover",function () {
        citem[i].style.backgroundColor = 'blue'
        citem[i].style.color = 'white'
    })
    citem[i].addEventListener('mouseout',function(){
        citem[i].style.backgroundColor = ''
        citem[i].style.color = 'black'
    })
}

// 2)Change font size

var parap = document.getElementsByTagName('p')

    parap[0].addEventListener('mouseover', function(){
    parap[0].style.fontSize='50px'
})

   
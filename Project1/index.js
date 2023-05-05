const btn = document.querySelector('#btn');
const blub = document.querySelector('#blub');

btn.addEventListener('click', function() {
    console.log(blub.src);

    if(blub.src.match('off')){
        blub.src = './on.jpg';
        btn.innerHTML = 'Turn OFF';
    }else{
        blub.src = './off.jpg';
        btn.innerHTML = 'Turn ON';
    }
   
})
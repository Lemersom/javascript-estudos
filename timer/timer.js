function cronometro_seg(){
    var seg = 120
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML = seg
        seg--

        if(seg < 0){
            clearInterval(timer)
        }
    }, 1000)
}

function cronometro_min_seg(){
    document.getElementById('comecar-timer').style.display = "none"
    var min = 2
    var seg = 0
    var timer = setInterval(function(){
        if(min != 0 && seg == 0){
            min--
            seg = 59
        }
        if(seg == 0){
            document.getElementById('timer').innerHTML = min + ':' + seg + '0'
        }
        else if(seg < 10){
            document.getElementById('timer').innerHTML = min + ':' + '0' + seg
        }
        else{
            document.getElementById('timer').innerHTML = min + ':' + seg
        } 
        
        seg--

        if(min == 0 && seg < 0){
            clearInterval(timer)
        }
    }, 1000)
}
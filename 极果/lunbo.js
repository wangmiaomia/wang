$(function(){
    $lis=$('ul.con li');
    $li=$('ul.con li').eq(0);
    $inner=$('.inner');
    time1=null,time2=null;
    index=1;
    $inner.scrollLeft($li.width());
    function autoplay(){
        time1=setInterval(function(){
            clearInterval(time2);
            index++;
            if(index>=$lis.toArray().length){
                index=1;
                $inner.scrollLeft('0');
            };
            step=0;
            maxstep=20;
            start=$inner.scrollLeft();
            end=($li.width())*index;
            everystep=(end-start) / maxstep;
            timed2=setInterval(function(){
                step++;
                if(step>=maxstep){
                    step=0;
                    clearInterval(time2);
                };
                start+=everystep;
                $inner.scrollLeft(start);
            },10)
        },1000)
    }
    autoplay();
})
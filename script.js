m = 0;
var y;
function start()
{
    y = setInterval(run,100);

    function run()
    {
        if(m == 1200)
        {
            m = 0;
            //clearInterval(y);
           
        }
        else
        {
            m+=20;
            var x = document.getElementById("car");
            x.style.marginLeft = m+'px';
        }
    }
}
function stop()
{
    clearInterval(y);
}
function restart(){
    m=0;
}
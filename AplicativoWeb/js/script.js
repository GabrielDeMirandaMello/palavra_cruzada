function verificar_eprom(){
    var e = document.getElementById("e_eprom").value;
    var p = document.getElementById("p_eprom").value;
    var r = document.getElementById("r_eprom").value;
    var o = document.getElementById("o_eprom").value;
    var m = document.getElementById("m_eprom").value;

    if (e == "e" && p == "p" && r == "r" && o == "o" && m == "m"){
        document.getElementById("e_eprom").style="color:green"
        document.getElementById("p_eprom").style="color:green"
        document.getElementById("r_eprom").style="color:green"
        document.getElementById("o_eprom").style="color:green"
        document.getElementById("m_eprom").style="color:green"
    } else {
        document.getElementById("e_eprom").style="color:red"
        document.getElementById("p_eprom").style="color:red"
        document.getElementById("r_eprom").style="color:red"
        document.getElementById("o_eprom").style="color:red"
        document.getElementById("m_eprom").style="color:red"
    }

    console.log(`${e} ${p} ${r} ${o} ${m}`)
}
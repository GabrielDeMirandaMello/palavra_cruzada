// 1
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

// 2
function verificar_memoria_massa(){
    var m1 = document.getElementById("m_eprom").value;
    var e1 = document.getElementById("e_memoria_massa").value;
    var m2 = document.getElementById("m_memoria_massa").value;
    var o = document.getElementById("o_memoria_massa").value;
    var r = document.getElementById("r_memoria_massa").value;
    var i = document.getElementById("i_memoria_massa").value;
    var a1 = document.getElementById("a_memoria_massa").value;
    var d = document.getElementById("d_memoria_massa").value;
    var e2 = document.getElementById("e2_memoria_massa").value;
    var m3 = document.getElementById("m3_memoria_massa").value;
    var a2 = document.getElementById("a2_memoria_massa").value;
    var s1 = document.getElementById("s_memoria_massa").value;
    var s2 = document.getElementById("s3_memoria_massa").value;
    var a3 = document.getElementById("a3_memoria_massa").value;

    if (m1 == "m" && e1 == "e" && m2 == "m" && 
        o == "o" && r == "r" && i == "i" && 
        a1 == "a" && d == "d" && e2 == "e" && 
        m3 == "m" && a2 == "a" && s1 == "s" && 
        s2 == "s" && a3 == "a"){
        
            var m1 = document.getElementById("m_eprom").style = "color: green"
            var e1 = document.getElementById("e_memoria_massa").style = "color: green"
            var m2 = document.getElementById("m_memoria_massa").style = "color: green"
            var o = document.getElementById("o_memoria_massa").style = "color: green"
            var r = document.getElementById("r_memoria_massa").style = "color: green"
            var i = document.getElementById("i_memoria_massa").style = "color: green"
            var a1 = document.getElementById("a_memoria_massa").style = "color: green"
            var d = document.getElementById("d_memoria_massa").style = "color: green"
            var e2 = document.getElementById("e2_memoria_massa").style = "color: green"
            var m3 = document.getElementById("m3_memoria_massa").style = "color: green"
            var a2 = document.getElementById("a2_memoria_massa").style = "color: green"
            var s1 = document.getElementById("s_memoria_massa").style = "color: green"
            var s2 = document.getElementById("s3_memoria_massa").style = "color: green"
            var a3 = document.getElementById("a3_memoria_massa").style = "color: green"
    } else {
        var m1 = document.getElementById("m_eprom").style = "color: red"
        var e1 = document.getElementById("e_memoria_massa").style = "color: red"
        var m2 = document.getElementById("m_memoria_massa").style = "color: red"
        var o = document.getElementById("o_memoria_massa").style = "color: red"
        var r = document.getElementById("r_memoria_massa").style = "color: red"
        var i = document.getElementById("i_memoria_massa").style = "color: red"
        var a1 = document.getElementById("a_memoria_massa").style = "color: red"
        var d = document.getElementById("d_memoria_massa").style = "color: red"
        var e2 = document.getElementById("e_memoria_massa").style = "color: red"
        var m3 = document.getElementById("m_memoria_massa").style = "color: red"
        var a2 = document.getElementById("a_memoria_massa").style = "color: red"
        var s1 = document.getElementById("s_memoria_massa").style = "color: red"
        var s2 = document.getElementById("s_memoria_massa").style = "color: red"
        var a3 = document.getElementById("a_memoria_massa").style = "color: red"
    }
}

// 3
function verificar_flash(){
    var f = document.getElementById("f_flash").value;
    var l = document.getElementById("l_flash").value;
    var a = document.getElementById("a_flash").value;
    var s = document.getElementById("s_flash").value;
    var h = document.getElementById("h_flash").value;

    if (f == "f" && l == "l" && a == "a" && s == "s" && h == "h"){
        document.getElementById("f_flash").style="color:green"
        document.getElementById("l_flash").style="color:green"
        document.getElementById("a_flash").style="color:green"
        document.getElementById("s_flash").style="color:green"
        document.getElementById("h_flash").style="color:green"
    } else {
        document.getElementById("f_flash").style="color:red"
        document.getElementById("l_flash").style="color:red"
        document.getElementById("a_flash").style="color:red"
        document.getElementById("s_flash").style="color:red"
        document.getElementById("h_flash").style="color:red"
    }
}

// 4
function verificar_adressbus(){
    var a = document.getElementById("a_flash").value;
    var d = document.getElementById("d_adressbus").value;
    var r = document.getElementById("r_adressbus").value;
    var e = document.getElementById("e_adressbus").value;
    var s1 = document.getElementById("s1_adressbus").value;
    var s2 = document.getElementById("s2_adressbus").value;
    var b = document.getElementById("b_adressbus").value;
    var u = document.getElementById("u_adressbus").value;
    var s3 = document.getElementById("s3_adressbus").value;

    if (a == "a" && d == "d" && e == "e" && s1 == "s" && s2 == "s" && b == "b" && u == "u" && s3 == "s"){
        document.getElementById("a_flash").style="color:green"
        document.getElementById("d_adressbus").style="color:green"
        document.getElementById("r_adressbus").style="color:green"
        document.getElementById("e_adressbus").style="color:green"
        document.getElementById("s1_adressbus").style="color:green"
        document.getElementById("s2_adressbus").style="color:green"
        document.getElementById("b_adressbus").style="color:green"
        document.getElementById("u_adressbus").style="color:green"
        document.getElementById("s3_adressbus").style="color:green"
    } else {
        document.getElementById("a_flash").style="color:red"
        document.getElementById("d_adressbus").style="color:red"
        document.getElementById("e_adressbus").style="color:red"
        document.getElementById("s_adressbus").style="color:red"
        document.getElementById("s2_adressbus").style="color:green"
        document.getElementById("b_adressbus").style="color:red"
        document.getElementById("u_adressbus").style="color:red"
    }
    
    console.log(`${a} ${d} ${r} ${e} ${s1} ${s2} ${b} ${u} ${s3}`)
}

// 5
function verificar_amd(){
    var d =  document.getElementById("d_amd").value;
    var m =  document.getElementById("m_amd").value;
    var a =  document.getElementById("a_amd").value;

    if (d == "d" && m == "m" && a == "a"){
        document.getElementById("d_amd").style="color:green"
        document.getElementById("m_amd").style="color:green"
        document.getElementById("a_amd").style="color:green"
    } else {
        document.getElementById("d_amd").style="color:red"
        document.getElementById("m_amd").style="color:red"
        document.getElementById("a_amd").style="color:red"
    }
}

// 6 
function verificar_databus(){
    var d = document.getElementById("d_memoria_massa").value;
    var a1 = document.getElementById("a_databus").value;
    var t = document.getElementById("t_databus").value;
    var a2 = document.getElementById("a_amd").value;
    var b = document.getElementById("b_databus").value;
    var u = document.getElementById("u_databus").value;
    var s = document.getElementById("s2_adressbus").value;

    if (d == "d" && a1 == "a" && t == "t" &&
        a2 == "a" && b == "b" && u == "u" && s == "s"){
            document.getElementById("d_memoria_massa").style="color:green"
            document.getElementById("a_databus").style="color:green"
            document.getElementById("t_databus").style="color:green"
            document.getElementById("a_amd").style="color:green"
            document.getElementById("b_databus").style="color:green"
            document.getElementById("u_databus").style="color:green"
            document.getElementById("s2_adressbus").style="color:green"
    } else {
        document.getElementById("d_memoria_massa").style="color:red"
        document.getElementById("a_databus").style="color:red"
        document.getElementById("t_databus").style="color:red"
        document.getElementById("a_amd").style="color:red"
        document.getElementById("b_databus").style="color:red"
        document.getElementById("u_databus").style="color:red"
        document.getElementById("s2_adressbus").style="color:red"
    }
    console.log(`${d} ${a1} ${t} ${a2} ${b} ${u} ${s}`)
}

// 7
function verificar_isete(){
    var i = document.getElementById("i_isete").value;
    var s = document.getElementById("s_isete").value;
    var e1 = document.getElementById("e1_isete").value;
    var t = document.getElementById("t_isete").value;
    var e2 = document.getElementById("e2_isete").value;

    if (i == "i" && s == "s" && e1 == "e" && t == "t" && e2 == "e"){
        document.getElementById("i_isete").style = "color:green"
        document.getElementById("s_isete").style = "color:green"
        document.getElementById("e1_isete").style = "color:green"
        document.getElementById("t_isete").style = "color:green"
        document.getElementById("e2_isete").style = "color:green"
    } else {
        document.getElementById("i_isete").style = "color:red"
        document.getElementById("s_isete").style = "color:red"
        document.getElementById("e1_isete").style = "color:red"
        document.getElementById("t_isete").style = "color:red"
        document.getElementById("e2_isete").style = "color:red"
    }

}

// 8
function verificar_cs(){

}

// 9
function verificar_icinco(){

}

// 10
function verificar_ula(){

}

// 11
function verificar_registradores(){

}

// 12 
function verificar_ram(){

}

// 13
function verificar_cpu(){

}

// 14
function verificar_rom(){

}
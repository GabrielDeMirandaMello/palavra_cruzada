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
        document.getElementById("e_eprom").style="color:black"
        document.getElementById("p_eprom").style="color:black"
        document.getElementById("r_eprom").style="color:black"
        document.getElementById("o_eprom").style="color:black"
        document.getElementById("m_eprom").style="color:black"
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
        var m1 = document.getElementById("m_eprom").style = "color: black"
        var e1 = document.getElementById("e_memoria_massa").style = "color: black"
        var m2 = document.getElementById("m_memoria_massa").style = "color: black"
        var o = document.getElementById("o_memoria_massa").style = "color: black"
        var r = document.getElementById("r_memoria_massa").style = "color: black"
        var i = document.getElementById("i_memoria_massa").style = "color: black"
        var a1 = document.getElementById("a_memoria_massa").style = "color: black"
        var d = document.getElementById("d_memoria_massa").style = "color: black"
        var e2 = document.getElementById("e_memoria_massa").style = "color: black"
        var m3 = document.getElementById("m_memoria_massa").style = "color: black"
        var a2 = document.getElementById("a_memoria_massa").style = "color: black"
        var s1 = document.getElementById("s_memoria_massa").style = "color: black"
        var s2 = document.getElementById("s_memoria_massa").style = "color: black"
        var a3 = document.getElementById("a_memoria_massa").style = "color: black"
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
        document.getElementById("f_flash").style="color:black"
        document.getElementById("l_flash").style="color:black"
        document.getElementById("a_flash").style="color:black"
        document.getElementById("s_flash").style="color:black"
        document.getElementById("h_flash").style="color:black"
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
        document.getElementById("a_flash").style="color:black"
        document.getElementById("d_adressbus").style="color:black"
        document.getElementById("e_adressbus").style="color:black"
        document.getElementById("s_adressbus").style="color:black"
        document.getElementById("s2_adressbus").style="color:green"
        document.getElementById("b_adressbus").style="color:black"
        document.getElementById("u_adressbus").style="color:black"
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
        document.getElementById("d_amd").style="color:black"
        document.getElementById("m_amd").style="color:black"
        document.getElementById("a_amd").style="color:black"
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
        document.getElementById("d_memoria_massa").style="color:black"
        document.getElementById("a_databus").style="color:black"
        document.getElementById("t_databus").style="color:black"
        document.getElementById("a_amd").style="color:black"
        document.getElementById("b_databus").style="color:black"
        document.getElementById("u_databus").style="color:black"
        document.getElementById("s2_adressbus").style="color:black"
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
        document.getElementById("i_isete").style = "color:black"
        document.getElementById("s_isete").style = "color:black"
        document.getElementById("e1_isete").style = "color:black"
        document.getElementById("t_isete").style = "color:black"
        document.getElementById("e2_isete").style = "color:black"
    }

}

// 8
function verificar_cs(){
    var c = document.getElementById("c_cs").value

    if (c == "c") {
        document.getElementById("c_cs").style = "color:green"
    }
    else {
        document.getElementById("c_cs").style = "color:black"
    }
}

// 9
function verificar_icinco(){
    var i1 = document.getElementById("i1_icinco").value
    var c1 = document.getElementById("c1_icinco").value
    var i2 = document.getElementById("i2_icinco").value
    var n = document.getElementById("n_icinco").value
    var c2 = document.getElementById("c2_icinco").value
    var o = document.getElementById("o_icinco").value

    if (i1 == "i" && c1 == "c" && i2 == "i" && n == "n" && c2 == "c" && o == "o") {
        document.getElementById("i1_icinco").style = "color:green"
        document.getElementById("c1_icinco").style = "color:green"
        document.getElementById("i2_icinco").style = "color:green"
        document.getElementById("n_icinco").style = "color:green"
        document.getElementById("c2_icinco").style = "color:green"
        document.getElementById("o_icinco").style = "color:green"
    }
    else {
        document.getElementById("i1_icinco").style = "color:black"
        document.getElementById("c1_icinco").style = "color:black"
        document.getElementById("i2_icinco").style = "color:black"
        document.getElementById("n_icinco").style = "color:black"
        document.getElementById("c2_icinco").style = "color:black"
        document.getElementById("o_icinco").style = "color:black"
    }
}

// 10
function verificar_ula(){
    var u = document.getElementById("u_ula").value
    var l = document.getElementById("l_ula").value
    var a = document.getElementById("a_ula").value

    if (u == "u" && l == "l" && a == "a") {
        document.getElementById("u_ula").style = "color:green"
        document.getElementById("l_ula").style = "color:green"
        document.getElementById("a_ula").style = "color:green"
    }
    else {
        document.getElementById("u_ula").style = "color:black"
        document.getElementById("l_ula").style = "color:black"
        document.getElementById("a_ula").style = "color:black"
    }
}

// 11
function verificar_registradores(){
    var r1 = document.getElementById("r1_registradores").value
    var g = document.getElementById("g_registradores").value
    var s1 = document.getElementById("s1_registradores").value
    var t = document.getElementById("t_registradores").value
    var r2 = document.getElementById("r2_registradores").value
    var d = document.getElementById("d_registradores").value
    var o = document.getElementById("o_registradores").value
    var r3 = document.getElementById("r3_registradores").value
    var e = document.getElementById("e_registradores").value

    if (r1 == "r" && g == "g" && s1 == "s" && t == "t" && r2 == "r" && d == "d" && o == "o" && r3 == "r" && e == "e") {
        document.getElementById("r1_registradores").style = "color:green"
        document.getElementById("g_registradores").style = "color:green"
        document.getElementById("s1_registradores").style = "color:green"
        document.getElementById("t_registradores").style = "color:green"
        document.getElementById("r2_registradores").style = "color:green"
        document.getElementById("d_registradores").style = "color:green"
        document.getElementById("o_registradores").style = "color:green"
        document.getElementById("r3_registradores").style = "color:green"
        document.getElementById("e_registradores").style = "color:green"
    }
    else {
        document.getElementById("r1_registradores").style = "color:black"
        document.getElementById("g_registradores").style = "color:black"
        document.getElementById("s1_registradores").style = "color:black"
        document.getElementById("t_registradores").style = "color:black"
        document.getElementById("r2_registradores").style = "color:black"
        document.getElementById("d_registradores").style = "color:black"
        document.getElementById("o_registradores").style = "color:black"
        document.getElementById("r3_registradores").style = "color:black"
        document.getElementById("e_registradores").style = "color:black"
    }
}

// 12 
function verificar_ram(){
    var a = document.getElementById("a_ram").value
    var m = document.getElementById("m_ram").value

    if(a == "a" && m == "m") {
        document.getElementById("a_ram").style = "color:green"
        document.getElementById("m_ram").style = "color:green"
    }
    else {
        document.getElementById("a_ram").style = "color:black"
        document.getElementById("m_ram").style = "color:black"
    }
}

// 13
function verificar_cpu(){
    p = document.getElementById("p_cpu").value
    u = document.getElementById("u_cpu").value

    if(p == "p" && u == "u") {
        document.getElementById("p_cpu").style = "color:green"
        document.getElementById("u_cpu").style = "color:green"
    }
    else {
        document.getElementById("p_cpu").style = "color:black"
        document.getElementById("u_cpu").style = "color:black"
    }
}

// 14
function verificar_rom(){
    var r = document.getElementById("r_rom").value
    var m = document.getElementById("m_rom").value

    if (r == "r" && m == "m") {
        document.getElementById("r_rom").style = "color:green"
        document.getElementById("m_rom").style = "color:green"
    }
    else {
        document.getElementById("r_rom").style = "color:black"
        document.getElementById("m_rom").style = "color:black"
    }
}
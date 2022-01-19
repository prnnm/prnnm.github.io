    const said = e => {
        const value = e.value;
        e.value = value.replace(/\D/g, '');
    }

    function save() {
        var klv = document.getElementById("inp1").value;
        var klv1 = document.getElementById("inp2").value;
        var klv2 = document.getElementById("inp3").value;
        var klv3 = document.getElementById("inp4").value;
        var klv4 = document.getElementById("inp5").value;

        var tv = document.getElementById("tv").innerHTML;
        var tv1 = document.getElementById("tv1").innerHTML;
        var tv2 = document.getElementById("tv2").innerHTML;
        var tv3 = document.getElementById("tv3").innerHTML;
        var tv4 = document.getElementById("tv4").innerHTML;
        
        var a = pvi * klv;
        var b = vs * klv;
        var c = cna * klv;

        var a1 = pvi1 * klv1;
        var b1 = vs1 * klv1;
        var c1 = cna1 * klv1;

        var a2 = pvi2 * klv2;
        var b2 = vs2 * klv2;
        var c2 = cna2 * klv2;

        var a3 = pvi3 * klv3;
        var b3 = vs3 * klv3;
        var c3 = cna3 * klv3;

        var a4 = pvi4 * klv4;
        var b4 = vs4 * klv4;
        var c4 = cna4 * klv4;

        var a5 = a + a1 + a2 + a3 + a4;
        var b5 = b + b1 + b2 + b3 + b4;
        var c5 = c + c1 + c2 + c3 + c4;

        var td1 = document.getElementById("td1").value = a5;
        var td2 = document.getElementById("td2").value = b5;
        var td3 = document.getElementById("td3").value = c5;
        var tov = document.getElementById("tov").value = [tv, tv1, tv2, tv3, tv4];
        var ikl = document.getElementById("ikl").value = [klv, klv1, klv2, klv3, klv4];
    }

    var pvi = 55000;
    var vs = 1900;
    var cna = 99.54;

    var pvi1 = 7500;
    var vs1 = 0.265;
    var cna1 = 17.81;

    var pvi2 = 1500;
    var vs2 = 0.700;
    var cna2 = 14.50;

    var pvi3 = 9000;
    var vs3 = 0.120;
    var cna3 = 19.12;

    var pvi4 = 3000
    var vs4 = 1.2;
    var cna4 = 22.58;

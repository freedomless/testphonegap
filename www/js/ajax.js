$(document).ready(function() {
    let i = 0;

    getDataFromServer();
    let myInterval = setInterval(getDataFromServer, 3000);

    function getDataFromServer () {
        $.ajax({
            url: "https://maverickcardio.com/test/index.php"
        }).done(function(dataFromServer) {
            updateElectricData(dataFromServer);
        }).fail(function () {
            $("#debug").html(dataFromServer);
        });
    }

    // Vibrate for 3 seconds
    // navigator.vibrate(1000);

    function updateElectricData (dataFromServer) {
        let barPurcentage;

        // for Voltage
        $("#ursLabel").html("Urn:" + dataFromServer[6] / 10 + " V");
        barPurcentage = Number(dataFromServer[6] / 2700 * 100);
        $("#ursBar").css("width", barPurcentage + "%");
        $("#urs").html(dataFromServer[6] / 10 + " V");

        $("#ustLabel").html("Usn:" + dataFromServer[8] / 10 + " V");
        barPurcentage = Number(dataFromServer[8] / 2700 * 100);
        $("#ustBar").css("width", barPurcentage + "%");
        $("#ust").html(dataFromServer[8] / 10 + " V");

        $("#utrLabel").html("Utn:" + dataFromServer[10] / 10 + " V");
        barPurcentage = Number(dataFromServer[10] / 2700 * 100);
        $("#utrBar").css("width", barPurcentage + "%");
        $("#utr").html(dataFromServer[10] / 10 + " V");

        // for Current
        $("#irLabel").html("Ir:" + dataFromServer[3] / 10 + " A");
        barPurcentage = Number(dataFromServer[3] / 1000 * 100);
        $("#irBar").css("width", barPurcentage + "%");
        $("#ir").html(dataFromServer[3] / 10 + " A");

        $("#isLabel").html("Is:" + dataFromServer[4] / 10 + " A");
        barPurcentage = Number(dataFromServer[4] / 1000 * 100);
        $("#isBar").css("width", barPurcentage + "%");
        $("#is").html(dataFromServer[4] / 10 + " A");

        $("#itLabel").html("It:" + dataFromServer[5] / 10 + " A");
        barPurcentage = Number(dataFromServer[5] / 1000 * 100);
        $("#itBar").css("width", barPurcentage + "%");
        $("#it").html(dataFromServer[5] / 10 + " A");

    }


});

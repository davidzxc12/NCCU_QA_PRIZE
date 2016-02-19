var total=0;

function handleFileSelect(event) {
    var files = event.target.files;
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = reader.result;
        var textarray=text.split('\n');
        for(var i=0;i<textarray.length;i++){
        	$("#list").append($('<option id=\"'+(i+1)+'\">'+textarray[i]+'</option>'))
        	total=total+1;
        }

    }
    reader.readAsText(files[0]);
}


function getRandom(minNum, maxNum) { //取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function getRandomArray(minNum, maxNum, n) { //隨機產生不重覆的n個數字
    var rdmArray = [n]; //儲存產生的陣列

    for (var i = 0; i < n; i++) {
        var rdm = 0; //暫存的亂數

        do {
            var exist = false; //此亂數是否已存在
            rdm = getRandom(minNum, maxNum); //取得亂數

            //檢查亂數是否存在於陣列中，若存在則繼續回圈
            if (rdmArray.indexOf(rdm) != -1) exist = true;

        } while (exist); //產生沒出現過的亂數時離開迴圈

        rdmArray[i] = rdm;
    }
    return rdmArray;
}




$(document).ready(function() {
    document.getElementById('exampleInputFile').addEventListener('change', handleFileSelect, false);
    document.getElementById("num").defaultValue = "1";
    $("#submit").click(function() {
        var num = $("#num").val();
        var rdmArray = getRandomArray(1, total, num);
        for (var i = 0; i < rdmArray.length; i++) {
            console.log('#list #' + rdmArray[i]);
            $('#list #' + rdmArray[i]).clone().appendTo('#lucky_list');
        }
    });
    $('#one').click(function () {
    	 $('#photo').attr('src','1.jpg');
    	 $('#intro').text("Seagate Backup Plus V2 Slim 2TB USB3.0 2.5吋行動硬碟");
    })
    $('#two').click(function () {
    	 $('#photo').attr('src','2.jpg');
    	 $('#intro').text("TCELL 冠元-USB3.0 128GB Hide & Seek ");
    })
    $('#three').click(function () {
    	 $('#photo').attr('src','3.jpg');
    	 $('#intro').text("ASUS Zenpower行動電源");
    })
    $('#four').click(function () {
    	 $('#photo').attr('src','4.gif');
    	 $('#intro').text("7-11商品卡200元");
    })

});

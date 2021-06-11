function editImage() {
	var huer	 = $("#huer").val();
	var invert 	 = $("#invert").val();  
	var saturate     = $("#saturate").val();
	var filter = 	'hue-rotate(' + huer + 'deg) invert(' + invert +'%) saturate(' + saturate +'%)';

	$("#imageContainer img").css("filter", filter);
	$("#imageContainer img").css("-webkit-filter", filter); 
}

$("input[type=range]").change(editImage).mousemove(editImage);
$('#imageEditor').on('reset', function () {
	setTimeout(function() {
		editImage();
	},0);
});

let btnDownload = document.getElementById('download');
function img(){
    var image = document.getElementsByTagName('img').getAttribute('src');
    if(image == "image1.jpeg"){
        
    }
}
btnDownload.addEventListener('click', () => {
    let imgPath = img.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
})

function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}

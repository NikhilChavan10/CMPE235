
	

var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
	
	    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
	
	// Called when a photo is successfully retrieved
    //
	
    function onPhotoDataSuccess(imageURI) {
	
	 //test
	  
	
	var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
           
            var params = {};
            params.value1 = "test";
            params.value2 = "param";
			params.file_name = "" + (new Date()).getTime() + ".jpg";
            
            options.params = params;

            var ft = new FileTransfer();
            
            ft.upload(imageURI, encodeURI("http://kaushikk.com/phonegap_upload.php"), win, fail, options);
			    
			
	     
      
			
    }
	
	        function win(r) {
				
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
             $('#theDiv').html("");
            $('#theDiv').prepend(r.response);

            console.log("Sent = " + r.bytesSent);
            $('#myModal').modal('show');
			//alert(Uploaded Successfully);
        }

        function fail(error) {
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }
 
 // Called when a photo is successfully retrieved
    //
	
	
    function onPhotoURISuccess(imageURI) {
	
	//test
	  
	
	var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = {};
            params.value1 = "test";
            params.value2 = "param";
			params.file_name = "" + (new Date()).getTime() + ".jpg";
            
            options.params = params;

            var ft = new FileTransfer();
            
            ft.upload(imageURI, encodeURI("http://kaushikk.com/phonegap_upload.php"), win, fail, options);
			     
			
      
    }
	  
	  function win(r) {
        
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            $('#theDiv').html("");
             $('#theDiv').prepend(r.response);
            console.log("Sent = " + r.bytesSent);
            $('#myModal').modal('show');
      //alert(Uploaded Successfully);
        }

        function fail(error) {
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }
	  
	
	
	
	
	// Camera button will call this function
    //
    function capturePhoto() {
    
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI });
    }
	
	//Picture button will call this function
    //
    function getPhoto() {
       
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
		encodingType: Camera.EncodingType.JPEG,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM });
    }
	
	// Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }

	//Buttons

    $('.camera-btn').on('click', capturePhoto);
	
	$('.picture-btn').on('click', getPhoto);

  


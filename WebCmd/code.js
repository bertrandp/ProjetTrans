$(document).ready(function(){

	$('body').keydown(function(e){

		switch (e.keyCode || e.which) {
		case 38:
			$.post("PostMe",
	    		  {
	    		    cmd:"PostInfo",
	    		    data:"UP"
	    		  },
	    		  function(data,status){
	    		    alert("Post Done received data: " + data + "\nStatus: " + status);
	    	}); 
		break;
		case 40:
			$.post("PostMe",
		    		  {
		    		    cmd:"PostInfo",
		    		    data:"DOWN"
		    		  },
		    		  function(data,status){
		    		    alert("Post Done received data: " + data + "\nStatus: " + status);
		    	}); 
		break;
		case 37:
			$.post("PostMe",
		    		  {
		    		    cmd:"PostInfo",
		    		    data:"LEFT"
		    		  },
		    		  function(data,status){
		    		    alert("Post Done received data: " + data + "\nStatus: " + status);
		    	}); 
		break;
		case 39:
			$.post("PostMe",
		    		  {
		    		    cmd:"PostInfo",
		    		    data:"RIGHT"
		    		  },
		    		  function(data,status){
		    		    alert("Post Done received data: " + data + "\nStatus: " + status);
		    	}); 
		break;
		case 13: // entrée
			$.get("PostMe",
			  		  function(data,status){
				  		
				  		$("#txtReceivedId").val(data.data);
				  		
			  		    alert("Get Done received data: " + data + "\nStatus: " + status);
			  	});    
		break;
		case 46: // suppr
			 $.post("PostMe",
		    		  {
		    		    cmd:"Reset",
		    		  },
		    		  function(data,status){
		    		    alert("Post Done reset data: " + data + "\nStatus: " + status);
		    	});      
		break;
		}
	}); 
	
	$("#btnUp").click(function(){

		  // Using Post method to the URL 'PostInfo', data is sent in JSON format
		  // A callback method is launched when the server answer
		  	$.post("PostMe",
	    		  {
	    		    cmd:"PostInfo",
	    		    data:"UP"
	    		  },
	    		  function(data,status){
	    		    alert("Post Done received data: " + data + "\nStatus: " + status);
	    	});    
	  });
	
  $("#btnDown").click(function(){

	  // Using Post method to the URL 'PostInfo', data is sent in JSON format
	  // A callback method is launched when the server answer
	  	$.post("PostMe",
    		  {
    		    cmd:"PostInfo",
    		    data:"DOWN"
    		  },
    		  function(data,status){
    		    alert("Post Done received data: " + data + "\nStatus: " + status);
    	});    
  });
  $("#btnRight").click(function(){

	  // Using Post method to the URL 'PostInfo', data is sent in JSON format
	  // A callback method is launched when the server answer
	  	$.post("PostMe",
    		  {
    		    cmd:"PostInfo",
    		    data:"RIGHT"
    		  },
    		  function(data,status){
    		    alert("Post Done received data: " + data + "\nStatus: " + status);
    	});    
  });
  $("#btnLeft").click(function(){

	  // Using Post method to the URL 'PostInfo', data is sent in JSON format
	  // A callback method is launched when the server answer
	  	$.post("PostMe",
    		  {
    		    cmd:"PostInfo",
    		    data:"LEFT"
    		  },
    		  function(data,status){
    		    alert("Post Done received data: " + data + "\nStatus: " + status);
    	});    
  });
  $("#btnSendId").click(function(){
	  // Using Post method to the URL 'PostInfo', data is sent in JSON format
	  // A callback method is launched when the server answer
	  	$.post("PostMe",
    		  {
    		    cmd:"PostInfo",
    		    data:$("#txtToSendId").val()
    		  },
    		  function(data,status){
    		    alert("Post Done received data: " + data + "\nStatus: " + status);
    	});    
  });

  
  // Using Get method to the URL 'PostInfo'
  // A callback method is launched when the server answer
  $("#btnGetId").click(function(){
	  	$.get("PostMe",
  		  function(data,status){
	  		
	  		$("#txtReceivedId").val(data.data);
	  		
  		    alert("Get Done received data: " + data + "\nStatus: " + status);
  	});    
});
  
//Using Get method to the URL 'PostInfo'
  // A callback method is launched when the server answer
  $("#btnRst").click(function(){
	  $.post("PostMe",
    		  {
    		    cmd:"Reset",
    		  },
    		  function(data,status){
    		    alert("Post Done reset data: " + data + "\nStatus: " + status);
    	});     
});
});

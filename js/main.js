/**
 * 
 */

function viewHome(){
	$('#home').css({
	    'display' : 'block'
	});
	hideFromHome();
	closeMenu();
}

function viewEducation(){
	$('#education').css({
	    'display' : 'block'
	});
	hideFromEducation();
	closeMenu();
}

function viewTechnicalSkills(){
	$('#technicalSkills').css({
	    'display' : 'block'
	});
	hideFromTechnicalSkills();
	closeMenu();
}

function viewExperience(){
	$('#experience').css({
	    'display' : 'block'
	});
	hideFromExperience();
	closeMenu();
}

function viewContact(){
	$('#contact').css({
	    'display' : 'block'
	});
	hideFromContact();
	closeMenu();
}

function hideFromHome(){
	hideTechnicalSkills();
	hideContact();
	hideEducation();
	hideExperience();
}

function hideFromTechnicalSkills(){
	hideEducation();
	hideHome();
	hideContact();
	hideExperience();
}

function hideFromEducation(){
	hideTechnicalSkills();
	hideHome();
	hideContact();
	hideExperience();
}

function hideFromExperience(){
	hideHome();
	hideTechnicalSkills();
	hideEducation();
	hideContact();
}

function hideFromContact(){
	hideHome();
	hideTechnicalSkills();
	hideEducation();
	hideExperience();
}

function hideEducation(){
	$('#education').css({
	    'display' : 'none'
	});
}

function hideTechnicalSkills(){
	$('#technicalSkills').css({
	    'display' : 'none'
	});
}
function hideHome(){
	$('#home').css({
	    'display' : 'none'
	});
}

function hideExperience(){
	$('#experience').css({
	    'display' : 'none'
	});	
}

function hideContact(){
	$('#contact').css({
	    'display' : 'none'
	});
}

function openMenu(){
	$(".menu").css({'width':'250px'}); 
	$("#mainContent").css({'margin-left':'250px'});
	$("#header").css({'margin-left':'250px'});
	$("body").css({'background-color' : 'rgba(0,0,0,0.4)'});
}

function closeMenu(){
	$(".menu").css({'width':'0px'}); 
	$("#mainContent").css({'margin-left':'0px'});
	$("#header").css({'margin-left':'0px'});
	$("body").css({'background-color' : 'white'});
}


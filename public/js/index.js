$( document ).ready(function() {
  function gup( name ) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    return results == null ? null : results[1];
  }

  $('.stage0').hide();
  $('.stage1').hide();
  $('.stage2').hide();
  $('.stage3').hide();
  $('.stage4').hide();
  $('.stage5').hide();
  $('.stageWarning').hide();
  $('.stageEnd').hide();

  stage = '.stage'.concat(gup( 'step' ));
  if(gup('step') === null){
    stage = '.stage0';
  }
  $(stage).show();

  $('#btn0').click(function() {
    $('.stage0').hide();
    $('.stage1').fadeIn( "slow" );
  });
  $('#btn1').click(function() {
    $('.stage1').hide();
    $('.stage2').fadeIn( "slow" );
  });
  $('#btn2').click(function() {
    $('.stage2').hide();
    $('.stage3').fadeIn( "slow" );
  });
  $('#btn3').click(function() {
    $('.stage3').hide();
    $('.stage4').fadeIn( "slow" );
  });
  $('#btn4').click(function() {
    $('.stage4').hide();
    $('.stage5').fadeIn( "slow" );
  });
  $('#btn5').click(function() {
    $('.stage5').hide();
    $('.stageWarning').fadeIn( "slow" );
  });
  $('#btnW').click(function() {
    $('.stageWarning').hide();
    $('.stageEnd').fadeIn( "slow" );
  });
  $('#myPopover').click( function () {
    alert("HEY");
  });
});

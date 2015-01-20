
$( document ).ready(function() {
  $('.stage1').hide();
  $('.stage2').hide();
  $('.stage3').hide();
  $('.stage4').hide();
  $('.stage5').hide();
  $('.stageWarning').hide();
  $('.stageEnd').hide();

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

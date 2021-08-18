$('.pic-rap').fadeIn('slow').css({ display: 'flex' });

$('.tag').on('click', (e) => {
  $('.selected').removeClass('selected');
  $(e.target).addClass('selected');

  const category = e.target.classList[1];
  if (category === 'all') {
    $('article > a').show();
    return;
  }
  $('article > a').hide();
  $(`.${category}`).show();
});

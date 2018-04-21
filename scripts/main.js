let main = "main", resume = "resume", contact = "contact";
let currrentPage = "home";

let navlinks = $('#navlinks').children();
navlinks.each((i, x)=>{
  let content = ($(x).children())[0].innerHTML.toLowerCase();
  $(x).click(()=>{
    transition(currrentPage, content);
  });
});

let transition = (a, b) => {
  $('#'+a).toggleClass('to-hide');
  $('#'+a).toggleClass('show');
  setTimeout(()=>{
    $('#'+a).toggleClass('dp-none');
    $('#'+b).toggleClass('dp-none');
    setTimeout(()=>{
      $('#'+a).toggleClass('from-hide');
      $('#'+a).toggleClass('to-hide');
      $('#'+b).toggleClass('show');
      $('#'+b).toggleClass('from-hide');
    }, 100);
  },500);
  currrentPage = b;
}

window.onscroll = () => {
  let header = $('header');
  if(window.scrollY != 0){
    header.addClass('header-scrolled');
  }
  else{
    header.removeClass('header-scrolled');
  }
}

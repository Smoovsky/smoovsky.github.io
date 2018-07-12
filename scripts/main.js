(function(){
   emailjs.init("user_O7w0MzBQdIQSFEYvgBYnH");
})();

let main = 'main', resume = 'resume', contact = 'contact';
let currrentPage = 'home';

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
    $('#'+a).css({display:'none'});
    $('#'+b).css({display:'block'});
    setTimeout(()=>{
      $('#'+a).toggleClass('from-hide');
      $('#'+a).toggleClass('to-hide');
      $('#'+b).toggleClass('show');
      $('#'+b).toggleClass('from-hide');
    }, 50);
  },550);
  currrentPage = b;
};

window.onscroll = () => {
  let header = $('header');
  if(window.scrollY != 0){
    header.addClass('header-scrolled');
  }
  else{
    header.removeClass('header-scrolled');
  }
};

var form = $('#contact-form').submit(function(event){
  event.preventDefault();
  //this.contact_number.value = Math.random() * 100000 | 0;
  emailjs.sendForm('outlook', 'contact', this);
});

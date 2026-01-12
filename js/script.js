$(document).ready(function () {
    $('.mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('.mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');
$
    (window).on('scroll', function(){
        const header = $('header');
        let activesectionindex = 0;
        const scrollposition = $(window).scrollTop() - header.outerHeight();

        if (scrollposition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectiontop = section.offset().top - 136;
            const sectionbottom = sectiontop + section.outerHeight();

            if (scrollposition >= sectiontop && scrollposition < sectionbottom){
                activesectionindex = i
                return false;
            }
        })
        
        navItems.removeClass('active');
        $(navItems[activesectionindex]).addClass('active');
    });
});


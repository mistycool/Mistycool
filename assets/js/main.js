(function($) {
    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $footer = $('#footer'),
        $main = $('#main'),
        $main_articles = $main.children('article');

    // Existing scripts...

    // Scroll restoration
    if ('scrollRestoration' in history)
        history.scrollRestoration = 'manual';
    else {
        var oldScrollPos = 0,
            scrollPos = 0,
            $htmlbody = $('html,body');

        $window
            .on('scroll', function() {
                oldScrollPos = scrollPos;
                scrollPos = $htmlbody.scrollTop();
            })
            .on('hashchange', function() {
                $window.scrollTop(oldScrollPos);
            });
    }

    // Initialize.
    $main.hide();
    $main_articles.hide();

    if (location.hash != '' && location.hash != '#')
        $window.on('load', function() {
            $main._show(location.hash.substr(1), true);
        });

})(jQuery);

// Add smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get target section ID
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

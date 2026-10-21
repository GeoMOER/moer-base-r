/* The course and its standalone H5P pages share an origin on GitHub Pages.
 * The standalone player sizes its inner iframe; mirror its outer page height.
 * Cross-origin previews retain their declared height and native scrolling.
 */
(function () {
  'use strict';

  var selector = '.page__content iframe[src*="/moer-h5p-content/h5p-standalone-1.3.x/demo/"]';

  document.querySelectorAll(selector).forEach(function (frame) {
    if (new URL(frame.src, document.baseURI).origin !== window.location.origin) {
      return;
    }

    var resizeObserver;
    var mutationObserver;
    var pending;

    function bind() {
      var doc;
      try {
        doc = frame.contentDocument;
        if (!doc || !doc.body || doc.URL === 'about:blank') {
          return;
        }
      } catch (error) {
        return;
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }

      function schedule() {
        if (pending) {
          return;
        }
        pending = window.requestAnimationFrame(function () {
          pending = null;
          if (!frame.isConnected || frame.contentDocument !== doc) {
            return;
          }
          // Keep the initial height until the asynchronously loaded player exists.
          var player = doc.querySelector('.h5p-container');
          if (!player || !player.querySelector('iframe.h5p-iframe')) {
            return;
          }
          var style = doc.defaultView.getComputedStyle(doc.body);
          // Body scrollHeight can include the viewport: adding margins to it
          // repeatedly would grow the frame. Measure the actual player instead.
          var top = player.getBoundingClientRect().top + doc.defaultView.scrollY;
          var height = Math.ceil(top + Math.max(player.scrollHeight,
            player.getBoundingClientRect().height) + (parseFloat(style.marginBottom) || 0));
          if (height > 0 && Math.abs(frame.getBoundingClientRect().height - height) > 1) {
            frame.style.height = height + 'px';
          }
        });
      }

      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(schedule);
        resizeObserver.observe(doc.body);
      }
      mutationObserver = new MutationObserver(schedule);
      mutationObserver.observe(doc.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
      doc.addEventListener('load', schedule, true);
      window.addEventListener('resize', schedule);
      schedule();
    }

    frame.addEventListener('load', bind);
    bind();
  });
}());

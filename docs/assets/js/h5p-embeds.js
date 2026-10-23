/* The course and its standalone H5P pages share an origin on GitHub Pages.
 * The standalone player sizes its inner iframe; mirror its outer page height.
 * Cross-origin previews retain their declared height and native scrolling.
 */
(function () {
  'use strict';

  var selector = '.page__content iframe[src*="/moer-h5p-content/h5p-standalone-1.3.x/demo/"]';

  // The enlarged boxplot has labels and destinations on opposite sides.
  // Pan its containing region when a drag approaches a visible edge.
  function enableDragScrolling(frame, region) {
    var active = false;
    var dx = 0;
    var dy = 0;
    var pending;
    var observer;
    var documents = new WeakSet();
    var players = new WeakSet();

    function stop() {
      active = false;
      dx = dy = 0;
      window.cancelAnimationFrame(pending);
      pending = null;
    }

    function step() {
      pending = null;
      if (!active || !region.classList.contains('is-enlarged')) {
        return;
      }
      region.scrollLeft += dx;
      region.scrollTop += dy;
      if (dx || dy) {
        pending = window.requestAnimationFrame(step);
      }
    }

    function watch() {
      var doc;
      try {
        doc = frame.contentDocument;
        if (!doc || !doc.body) { return; }
      } catch (error) { return; }
      if (observer) { observer.disconnect(); }

      function attach() {
        var inner = doc.querySelector('iframe.h5p-iframe');
        if (!inner) { return; }
        if (!players.has(inner)) {
          players.add(inner);
          inner.addEventListener('load', function () {
            // H5P writes into its initially blank document, clearing listeners.
            documents.delete(inner.contentDocument);
            attach();
          });
        }
        var content = inner.contentDocument;
        if (!content || !content.querySelector('.h5p-draggable') || documents.has(content)) { return; }
        documents.add(content);
        function start(event) {
          active = region.classList.contains('is-enlarged') &&
            !!event.target.closest('.h5p-draggable');
        }
        function move(event) {
          if (!active) { return; }
          var point = event.touches ? event.touches[0] : event;
          if (!point) { return; }
          var outer = frame.getBoundingClientRect();
          var player = inner.getBoundingClientRect();
          var bounds = region.getBoundingClientRect();
          var x = outer.left + player.left + point.clientX;
          var y = outer.top + player.top + point.clientY;
          dx = x < bounds.left + 36 ? -8 : (x > bounds.right - 36 ? 8 : 0);
          dy = y < bounds.top + 36 ? -8 : (y > bounds.bottom - 36 ? 8 : 0);
          if (!pending && (dx || dy)) { pending = window.requestAnimationFrame(step); }
        }
        content.addEventListener('mousedown', start, true);
        content.addEventListener('touchstart', start, {capture: true, passive: true});
        content.addEventListener('mousemove', move, true);
        content.addEventListener('touchmove', move, {capture: true, passive: true});
        content.addEventListener('mouseup', stop, true);
        content.addEventListener('touchend', stop, true);
        content.addEventListener('touchcancel', stop, true);
      }
      observer = new MutationObserver(attach);
      observer.observe(doc.body, {
        childList: true, subtree: true, attributes: true, attributeFilter: ['style']
      });
      attach();
    }
    frame.addEventListener('load', function () { stop(); watch(); });
    window.addEventListener('blur', function () {
      // Focusing the nested player also blurs the outer window.
      window.setTimeout(function () { if (!document.hasFocus()) { stop(); } }, 0);
    });
    document.addEventListener('mouseup', stop, true);
    document.addEventListener('touchend', stop, true);
    watch();
    return stop;
  }

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

  document.querySelectorAll('.page__content [data-h5p-zoom]').forEach(function (activity) {
    var button = activity.querySelector('.h5p-zoom-toggle');
    var region = activity.querySelector('.h5p-zoom-region');
    var frame = region && region.querySelector('iframe');
    if (!button || !region || !frame) {
      return;
    }
    button.hidden = false;
    var stopDragScrolling = activity.getAttribute('data-h5p-zoom') === 'unit09-boxplot' ?
      enableDragScrolling(frame, region) : function () {};

    function setEnlarged(enlarged) {
      region.classList.toggle('is-enlarged', enlarged);
      region.tabIndex = enlarged ? 0 : -1;
      button.setAttribute('aria-pressed', String(enlarged));
      button.textContent = enlarged ? 'Fit activity to page' : 'Enlarge activity';
      if (!enlarged) {
        stopDragScrolling();
        region.scrollLeft = 0;
        region.scrollTop = 0;
      }
      try {
        frame.contentWindow.dispatchEvent(new Event('resize'));
      } catch (error) {
        // The outer player can still be resized when its content is cross-origin.
      }
    }

    button.addEventListener('click', function () {
      setEnlarged(button.getAttribute('aria-pressed') !== 'true');
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 740 && button.getAttribute('aria-pressed') === 'true') {
        setEnlarged(false);
      }
    });
  });
}());

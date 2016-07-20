if (goog.require) {
    goog.require('rxjs.Rx');
}

(function(root, factory) {
    root.Rx = factory();
} (window || global || this, function() {
    if (goog.module.get('rxjs.Rx')) {
        return goog.module.get('rxjs.Rx');
    } else {
        return require('../dist/cjs/Rx');
    }
}));
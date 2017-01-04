// Douglas Crawford - how to write js functions
function constructor(spec) {
    var that = other_ctor(spec),
        member, method = function() {
            // spec, member, method
        };

    that.method = method;

    return that;
}

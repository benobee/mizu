const sqs = {
    init () {
        window.Squarespace.AFTER_BODY_LOADED = false;
        window.Squarespace.afterBodyLoad();
    },
    destroy () {
        window.Squarespace.globalDestroy( Y );
    }
};

export default sqs;
export default function ballam() {
    $(".ball").velocity({
        translateY: '200px'
    }, {
        easing: 'ease-in-out',
        duration: 200,
        loop: true
    });
};


$(document).ready(() => {

    $("#submit").on("click", (event) => {
        event.preventDefault();

        var friend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: []
        };

        for (i = 0; i < 10; i++) {
            var score = $("#question" + i).val();
            friend.scores.push(parseInt(score));
        };

        console.log(friend);

        $.post("/api/friends", friend, (data) => {
            var match = {
                txt: "You're as Desperate as" + data.name,
                img: "<img src=\"" + data.photo + "\">"
            };
            modal(match);
            $('#name').val("");
            $('#photo').val("");
        });
    });
    function modal(data) {

        $("#match-name").text(data.txt);
        $("#match-img").html(data.img);
        $("#match-results").show(800, () => {
            timeoutID = window.setTimeout(hideDiv, 8000);
            function hideDiv() {
                $("#match-results").hide(800);
            };
        });
    };
});
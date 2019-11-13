$(document).ready(() => {

    $("#submit").on("click", () => {
        var friend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: []
        };
        for (i = 0; i < 10; i++) {
            var score = $("#q" + i).val();
            friend.scores.push(parseInt(score));
        };
        var url = window.location.origin;
        console.log("posting friend to api/friends\n friend: " + friend + "\n");
        $.post(url + "/api/friends", friend, (data) => {
            var match = {
                txt: "You match with " + data.name,
                img: "<img src=\"" + data.photo + "\">"
            };
            modal(match);
            $('#name').val("");
            $('#photo').val("");
        });
        event.preventDefault();
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
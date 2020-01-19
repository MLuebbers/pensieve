$(document).ready(function() {
        console.log("ready");
        $.get("https://api.github.com/repos/MLuebbers/pensive/commits?path=./index.html", function(data, status) {
            console.log(data[0].commit.committer.date);
            console.log(data.length);
            $("#last-commit").append(data[0].commit.committer.date);
            $("#commits").append(`${data.length} ${data.length == 1 ? "commit" : "commits"}`);
        });
    
})
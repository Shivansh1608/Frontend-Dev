// Using jQuery v1 for carousel + active highlight
jq1(function () {
  jq1("#carousel").click(function () {
    jq1(this).addClass("active");
  });
});

// Using jQuery v3 for modal + tooltips
jq3(function () {
  jq3("#modal").click(function () {
    alert("Modal opened!");
  });

  jq3("#tooltip").hover(
    function () { jq3(this).attr("title", "Tooltip active!"); },
    function () { jq3(this).removeAttr("title"); }
  );
});

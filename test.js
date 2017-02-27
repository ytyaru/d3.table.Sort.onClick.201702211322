window.onload = function(){
    Main();
};
function Main()
{
    var objs = [
        {"id": 0, "name": "うえだ", "class": "B"},
        {"id": 1, "name": "あいだ", "class": "C"},
        {"id": 2, "name": "いいだ", "class": "A"}];
    var table = d3.select("body").insert("table",":first-child").attr("id","NameList");
    var thead = table.append("thead");
    var tbody = table.append("tbody");

    thead.append("tr")
        .selectAll("th")
            .data(d3.entries(objs[0]))
            .enter()
            .append("th")
            .on("click", function(d,i){createTableBody(d.key);})
            .text(function(d){return d.key;})
    ;
    createTableBody("id");

    function createTableBody(sortKey)
    {
        objs.sort(function(x,y){return d3.ascending(x[sortKey], y[sortKey])});
        // tbody.selectAll("tr").remove();
        // 新規作成する
        tbody
            .selectAll("tr")
                .data(objs)
                .enter()
                .append("tr")
            .selectAll("td")
                .data(function(d){return d3.entries(d)})
                .enter()
                .append("td")
                .text(function(d){return d.value;})
            ;
        // 更新する
        tbody
            .selectAll("tr")
                .data(objs)
            .selectAll("td")
                .data(function(d){return d3.entries(d)})
                .text(function(d){return d.value;})
            ;
    }
}

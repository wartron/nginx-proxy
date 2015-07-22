

var hostname = window.location.hostname || '192.168.1.102',
    $tbody = null;

$(document).ready(function() {
    if(dockergenRan)
        $(".alert").alert('close');

    $tbody = $("#vhosts table tbody")
    buildList();
});

function buildList() {
    $tbody.empty()
    for(var i=0;i<containers.length;i++)
        $tbody.append(getRowHtml(containers[i]));
}

function getRowHtml(container) {
    var html = '<tr>';
    html += '<td>'+ container.id.substr(0,12) + '</td>';
    html += '<td>'+ container.name + '</td>';
    html += getHostLink(container);
    html += '<td>'+ container.image + '</td>';
    html += getLinks(container);
    html +='</tr>';
    return html;
}

function getHostLink(container) {
    return '<td><a href="http://'+container.host+'">'+container.host+'</a></td>';
}

function getLinks(container) {
    var html = '<td>';

    if(cadvisor)
        html += '<a href="http://'+hostname+':'+cadvisorPort+'/docker/'+container.id+'">cAdvisor</a>'

    if(cadvisor && dockerUI)
        html += " | ";

    if(dockerUI)
        html += '<a href="http://'+hostname+':'+dockerUIPort+'/#/containers/'+container.id+'/">DockerUI</a>'

    html += '</td>';
    return html;
}
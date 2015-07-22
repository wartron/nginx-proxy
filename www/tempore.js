

var hostname = window.location.hostname || '192.168.1.102',
    $tbody = null;

$(document).ready(function(){
    if(dockergen_ran){
        $(".alert").alert('close');
    }
    $tbody = $("#vhosts table tbody")
    buildList();
});

function buildList(){

    $tbody.empty()

    var c = containers.length;
    for(var i=0;i<c;i++){
        html = getRowHtml(containers[i]);
        $tbody.append(html);
    }


}

function trimid(id){
    return id.substr(0,12)
}

function getRowHtml(container){
    html = '<tr>';
    html += '<td>'+ trimid(container.id) + '</td>';
    html += '<td>'+ container.name + '</td>';
    html += getHostLink(container);

    html += '<td>'+ container.image + '</td>';

    html += getLinks(container);
    html +='</tr>';


    return html;

}

function getHostLink(container){
    return '<td><a href="http://'+container.host+'">'+container.host+'</a></td>';
}

function getLinks(container){
    html = '<td>';

    if(cadvisor)
        html += '<a href="http://'+hostname+':'+cadvisor_port+'/docker/'+container.id+'">cAdvisor</a>'

    if(cadvisor && dockerui)
        html += " | ";

    if(dockerui)
        html += '<a href="http://'+hostname+':'+dockerui_port+'/#/containers/'+container.id+'/">DockerUI</a>'

    html += '</td>';
    return html;
}
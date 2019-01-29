function myTreeInit() {
    createNode("root", "Button", "lvl1Yes", "Yes", "btn-lg btn-warning");
    createNode("root", "Button", "lvl1No", "No", "btn-lg btn-danger");
}
function createNode(parentID, elementType, nodeId, text, classes){
    var node = document.createElement(elementType);//Button
    node.setAttribute("id", nodeId);//lvl1yes
    node.setAttribute("class",classes);
    node.setAttribute("onClick", "call"+text+"()");
    node.onClick = "call"+text+"()";
    var textnode = document.createTextNode(text);//Yes
    node.appendChild(textnode);
    document.getElementById(parentID).appendChild(node);//root

}
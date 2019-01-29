function myTree() {
    var node = document.createElement("Button");
    node.setAttribute("id", "lvl1yes");
    var textnode = document.createTextNode("Yes");
    node.appendChild(textnode);
    document.getElementById("root").appendChild(node);
    var node = document.createElement("Button");
    node.setAttribute("id", "lvl1no");
    var textnode = document.createTextNode("No");
    node.appendChild(textnode);
    document.getElementById("root").appendChild(node);
    
}
function createNode(parentID, elementType, nodeId, text, classes){

}
var arr = [];
document.getElementById("ip1").value = "";
var node1 = document.getElementById("div1");

function updateDOM(){
    node1.innerHTML = "";
    for(let i=0;i<arr.length;i++){
        if(arr[i].present == true){
            var node2 = document.createElement("tr");
            var node4 = document.createElement('td');

            node4.append(arr[i].sen)

            var node5 = document.createElement('td');
            var node3 = document.createElement("button");
            node3.append("DONE");


            node3.onclick = () => {
                arr[i].present = false;
                updateDOM();
            }

            node5.append(node3);
            node2.append(node4);
            node2.append(node5);
            node1.append(node2);

        }
    }
}


function func(){
    var obj = {
        sen : document.getElementById("ip1").value,
        present : true
    }

    arr.push(obj);
    updateDOM();
}
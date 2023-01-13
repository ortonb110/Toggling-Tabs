const segmentedTableData = document.querySelectorAll("td");
const selection = document.querySelectorAll("option");
let currentTableId, selectId;
let activeSort = false;

const deactivateSelectedItem = () => {
    for (let i =0; i < segmentedTableData.length; i++) {

            segmentedTableData[i].style.backgroundColor = "#FFF";
            segmentedTableData[i].style.color = "#000";
        

    }
}
const selectItem = () => {
    if (selectId === currentTableId) {
        selection[selectId].selected = "selected";
    }
}

segmentedTableData.forEach(
    (item, currentArrayIndex) => {
        item.addEventListener("click", selectSort = () => {
            deactivateSelectedItem();
            item.style.backgroundColor = "#5796FF";
            item.style.color = "#fff";
            currentTableId = currentArrayIndex;
            selectId = currentArrayIndex;
            selectItem();
        });
        
    }
)

checkSelection = (id)=> {
    selectId = id.target.value;
    deactivateSelectedItem();
    segmentedTableData[selectId].style.backgroundColor ="#5796FF";
    segmentedTableData[selectId].style.color = "#fff";
}


// selection.forEach(
//     (items, currentItemIndex) => {
//         items.addEventListener("click", selected = () => {
//             activeSort = true;
//             selectId = currentItemIndex;
//             console.log(currentItemIndex);
//         });
//     }
// )
var columns = document.querySelectorAll(".card");
var draggingClass = "dragging";
var dragSource;

Array.prototype.forEach.call(columns, function (col) {
  col.addEventListener("dragstart", handleDragStart, false);
  col.addEventListener("dragover", handleDragOver, false);
});

function handleDragStart(evt) {
  console.log("Dragged", evt);
}

function handleDragOver(evt) {
  console.log("dropped", evt);
}

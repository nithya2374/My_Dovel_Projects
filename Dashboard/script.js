let draggedItem = null;
let isResizing = false;

function initResizableWidgets() 
{

  document.querySelectorAll(".cell").forEach(cell =>
    {
    
    if (!cell.querySelector(".resizer")) 
    {
      const resizer = document.createElement("div");
      resizer.classList.add("resizer");
      cell.appendChild(resizer);

      resizer.addEventListener("mousedown", (e) => 
      {
        e.preventDefault();
        isResizing = true;

        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = parseInt(window.getComputedStyle(cell).width);
        const startHeight = parseInt(window.getComputedStyle(cell).height);

        function onMouseMove(e)
       {
          const newWidth = startWidth + (e.clientX - startX);
          const newHeight = startHeight + (e.clientY - startY);
          cell.style.width = newWidth + 'px';
          cell.style.height = newHeight + 'px';
        }

        function onMouseUp() 
        {
          isResizing = false;
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      });
    }
  });
}

function initDragSwap() 
{
  document.querySelectorAll(".cell").forEach(cell => 
  {
    cell.setAttribute("draggable", true);

    cell.addEventListener("dragstart", () => 
    {
      if (!isResizing) {
        draggedItem = cell;
        cell.classList.add("dragging");
      }
    });

    cell.addEventListener("dragend", () => 
    {
      cell.classList.remove("dragging");
      draggedItem = null;
    });

    cell.addEventListener("dragover", (e) => 
    {
      e.preventDefault();
      if (!isResizing && draggedItem && cell !== draggedItem) 
      {
        cell.classList.add("drag-over");
      }
    });

    cell.addEventListener("dragleave", () => 
    {
      cell.classList.remove("drag-over");
    });

    cell.addEventListener("drop", () => 
    {
      cell.classList.remove("drag-over");
      if (!isResizing && draggedItem && cell !== draggedItem)
      {
        const dashboard = document.querySelector(".dashboard");
        const draggedClone = draggedItem.cloneNode(true);
        const dropClone = cell.cloneNode(true);
        dashboard.replaceChild(draggedClone, cell);
        dashboard.replaceChild(dropClone, draggedItem);
        initResizableWidgets();
        initDragSwap();
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => 
{
  initResizableWidgets();
  initDragSwap();
});
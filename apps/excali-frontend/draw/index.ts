type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    };

export function initDraw(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  const existingShapes: Shape[] = []; 
  let clicked = false;
  let startX = 0;
  let startY = 0;

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;

    const rect = canvas.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
  });

  canvas.addEventListener("mouseup", (e) => {
    clicked = false;

    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    const rectWidth = endX - startX;
    const rectHeight = endY - startY;

    existingShapes.push({
      type: "rect",
      x: startX,
      y: startY,
      width: rectWidth,   // ✅ FIXED
      height: rectHeight, // ✅ FIXED
    });
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!clicked) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const rectWidth = currentX - startX;
    const rectHeight = currentY - startY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ✅ redraw previous shapes
    existingShapes.forEach((shape) => {
      if (shape.type === "rect") {
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      }
    });

    // current preview
    ctx.strokeStyle = "white";
    ctx.strokeRect(startX, startY, rectWidth, rectHeight);
  });
}
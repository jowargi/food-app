export class HoverIntent {
  constructor({ sensitivity = 0.1, interval = 100, element, over, out }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.element = element;
    this.over = over;
    this.out = out;

    this.isOverElement = null;
    this.isHover = null;

    this.lastPointerMoveEvent = null;

    this.onPointerEnter = this.onPointerEnter.bind(this);
    this.onPointerLeave = this.onPointerLeave.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);

    this.trackSpeed = this.trackSpeed.bind(this);

    this.element.addEventListener("pointerenter", this.onPointerEnter);
    this.element.addEventListener("pointerleave", this.onPointerLeave);
  }

  onPointerEnter(event) {
    if (this.isOverElement) return;

    this.isOverElement = true;

    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = Date.now();

    this.element.addEventListener("pointermove", this.onPointerMove);

    this.speedCheckTimerId = setInterval(this.trackSpeed, this.interval);
  }

  onPointerLeave(event) {
    if (!this.isOverElement) return;

    this.isOverElement = false;

    this.element.removeEventListener("pointermove", this.onPointerMove);

    clearInterval(this.speedCheckTimerId);

    if (this.isHover) {
      this.isHover = false;

      this.out.call(this.element, event);
    }
  }

  onPointerMove(event) {
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = Date.now();

    this.lastPointerMoveEvent = event;
  }

  trackSpeed() {
    let speed;

    if (!this.lastTime || this.prevTime === this.lastTime) {
      speed = 0;
    } else {
      speed =
        Math.sqrt(
          Math.pow(this.prevX - this.lastX, 2) +
            Math.pow(this.prevY - this.lastY, 2),
        ) /
        (this.lastTime - this.prevTime);
    }

    if (speed < this.sensitivity) {
      clearInterval(this.speedCheckTimerId);

      this.isHover = true;

      this.over.call(this.element, this.lastPointerMoveEvent);
    } else {
      this.prevX = this.lastX;
      this.prevY = this.lastY;
      this.prevTime = this.lastTime;
    }
  }

  destroy() {
    this.element.removeEventListener("pointerenter", this.onPointerEnter);
    this.element.removeEventListener("pointerleave", this.onPointerLeave);
    this.element.removeEventListener("pointermove", this.onPointerMove);

    clearInterval(this.speedCheckTimerId);
  }
}

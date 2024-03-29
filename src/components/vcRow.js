import VCBase from "./vcBase";
import { row } from "./vcConfig";
export default VCBase.extend({
  props: {
    height: {
      type: Number,
      default: row.height
    }
  },
  name: "vc-row",
  data() {
    return {
      width: this.$parent.width
    };
  },
  methods: {
    refresh() {
      let { Point, Size } = this.geometry;
      this.clearPhysics();

      let clearRect = new this.graphical.ClearRect(
        Point.create(this.x, this.y),
        Size.create(this.width, this.height)
      );
      this.pushPhysics(clearRect);
      let line = new this.graphical.Line(
        Point.create(this.x, this.y + this.height),
        Point.create(this.x + this.width, this.y + this.height)
      );
      line.style.setStrokeStyle("gray");
      this.pushPhysics(line);
    }
  },
  created() {},
  render(h) {
    this.update();
    // return this.$slots.default;
    return h("s", {}, this.$slots.default);
  }
});

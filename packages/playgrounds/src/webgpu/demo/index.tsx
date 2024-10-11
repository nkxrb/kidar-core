import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => <div>
      <canvas></canvas>
    </div>;
  },
});
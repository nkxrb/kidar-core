import { defineComponent } from 'vue';
import TimeMap from '..';

export default defineComponent({
  setup() {
    return () => <div>
      <TimeMap />
    </div>;
  },
});
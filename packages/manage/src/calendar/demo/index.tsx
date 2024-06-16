import { defineComponent } from 'vue';
import Calendar from '../Calendar';

export default defineComponent({
  setup() {
    return () => <Calendar />;
  },
});
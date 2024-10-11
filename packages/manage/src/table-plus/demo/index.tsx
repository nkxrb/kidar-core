import { defineComponent } from 'vue';
import { TablePlus } from '../index';
import { getTableColumns, getTableData } from './data';

export default defineComponent({
  setup() {
    const cols = getTableColumns();

    return () => <div>
      <TablePlus 
        columns={cols}
        customRequest={getTableData}
      />
    </div>;
  },
});
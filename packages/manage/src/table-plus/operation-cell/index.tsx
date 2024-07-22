import { Button, Popover, Space } from 'ant-design-vue';
import { defineComponent, reactive, ref } from 'vue';
import './index.less';

export type OperationBtn = {
  name: string,
  show: (item: any, disabled?: boolean) => boolean,
  [key: string]: any,
}

export default defineComponent({
  props: {
    row: { type: Object },
    btns: { type: Array as () => OperationBtn[] },
    disabled: { type: Boolean, default: false },
  },
  emits: ['operation'],
  setup(props, { emit }) {
    const confirmVisible = ref(false);
    const disableClick = ref(false);
    const confirmVisibleMap = reactive<{[key: string]: boolean}>({});

    const closeConfirm = (btn: OperationBtn) => {
      confirmVisibleMap[btn.name] = false;
    };
    const submitConfirm = (btn: OperationBtn) => {
      emit('operation', btn);
      closeConfirm(btn);
    };

    return () => <div class="mk-operation-cell">
      {
        props.btns
        && props.btns.map((btn: OperationBtn) => {
          // 不显示
          if (btn.show && !btn.show(props.row, props.disabled)) {
            return '';
          }
          // 禁止点击
          if (disableClick.value || (btn.disable && btn.disable(props.row, props.disabled))) {
            return <span class={['kidar-operation-btn', 'kidar-operation-cell-disable']}>
              {btn.name}
            </span>;
          }

          if (btn.confirm) {
            return <Popover trigger='click' v-model={[confirmVisibleMap[btn.name], 'visible']}>
              {{
                content: () => <div>
                  <p class={'kidar-operation-cell-tip'}>
                    {btn.confirmIcon ? <span class={'kidar-operation-cell-icon'}>
                      {btn.confirmIcon()}
                    </span> : ''}
                    <span class={'kidar-operation-cell-text'}>{btn.confirm}</span>
                  </p>
                  <div class={'kidar-operation-cell-footer-btns'}>
                    <Space>
                      <Button size='small' onClick={() => closeConfirm(btn)}>取消</Button>
                      <Button size='small' type='primary' onClick={() => submitConfirm(btn)}>确认</Button>
                    </Space>
                  </div>
                </div>,
                default: () => <span class={'kidar-operation-btn'}>{btn.name}</span>,
              }}
            </Popover>;
          }

          return <span
            class={'kidar-operation-btn'}
            onClick={() => {
              disableClick.value = true;
              emit('operation', btn);
              // 等待下次渲染完毕后按钮开放
              setTimeout(() => {
                disableClick.value = false;
              }, 0);
            }}>
            {btn.name}
          </span>;
        })}
    </div>;
  },
});

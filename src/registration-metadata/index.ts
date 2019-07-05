import * as typeioc from 'typeioc';

let state = '';

interface ICreate {
  init: () => void;
  cleanup: () => void;
}

const create = (): ICreate => ({
    init() {
        state+= 'initialized';
    },

    cleanup() {
        state+= ' disposed';
    }
});

const builder = typeioc.builder();
builder.register<ICreate>('ServiceA')
    .as(() => create())
    .initializeBy((_c, item) => {
      item.init();
      return item;
     })
    .dispose((item) => item.cleanup())
    .named('A')
    .transient();

const container = builder.build();
container.resolveNamed<ICreate>('ServiceA', 'A');
container.dispose();

export default state;

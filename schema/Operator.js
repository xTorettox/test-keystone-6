import { config, list } from '@keystone-next/keystone';
import { text, password } from '@keystone-next/keystone/fields';

export default config({
  lists: {
    Operator: list({ fields: { name: text() } }),
  },
});
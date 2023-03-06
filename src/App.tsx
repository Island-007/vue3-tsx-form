import { defineComponent } from 'vue'
import SchemaForm from './lib'
import schemaTest from '@/demo/data'

export default defineComponent({
  setup() {
    const handleChange = () => {
      console.log('test')
    }
    const test = ''
    return () => {
      return (
        <div>
          <SchemaForm
            schema={schemaTest.schema}
            value={test}
            onChange={handleChange}
          />
        </div>
      )
    }
  },
})

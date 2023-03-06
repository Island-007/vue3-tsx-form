import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes } from '../types'
import StringField from '../Fields/StringField'
import NumberField from '../Fields/NumberField'

export default defineComponent({
  name: 'SchemaItem',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      let component: any
      const { schema } = props
      const type = schema.type
      switch (type) {
        case SchemaTypes.STRING: {
          component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          component = NumberField
          break
        }
        default: {
          console.warn(`${type} is not supports`)
        }
      }
      return <component {...props} />
    }
  },
})

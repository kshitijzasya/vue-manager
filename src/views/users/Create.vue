<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="Note">
      <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>


	export default ({
		components: {
		},
		data() {
			return {
				// Associating "Projects" table data with its corresponding property.
				table2Data: originalData,

				// Associating "Projects" table columns with its corresponding property.
				table2Columns: table2Columns,
			}
		},
        methods: {
            updateData(op) {                 
                this.table2Data = {
                    all: _ => originalData,
                    'in-progress': _ => originalData.filter(item => item.status === op),
                    done: _ => originalData.filter(item => item.status === op),
                    canceled: _ => originalData.filter(item => item.status === op),
                }[op]();
            }
        }
	})

</script>

<style lang="scss">
</style>
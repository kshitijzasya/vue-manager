<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
  <template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h6 class="font-semibold m-0">Project</h6>
				</a-col>
			</a-row>
		</template>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit.prevent="handleSubmit"
	  :hideRequiredMark="true"
    >
      <a-col :span="12">
        <a-form-item label="Company">
          <a-input
            v-decorator="[
              'Compnay',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please fill company name!',
                  },
                ],
              },
            ]" 
			type="text"
			placeholder="Company name"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="Budget">
          <a-input
            v-decorator="[
              'budger',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please fill project budget!',
                  },
                ],
              },
            ]"
			type="text"
			placeholder="Project Budget"
          />
        </a-form-item>
      </a-col>
      <a-form-item label="Status">
        <a-select
          v-decorator="[
            'status',
            {
              rules: [
                { required: true, message: 'Please select your gender!' },
              ],
            },
          ]"
          placeholder="Select Status "
          @change="handleSelectChange"
        >
			<a-select-option value="pending"> Pending </a-select-option>
          <a-select-option value="in-progress"> In-Progress </a-select-option>
          <a-select-option value="canceled"> Canceled </a-select-option>
		  <a-select-option value="done"> Done </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5}">
		  <a-col :span="6">
			  <router-link to="/projects"><a-button type="default" html-type="submit"> Cancel </a-button></router-link>
		  </a-col>
		  <a-col :span="6">
        <a-button type="primary" html-type="submit"> Submit </a-button>
		</a-col>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      Company: "",
      budget: "",
      status: "",
      completion: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "project_form" });
  },
  methods: {
    handleSubmit(e) {
		this.form.validateFields((err, values)=> {
			if(!err) {
				console.log('values recieved', values)
			}
		})
      console.log("handling form event");
    },
    handleSelectChange(e) {},
  },
};
</script>

<style lang="scss"></style>

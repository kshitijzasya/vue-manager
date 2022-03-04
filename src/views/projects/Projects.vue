<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <!-- Projects Table -->
    <a-row :gutter="24" type="flex">
      <!-- Projects Table Column -->
	  <template v-if="this.$route.path.includes('/projects/')">
      <a-col
        :span="24"
        class="mb-24"
      >
        <router-view></router-view>
      </a-col>
	  </template>
	  <template v-else>
      <a-col :span="24" class="mb-24" >
		  
        <!-- Projects Table Column -->
        <ProjectsTable
          :data="table2Data"
          :columns="table2Columns"
          @update:projects="updateData"
        ></ProjectsTable>
        <!-- / Projects Table Column -->
      </a-col>
	  </template>
      <!-- / Projects Table Column -->
    </a-row>
    <!-- / Projects Table -->
  </div>
</template>

<script>
// "Projects" table component.
import ProjectsTable from "../../components/Cards/ProjectsTable";

// "Projects" table list of columns and their properties.
const table2Columns = [
  {
    title: "COMPANIES",
    dataIndex: "company",
    scopedSlots: { customRender: "company" },
    width: 300,
  },
  {
    title: "BUDGET",
    dataIndex: "budget",
    class: "font-semibold text-muted",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    class: "font-semibold text-muted text-sm",
  },
  {
    title: "COMPLETION",
    scopedSlots: { customRender: "completion" },
    dataIndex: "completion",
  },
  {
    title: "",
    scopedSlots: { customRender: "editBtn" },
    width: 50,
  },
];

// "Projects" table list of rows and their properties.
const originalData = [
  {
    key: "1",
    company: {
      name: "Spotify Version",
      logo: "images/logos/logo-spotify.svg",
    },
    status: "in-progress",
    budget: "$14,000",
    completion: 60,
  },
  {
    key: "2",
    company: {
      name: "Progress Track",
      logo: "images/logos/logo-atlassian.svg",
    },
    status: "in-progress",
    budget: "$3,000",
    completion: 10,
  },
  {
    key: "3",
    company: {
      name: "Jira Platform Errors",
      logo: "images/logos/logo-slack.svg",
    },
    status: "done",
    budget: "Not Set",
    completion: {
      status: "success",
      value: 100,
    },
  },
  {
    key: "4",
    company: {
      name: "Launch new Mobile App",
      logo: "images/logos/logo-spotify.svg",
    },
    status: "canceled",
    budget: "$20,600",
    completion: {
      status: "exception",
      value: 50,
    },
  },
  {
    key: "5",
    company: {
      name: "Web Dev",
      logo: "images/logos/logo-webdev.svg",
    },
    status: "in-progress",
    budget: "$4,000",
    completion: 80,
  },
  {
    key: "6",
    company: {
      name: "Redesign Online Store",
      logo: "images/logos/logo-invision.svg",
    },
    status: "canceled",
    budget: "$2,000",
    completion: {
      status: "exception",
      value: 0,
    },
  },
];

export default {
  components: {
    ProjectsTable,
  },
  data() {
    return {
      // Associating "Projects" table data with its corresponding property.
      table2Data: originalData,

      // Associating "Projects" table columns with its corresponding property.
      table2Columns: table2Columns,
    };
  },
  methods: {
    updateData(op) {
      this.table2Data = {
        all: (_) => originalData,
        "in-progress": (_) => originalData.filter((item) => item.status === op),
        done: (_) => originalData.filter((item) => item.status === op),
        canceled: (_) => originalData.filter((item) => item.status === op),
      }[op]();
    },
  },
};
</script>

<style lang="scss"></style>

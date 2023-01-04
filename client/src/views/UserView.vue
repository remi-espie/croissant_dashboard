<template>
  <div class="tabs">
    <ul>
      <li>
        Statistics
      </li>
      <li>
        Shopping list
      </li>
      <li>
        Post a Quote
      </li>
      <li>
          User settings
      </li>
      <li>
          Danger zone
      </li>
      <li v-if="admin">
        Admin Panel
      </li>

    </ul>

  </div>
  <admin-component v-if="admin"></admin-component>
</template>

<script>
import AdminComponent from "@/components/adminComponent.vue";
import {a} from "../../dist/assets/index.3c14195b";

export default {
  name: "UserView",
  components: {AdminComponent},
  data(){
    return {
      admin: false,
    }
  },
  mounted() {
    this.fetchStudent();
    this.fetchAdmin();
  },
  methods: {
    a,
      fetchStudent() {
        fetch('https://cluster-2022-2.dopolytech.fr/api/student/' + this.$route.params.id)
          .then(resp => resp.json())
          .then(json => {
            console.log(json);
          })
      },

    fetchAdmin() {
      fetch('https://cluster-2022-2.dopolytech.fr/api/login/' + this.$route.params.id)
          .then(resp => resp.json())
          .then(json => {
            console.log(json);
            if (json.admin===true){
              this.admin=true;
            }
          })
    }
  },
}
</script>

<style scoped>

</style>